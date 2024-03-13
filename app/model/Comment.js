Ext.define("MsTraining.model.Comment", {
  extend: "Ext.data.Model",
  idProperty: "_id",
  fields: [
    "_id",
    "postId",
    "name",
    "email",
    "body"

  ],

  limit: 25,
  start: 0,
  pageSize: 25,
  proxy: {
    type: "rest",
    url: "http://localhost:3000/comments",
    disableCaching: false,
  
    reader: {
      type: "json",
      rootProperty: "rows",
      totalProperty: "totalCount",
    },
  },
});
