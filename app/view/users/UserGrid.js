Ext.define("MsTraining.view.users.UserGrid", {
  extend: "Ext.grid.Panel",
  xtype: "usergrid",
  controller: "usergridviewcontroller",

  store: {
    type: "users",
  },

  columns: [
    { dataIndex: "id", text: "User ID" },
    { dataIndex: "username", text: "Username" },
    { dataIndex: "name", text: "Name", flex: 1 },
    { dataIndex: "email", text: "Email", flex: 1 },
    { dataIndex: "phone", text: "Phone", flex: 1 },
    { dataIndex: "website", text: "Website", flex: 1 },
  ],
  selModel: {
    selType: "checkboxmodel",
    mode: "SINGLE",
  },
  tbar: [
    {
      text: "Add User",
      listeners: {
        click: "onAddUserClicked",
      },
    },
  ],
  bbar: [
    {
      xtype: "pagingtoolbar",
      displayInfo: true,
      pageSize: 10,
    },
  ],
  scrollable: true,
  height: 600,
});
