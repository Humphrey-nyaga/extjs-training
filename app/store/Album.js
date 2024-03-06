Ext.define("MsTraining.store.Album", {
  extend: "Ext.data.Store",
  alias: "store.album",
  model: "MsTraining.model.Album",
  requires: ["MsTraining.model.Album"],
  autoLoad: false,
  pageSize: 25,
  proxy: {
    type: "rest",
    url: "http://localhost:3000/albums/",
    reader: {
      type: "json",
      rootProperty: "rows",
      totalProperty: "totalCount",
    },
  },
});

