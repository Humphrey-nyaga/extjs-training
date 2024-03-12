Ext.define("MsTraining.store.Todo", {
  extend: "Ext.data.Store",
  model: "MsTraining.model.Todo",
  alias: "store.todo",
  requires: ["MsTraining.model.Todo"],
  autoLoad: true,
  pageSize:25,
  
  proxy: {
    type: "rest",
    url: "http://localhost:3000/todos/",
    reader: {
      type: "json",
      rootProperty: "rows",
      totalProperty: "totalCount",
    },
  },
});
