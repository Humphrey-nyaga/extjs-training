Ext.define("MsTraining.view.posts.PostGrid", {
  extend: "Ext.grid.Panel",
  xtype: "postgrid",
  controller: "postgridviewcontroller",

  store: {
    type: "posts",
  },
  
  columns: [
    { dataIndex: "id", text: "ID" },
    { dataIndex: "title", text: "Title", flex: 1 },
    { dataIndex: "body", text: "Body", flex: 2, sortable: false },
    { dataIndex: "userId", text: "User ID", hidden: true, sortable: false },
  ],
  selModel: {
    selType: "checkboxmodel",
    mode: "SINGLE",
  },
  tbar: [
    {
      text: "Add Post",
      listeners: {
        click: "onAddPostClicked",
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
