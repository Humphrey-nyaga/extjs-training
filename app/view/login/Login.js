Ext.define("MsTraining.view.login.Login", {
  extend: "Ext.window.Window",

  xtype: "login",
  controller: "login",
  width: 350,
  height: 300,
  maximizable: true,
  bodyPadding: 10,
  title: "Login",
  closable: false,
  autoShow: true,
  layout: "fit",

  requires: ["MsTraining.view.login.LoginController", "Ext.form.Panel"],
  items: {
    xtype: "form",
    reference: "form",
    layout:"anchor",
    items: [
      {
        xtype: "textfield",
        name: "username",
        fieldLabel: "Username",
        allowBlank: false,
      },
      {
        xtype: "textfield",
        name: "password",
        inputType: "password",
        fieldLabel: "Password",
        allowBlank: false,
      },
      {
        xtype: "displayfield",
        hideEmptyLabel: false,
        value: "Enter any non-blank password",
      },
    ],
    buttons: [
      {
        text: "Login",
        formBind: true,
        listeners: {
          click: "onLoginClick",
        },
      },
    ],
  },
});
