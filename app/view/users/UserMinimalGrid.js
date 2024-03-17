Ext.define("MsTraining.view.users.UserMinimalGrid", {
  extend: "Ext.grid.Panel",
  xtype: "userminimalgrid",
  controller: "usergridviewcontroller",
  title: "Users",
  requires: ["MsTraining.store.Users"],

  init: function () {
    let grid = this.getView(),
      store = grid.getStore();
    store.load();
  },
  store: {
    type: "users",
  },

  columns: [
    { xtype: "rownumberer" },
    { dataIndex: "_id", text: "User ID" },
    { dataIndex: "username", text: "Username", editor: "textfield", flex: 1 },
    { dataIndex: "name", text: "Name", editor: "textfield", flex: 1 },
    {
      dataIndex: "email",
      text: "Email",
      editor: "textfield",
      flex: 1,
      renderer: function (value) {
        return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value);
      },
    },
  ],
  // selModel: {
  //   selType: "checkboxmodel",
  //   mode: "SINGLE",
  // },
  plugins: {
    rowediting: {
      clicksToEdit: 1,
    },
  },
  tbar: [
    {
      text: "Show Form",
      listeners: {
        click: "onSelectUserPopulateForm",
      },
      bind: {
        disabled: "{!userminimalgrid.selection}",
      },
    },
  ],
  bbar: {
    xtype: "pagingtoolbar",
    displayInfo: true,
    pageSize: 25,
  },
  listeners: {
    cellclick: "onClickUserRowCell",
  },
  scrollable: true,
  // height: 900,
  onSelectUser: function (id) {
    let me = this,
      grid = me.getView(),
      vm = me.getViewModel(),
      refs = me.getReferences();
    let record = grid.getStore().findRecord("_id", id);
    vm.set("record", record);
    grid.getSelectionModel().select(record);
  },
});
