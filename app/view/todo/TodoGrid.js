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
    columns: [
      { dataIndex: "_id", text: "Id" },
      { dataIndex: "title", text: "Title", flex: 2 },
      { dataIndex: "userId", text: "User ID" },
      { dataIndex: "completed", text: "Completed Status" },
    ],
    selModel: {
      selType: "checkboxmodel",
      mode: "MULTI",
    },
    bbar: {
      xtype: "pagingtoolbar",
      displayInfo: true,
      pageSize: 10,
    },
    tbar: [
      {
        text: "Add Todo",
        listeners: {
          click: "onAddTodo",
        },
      },
      {
        text: "View Todo",
        handler: "onViewTodo",
        bind: {
          disabled: "{!todogrid.selection}",
        },
      },
    ],

    height: 600,
  }
);
