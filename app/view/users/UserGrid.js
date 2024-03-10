Ext.define("MsTraining.view.users.UserGrid", {
  extend: "Ext.grid.Panel",
  xtype: "usergrid",
  controller: "usergridviewcontroller",
  title: "Users",

  store: {
    type: "users",
  },

  columns: [
    { dataIndex: "_id", text: "User ID" },
    { dataIndex: "username", text: "Username" },
    { dataIndex: "name", text: "Name" },
    { dataIndex: "email", text: "Email" },
    { dataIndex: "phone", text: "Phone" },
    { dataIndex: "website", text: "Website", flex: 1 },
    { dataIndex: "street", text: "Street" },
    { dataIndex: "suite", text: "Suite" },
    { dataIndex: "city", text: "City" },
    { dataIndex: "zipcode", text: "Zipcode" },
    { dataIndex: "lat", text: "Latitude" },
    { dataIndex: "lng", text: "Longitude", flex: 1 },
    { dataIndex: "companyName", text: "Company Name", flex: 1 },
    { dataIndex: "companyCatchPhrase", text: "CatchPhrase" },
    { dataIndex: "companyBs", text: "bs", flex: 1 },
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
    "->",
    {
      text: "SELECT",
      listeners: {
        click: "onSelectAlbumAndPostClicked",
      },
      bind: {
        disabled: "{!usergrid.selection}",
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
  height: 900,
});
