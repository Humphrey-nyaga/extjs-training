Ext.define("MsTraining.view.users.UserFormWindow", {
  extend: "Ext.window.Window",
  xtype: "userformwindow",

  requires: ["MsTraining.view.users.UserGridViewController"],
  controller: "userformcontroller",

  title: "Create a Post",
  width: 450,
  height: 350,
  maximizable: true,
  bodyPadding: 10,
  layout: "fit",
  //   fields: ["id", "name", "username", "email", "phone", "website"],

  items: [
    {
      xtype: "form",
      layout: "anchor",
      reference: "userform",
      itemId: "userform",
      defaults: {
        allowBlank: false,
        xtype: "textfield",
        anchor: "98%",
      },
      items: [
        {
          fieldLabel: "ID",
          name: "_id",
          emptyText: "user ID",
          disabled: true,
          submitValue: false
        }, {
          fieldLabel: "Name",
          name: "name",
          emptyText: "Full name",
        },
        {
          fieldLabel: "Username",
          name: "username",
          emptyText: "Username",
        },
        {
          fieldLabel: "Email",
          name: "email",
          emptyText: "Email",
        }, {
          fieldLabel: "Phone",
          name: "phone",
          emptyText: "Phone number",
        },
        {
          fieldLabel: "Website",
          name: "website",
          emptyText: "website",
        },
      ],
      buttons: [
        {
          text: "Save",
          disabled: true,
          formBind: true, // activated on valid data
          // handler: function (btn, e, eOpts) {
          //   var form = btn.up("form").getForm();
          //   if (form.isValid()) {
          //     console.log(form.getValues());
          //   }
          // },
          listeners: {
            click: "onSaveClick",
          },
        },
        {
          text: "Reset",
          disabled: false,
          handler: function () {
            this.up("form").getForm().reset(true);
          },
        },
      ],
    },
  ],
});
