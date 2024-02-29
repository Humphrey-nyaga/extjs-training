Ext.define("MsTraining.view.album.AlbumGrid", {
  extend: "Ext.grid.Panel",
  xtype: "albumgrid",
  store: {
    type: "album",
  },
  columns: [
    { dataIndex: "id", text: "ID" },
    { dataIndex: "userId", text: "User ID" },
    { dataIndex: "title", text: "Title", flex:2 },
  ],
  selModel: {
    selType: "checkboxmodel",
    mode: "MULTI",
  },
  bbar: {
    xtype: "pagingtoolbar",
    displayInfo: true,
  },
  scrollable: true,
  height: 600,
});
