Ext.define("MsTraining.view.login.Login", {
  extend: "Ext.window.Window",

  xtype: "login",
  controller: "login",
  width: 350,
  height: 300,
  maximizable: false,
  draggable: false,
  bodyPadding: 10,
  title: "Login",
  closable: false,
  autoShow: true,
  layout: "fit",

  requires: [
    "MsTraining.view.login.LoginController",
    "Ext.form.Panel",
    "MsTraining.util.Util",
  ],
  items: {
    xtype: "form",
    reference: "form",
    layout: "anchor",
    defaults: {
      afterLabelTextTpl: MsTraining.util.Util.required,
    },
    items: [
      {
        xtype: "textfield",
        name: "username",
        fieldLabel: translations.user,
        allowBlank: false,
      },
      {
        xtype: "textfield",
        name: "password",
        inputType: "password",
        fieldLabel: translations.password,
        //vtype:'customPass', // eg
        allowBlank: false,
      },
      {
        xtype: "displayfield",
        hideEmptyLabel: false,
        afterLabelTextTpl: "",
        value: "Enter any non-blank password",
      },
      {
        xtype: "datefield",
        fieldLabel: "Date",
      },
    ],
    buttons: [
      {
        xtype: "splitbutton",
        reference: "lng-btn",
        menu: {
          xtype: "menu",
          defaults: {
            listeners: {
              click: "onMenuItemClick",
            },
          },
          items: [
            {
              xtype: "menuitem",
              iconCls: "en",
              text: "English",
            },
            {
              xtype: "menuitem",
              iconCls: "es",
              text: "Español",
            },
            {
              xtype: "menuitem",
              iconCls: "pt_BR",
              text: "Português",
            },
          ],
        },
      },
      "->",
      {
        text: translations.login,
        formBind: true,
        listeners: {
          click: "onLoginClick",
        },
      },
    ],
  },
});
