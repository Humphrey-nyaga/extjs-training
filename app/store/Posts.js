Ext.define("MsTraining.store.Posts", {
  extend: "Ext.data.Store",
  alias: "store.posts",
  model: "MsTraining.model.Post",
  requires: ["MsTraining.model.Post"],
  autoLoad: true,
  sorters: ["id", "title"],

  proxy: {
    type: "ajax",
    url: "http://localhost:3000/posts",
    enablePaging: true,
    reader: {
      type: "json",
      rootProperty: "rows",
      totalProperty: "totalCount",
    },
  },
  pageSize: 25,

 
});

