Ext.define("MsTraining.store.Posts", {
  extend: "Ext.data.Store",
  alias: "store.posts",
  model: "MsTraining.model.Post",
  requires: ["MsTraining.model.Post"],
  autoLoad: true,
  sorters: ["id", "title"],
  pageSize: 25,

  proxy: {
    type: "rest",
    url: "http://localhost:3000/posts/",
    reader: {
      type: "json",
      rootProperty: "rows",
      totalProperty: "totalCount",
    },
  },
});

