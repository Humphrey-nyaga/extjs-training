Ext.define(
  "MsTraining.model.Comment",
  {
    extend: "Ext.data.Model",
    requires: ["MsTraining.model.Post"],

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
  },
  function () {
    let comment = new MsTraining.model.Comment({
      id: "2",
      name: "Hello",
    });
    console.log("Is Comment Valid? " + comment.isValid()); // validate the comment
  }
);
