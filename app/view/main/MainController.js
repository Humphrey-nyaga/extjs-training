/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define("MsTraining.view.main.MainController", {
  extend: "Ext.app.ViewController",

  alias: "controller.main",

  routes: {
    home: "onHomeRoute",
    "users|posts|todos|albums": {
      action: "onRoute",
      before: "onBeforeRoute",
    },
    "users/:id": {
      action: "onshowUser",
      before: "onBeforeShowUser",
      conditions: {
        ":id": "([0-9]+)",
      },
    },
  },

  onHomeRoute: function () {
    let mainPanel = this.getMainPanel();
    if (mainPanel) {
      mainPanel.setActiveTab(0);
    }
  },

  getMainPanel: function () {
    return Ext.ComponentQuery.query("mainpanel")[0];
  },

  getMainMenu: function () {
    return Ext.ComponentQuery.query("mainmenu")[0];
  },

  onRoute: function () {
    let me = this;
    let hash = Ext.util.History.getToken();
    let mainMenu = me.getMainMenu();
    me.locateMenuItem(mainMenu, hash);
  },

  onBeforeRoute: function (action) {
    var hash = Ext.util.History.getToken();

    //TODO: Make Ajax request to the server
    //TODO: Check if the user has permissions to navigate to this path
    //TODO: on success => action.resume()
    //TODO: on failure => action.stop()

    var hasAccessToUsers = localStorage.getItem("hasAccessToUsers");
    if (hasAccessToUsers) {
      action.resume();
    } else {
      Ext.Msg.show({
        title: "Failure",
        msg: "You do not have permission to access: /" + hash,
        buttons: Ext.Msg.OK,
        icon: Ext.Msg.ERROR,
      });
      action.stop();
    }
  },

  locateMenuItem: function (mainMenu, className) {
    let rootNode = mainMenu.getRootNode();
    let record = rootNode.findChild("className", className, true);
    console.log("::::::::::::::::::This is::::::::::::::::::: " + this);
    this.openTab(record);
    mainMenu.getSelectionModel().select(record);
  },

  onLogout: function () {
    // Remove the localStorage key/value
    localStorage.removeItem("MsAppLoggedIn");

    this.getView().destroy();
    Ext.widget("login");
  },

  openTab: function (record) {
    if (record) {
      let mainPanel = this.getMainPanel();
      let activeTab = mainPanel.items.findBy(
        (tabItem) => tabItem.title === record.get("text")
      );
      if (!activeTab && record.get("leaf")) {
        //create new tab using details from the record
        activeTab = mainPanel.add({
          closable: true,
          xtype: record.get("className"),
          title: record.get("text"),
          iconCls: record.get("iconCls"),
        });
      }
      mainPanel.setActiveTab(activeTab);
    }
  },
  onMainMenuItemClick: function (grid, record, item, index, e, eOpts) {
    this.redirectTo(record.get("className"));
  },

  onBeforeShowUser: function (id, action) {
    // get and the grid of the users
    var me = this,
      hash = "users",
      mainMenu = me.getMainMenu();
    me.locateMenuItem(mainMenu, hash);

    // get grid reference
    let grid = this.getUserGrid();

    // get the grid store
    let store = grid.getStore();
    console.log(store);

    // TODO: This function works at times and fails to retrieve data at other times
    // get the record from store
    let record = store.getById(id);
    console.log(record);

    if (record) {
      action.resume();
    } else {
      action.stop();
    }
  },

  onshowUser: function (id) {
    // grid.getSelectionModel().select(record);

    this.getUserGrid().fireEvent("selectuser", id); // fire an even when a user's id is specified in url e.g /#user/1
  },

  getUserGrid: function () {
    return Ext.ComponentQuery.query("userminimalgrid")[0];
  },
});
