Ext.define(
  "MsTraining.view.todo.TodoGridView",

  {
    extend: "Ext.grid.Panel",
    xtype: "todogrid",
    controller: "todogridviewcontroller",
    title: "Todos",
    store: {
      type: "todo",
    },
    bodyPadding: 5,

    columns: [
      { xtype: "rownumberer" },
      { dataIndex: "_id", text: "Id" },
      { dataIndex: "title", text: "Title", flex: 2 },
      { dataIndex: "userId", text: "User ID" },
      { dataIndex: "completed", text: "Completed Status" },
    ],
    selModel: {
      selType: "checkboxmodel",
      mode: "SINGLE",
    },
    bbar: {
      xtype: "pagingtoolbar",
      displayInfo: true,
      pageSize: 10,
    },
    tbar: [
      {
        text: "Add",
        iconCls: "fas fa-plus",
        listeners: {
          click: "onAddTodo",
        },
      },
      {
        text: "Update",
        iconCls: "fas fa-edit",
        handler: "onViewTodo",
        id: "update",
        bind: {
          disabled: "{!todogrid.selection}",
        },
      },
      {
        text: "Delete",
        iconCls: "fas fa-trash",
        id: "delete",
        listeners: {
          click: "onDeleteTodo",
        },
        disabled: "true",
      },
    ],
    listeners: {
      cellclick: "onClickCellActivateButtons",
    },

    height: 600,
  }
);
