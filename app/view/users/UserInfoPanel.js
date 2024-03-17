Ext.define("MsTraining.view.users.UserInfoPanel", {
  extend: "Ext.tab.Panel",
  xtype: "userinfopanel",
  height: 0,
  title:'User Details',
  items: [
    {
      xtype: "form",
      title: "User Information",
      layout: "form",
      items: [
        {
          xtype: "textfield",
          fieldLabel: "Username",
          bind: {
            value: "{record.username}",
          },
        },
        {
          xtype: "textfield",
          fieldLabel: "Name",
          bind: {
            value: "{record.name}",
          },
        },
        {
          xtype: "textfield",
          fieldLabel: "Email",
          bind: {
            value: "{record.email}",
          },
        },
      ],
    },
  ],
});