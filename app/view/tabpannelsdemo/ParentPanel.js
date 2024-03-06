Ext.define("MsTraining.view.tabpannelsdemo.ParentPanel", {
  extend: "Ext.panel.Panel",
  xtype: "parentpanel",

  items: [
    {
      xtype: "usergrid",
    },
    {
      xtype: "postandalbumpanel",
    },
  ],
});
