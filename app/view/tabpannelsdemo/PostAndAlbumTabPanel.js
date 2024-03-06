Ext.define("MsTraining.view.tabpannelsdemo.PostAndAlbumTabPanel", {
  extend: "Ext.tab.Panel",
  xtype: "postandalbumpanel",
  reference: "postandalbumpanel",
  height: 0,
  items: [
    {
      title: "Albums",
      items: [
        {
          xtype: "albumgrid",
        },
      ],
    },
    {
      title: "Todos",
      items: [
        {
          xtype: "todogrid",
        },
      ],
    },
  ],
});
