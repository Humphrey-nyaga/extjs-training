Ext.define("MsTraining.model.Todo", {
  extend: "Ext.data.Model",
  idProperty: "id",
  fields: ["id", "userId", { name: "completed", type: "boolean" }, "title"],

  proxy: {
    type: "ajax",
    url: "https://jsonplaceholder.typicode.com/todos",
    reader: {
      type: "json",
    },
  },
});
