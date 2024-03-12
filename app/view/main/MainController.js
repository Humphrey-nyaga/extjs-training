/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define("MsTraining.view.main.MainController", {
  extend: "Ext.app.ViewController",

  alias: "controller.main",

  onItemSelected: function (sender, record) {
    Ext.Msg.confirm("Confirm", "Are you sure?", "onConfirm", this);
  },

  onConfirm: function (choice) {
    if (choice === "yes") {
      //
    }
  },
  onLogout: function () {
    console.log("handler called...............");
    localStorage.removeItem("MsAppLoggedIn");

    this.getView().destroy();

    Ext.widget("login");
  },

  getMainPanel: function name(params) {
    return Ext.ComponentQuery.query("mainpanel")[0];
  },
  onMainMenuItemClick: function (view, record, item, index, e, eOpts) {
    let mainPanel = this.getMainPanel();
    console.log(mainPanel);
    console.log(record);

    let activeTab = mainPanel.items.findBy(
      (tabItem) => tabItem.title === record.get("text")
    );
    
    if (!activeTab && record.get('leaf')) {
      // create tab using details from record
      activeTab = mainPanel.add({
        xtype: "panel",
        title: record.get("text"),
        iconCls: record.get("iconCls"),
        closable: true,
      });
    }
    mainPanel.setActiveTab(activeTab);
  },
});
