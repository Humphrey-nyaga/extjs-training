Ext.define("MsTraining.view.album.AlbumGrid", {
  extend: "Ext.grid.Panel",
  xtype: "albumgrid",
  title: "Albums",
  controller: "albumgridviewcontroller",

  store: {
    type: "album",
  },

  columns: [
    { xtype: "rownumberer" },

    { dataIndex: "_id", text: "ID" },
    { dataIndex: "userId", text: "User ID" },
    { dataIndex: "title", text: "Title", flex: 2 },
  ],
  selModel: {
    selType: "checkboxmodel",
    mode: "MULTI",
  },
  bbar: {
    xtype: "pagingtoolbar",
    displayInfo: true,
  },
  tbar: [
    {
      text: "Add Album",
      listeners: {
        click: "onAddAlbumClicked",
      },
    },
  ],
  scrollable: true,
  height: 600,
});
