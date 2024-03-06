Ext.define("MsTraining.model.Todo", {
  extend: "Ext.data.Model",
  idProperty: "_id",
  fields: ["_id", "userId", { name: "completed", type: "boolean" }, "title"],


});
