Ext.define(
  "MsTraining.model.Comment",
  {
    extend: "Ext.data.Model",
    requires: ["MsTraining.model.Post"],
    idProperty:"_id",

    fields: [
      { name: "postId", reference: "Post", type: "int" }, // define association between objects
      { name: "_id", type: "int" },
      { name: "name", type: "string" },
      { name: "body", type: "string" },
      { name: "email", type: "string" },
    ],

    validators: [
      {
        postId: ["presence"],
        name: ["presence", { type: "length", min: 7 }],
      },
    ],
  }
);
