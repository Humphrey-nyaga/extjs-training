Ext.define("MsTraining.model.Post", {
  extend: "Ext.data.Model",
  idProperty: "id",
  fields: ["userId", "id", "title", "body"],

  proxy: {
    type: "ajax",
    url: "https://jsonplaceholder.typicode.com/posts",
    enablePaging:true,
    reader: {
      type: "json",
    },
  },
});
