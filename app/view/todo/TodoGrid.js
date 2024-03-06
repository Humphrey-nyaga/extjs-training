Ext.define(
  "MsTraining.view.todo.TodoGridView",

  {
    extend: "Ext.grid.Panel",
    xtype: "todogrid",
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
    bbar: 
      {
        xtype: "pagingtoolbar",
        displayInfo: true,
        pageSize: 10,
      },
    
    height: 600,
  }
);
