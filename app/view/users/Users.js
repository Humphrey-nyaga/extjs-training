Ext.define("MsTraining.view.users.Users", {
  extend: "Ext.panel.Panel",
  xtype: "users",
  viewModel: {
    data: {
      record: null,
    },
  },
  items: [
    {
      xtype: "userminimalgrid",
    },
    {
      xtype: "userinfopanel",
    },
  ],
});
