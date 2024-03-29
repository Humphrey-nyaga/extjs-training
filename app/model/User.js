Ext.define("MsTraining.model.User", {
  extend: "Ext.data.Model",
  idProperty: "_id",
  fields: [
    "_id",
    "name",
    "username",
    "email",
    "phone",
    "website",
    { name: "street", type: "string" },
    { name: "suite", type: "string" },
    { name: "city", type: "string" },
    { name: "zipcode", type: "string" },
    { name: "lat", type: "string" },
    { name: "lng", type: "string" },
    { name: "companyName", type: "string" },
    { name: "companyCatchPhrase", type: "string" },
    { name: "companyBs", type: "string" },
  ],

  limit: 25,
  start: 0,
  pageSize: 25,
  proxy: {
    type: "rest",
    url: "http://localhost:3000/users",
     disableCaching: false,
    // api: {
    //   read: "http://localhost:3000/users",
    //   //read: "http://localhost:8080/api/v1/user/",
    //   create: "http://localhost:3000/users",
    //   //create: "http://localhost:8080/api/v1/user/",
    // },
    reader: {
      type: "json",
      rootProperty: "rows",
      totalProperty: "totalCount",
    },
  },
});
