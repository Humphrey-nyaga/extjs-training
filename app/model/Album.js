Ext.define("MsTraining.model.Album", {
  extend: "Ext.data.Model",
  idProperty: "id",
  //fields: ["userId", "id", "title"],
  fields: [
    {
      name: "userId",
      type: "int",
    },
    {
      name: "id",
      type: "int",
    },
    {
      name: "title",
      type: "string",
    },
  ],

  proxy: {
    type: "rest",
    url: "https://jsonplaceholder.typicode.com/albums",
    reader: {
      type: "json",
    },
  },
});
