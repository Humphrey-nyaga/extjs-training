Ext.define("MsTraining.view.album.AlbumFormWindow", {
  extend: "Ext.window.Window",
  xtype: "albumform",

  controller: "albumformcontroller",

  title: "Create an Album",

  height: 300,
  width: 520,
  maximizable: true,
  layout: "fit",

  items: [
    {
      xtype: "form",
      layout: "form",
      reference: "albumform",
      itemId: "albumform",
      items: [
        {
          fieldLabel: "Title",
          name: "title",
          allowBlank: false,
          emptyText: "Album Title",
          xtype: "textfield",
        },
        {
          fieldLabel: "Album ID",
          name: "_id",
          emptyText: "Album ID",
          allowBlank: false,
          xtype: "textfield",
        },
        {
          fieldLabel: "User ID",
          name: "userId",
          emptyText: "User ID",
          allowBlank: false,
          xtype: "textfield",
        },
      ],
      buttons: [
        {
          text: "Save",
          disabled: true,
          formBind: true,
          listeners: {
            click: "onSaveClick",
          },
        },
        {
          text: "Reset",
        },
      ],
    },
  ],
});
