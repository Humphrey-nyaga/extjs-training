Ext.define("MsTraining.model.Album", {
  extend: "Ext.data.Model",
  idProperty: "_id",
  //fields: ["userId", "id", "title"],
  fields: [
    {
      name: "userId",
      type: "int",
    },
    {
      name: "_id",
      type: "int",
    },
    {
      name: "title",
      type: "string",
    },
  ],

  
});
