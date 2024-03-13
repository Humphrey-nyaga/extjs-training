Ext.define("MsTraining.view.users.UserGrid", {
  extend: "Ext.grid.Panel",
  xtype: "usergrid",
  controller: "usergridviewcontroller",
  title: "Users",

  store: {
    type: "users",
  },

  columns: [
    { xtype: "rownumberer" },
    { dataIndex: "_id", text: "User ID" },
    { dataIndex: "username", text: "Username", editor: "textfield" },
    { dataIndex: "name", text: "Name", editor: "textfield" },
    {
      dataIndex: "email",
      text: "Email",
      editor: "textfield",
      renderer: function (value) {
        return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value);
      },
      editor: {
        xtype: "textfield",
        completeOnEnter: false,
        allowBlank: false,
      },
    },
    { dataIndex: "phone", text: "Phone", editor: "textfield" },
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
  plugins: {
    rowediting: {
      clicksToEdit: 1,
    },
  },
  tbar: [
    {
      text: "Add User",
      listeners: {
        click: "onAddUserClicked",
      },
    },
    {
      text: "Model Binding",
      handler: "onModelBinding",
    },
    {
      text: "VTypes",
      listeners: {
        click: "onVTypesClicked",
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
