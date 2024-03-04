Ext.define("MsTraining.store.Users", {
  extend: "Ext.data.Store",
  alias: "store.users",
  requires: ["MsTraining.model.User"],
  model: "MsTraining.model.User",
  autoLoad: true,
  limit: 25,
  start: 0,
  pageSize: 25,
  proxy: {
    type: "rest",
    url: "http://localhost:3000/users",
    //  disableCaching: false,
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
