Ext.define(
  "MsTraining.model.Comment",
  {
    extend: "Ext.data.Model",
    requires: ["MsTraining.model.Post"],

    fields: [
      { name: "postId", reference: "Post", type: "int" }, // define association between objects
      "id",
      "name",
      "email",
      "body",
    ],
    proxy: {
      type: "rest",
      url: "https://jsonplaceholder.typicode.com/comments",
      readers: {
        type: "json",
      },
    },
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
