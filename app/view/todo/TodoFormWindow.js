Ext.define("MsTraining.view.todo.TodoFormWindow", {
  extend: "Ext.window.Window",
  xtype: "todoform",
  controller: "todoformcontroller",

  height: 300,
  width: 520,
  autoShow: true,
  closable: true,
  modal: true,
  layout: "fit",
  viewModel: {
    data: {
      newTitle: null,
      record: null,
    },
  },
  bind: {
    title: "{newTitle}",
  },
  items: [
    {
      xtype: "form",
      layout: "form",
      reference: "todoform",
      jsonSubmit: true,
      defaultType: "textfield",
      items: [
        {
          fieldLabel: "Todo ID",
          name: "_id",
          reference: "todoIdField",
          bind: {
            value: "{record._id}",
          },
          readOnly: true,
        },
        {
          fieldLabel: "Title",
          name: "title",
          allowBlank: false,
          minLength: 10,
          bind: {
            value: "{record.title}",
          },
        },
        {
          fieldLabel: "Completed",
          xtype: "checkbox",
          boxLabel: "Completed",
          name: "completed",
          bind: {
            value: "{record.completed}",
          },
        },
        {
          fieldLabel: "Date Completed",
          xtype: "datefield",
          name: "dateCompleted",
          maxValue: Ext.Date.add(new Date()),
          bind: {
            value: "{!record.completed}",
            disabled: "{!record.completed}",
          },
        },
        {
          fieldLabel: "User ID",
          name: "userId",
          bind: {
            value: "{record.userId}",
          },
        },
      ],
      buttons: [
        {
          text: "Cancel",
        },
        {
          text: "Save",
          formBind: true,
          handler: "onSave",
        },
      ],
    },
  ],
});
