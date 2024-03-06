Ext.define("MsTraining.store.Comment", {
  extend: "Ext.data.Store",
  alias: "store.comments",
  model: "MsTraining.model.Comment",
  requires: ["MsTraining.model.Comment"],
  autoLoad:false,

  proxy: {
    type: "rest",
    url: "http://localhost:3000/comments",
    readers: {
      type: "json",
      rootProperty: "rows",
      totalProperty: "totalCount",
    },
  },
});
