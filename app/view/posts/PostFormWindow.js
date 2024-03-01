Ext.define("MsTraining.view.posts.PostFormWindow", {
  extend: "Ext.window.Window",
  xtype: "postformwindow",

  requires: ["MsTraining.view.post.PostGridViewController"],
  controller: "postgridviewcontroller",

  title: "Create a Post",
  width: 450,
  height: 350,
  maximizable: true,
  layout: "fit",

  items: [
    {
      xtype: "form",
      layout: "anchor",
      items: [
        {
          fieldLabel: "User ID",
          name: "userId",
          allowBlank: false,
          emptyText: "User ID",
          xtype: "textfield",
          anchor: "100%",
        },
        {
          fieldLabel: "Title",
          name: "title",
          allowBlank: false,
          emptyText: "Post Title",
          xtype: "textfield",
          anchor: "100% 15%",
        },
        {
          fieldLabel: "Body",
          name: "body",
          allowBlank: false,
          xtype: "textareafield",
          grow: true,
          emptyText: "Post Body",
          anchor: "100% 65%",
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
            click: "onSaveNewPost",
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
