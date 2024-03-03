Ext.define("MsTraining.model.User", {
  extend: "Ext.data.Model",
  idProperty: "id",
  fields: ["id", "name", "username", "email", "phone", "website"],

  proxy: {
    type: "rest",
    url: "http://localhost:8080/api/v1/user",
    disableCaching:false,
    api: {
      read: "http://localhost:8080/api/v1/user/",
      create: "http://localhost:8080/api/v1/user/",
    },
    reader: {
      type: "json"
    },
  },
});
