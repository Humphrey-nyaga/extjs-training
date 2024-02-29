Ext.define("MsTraining.store.Album", {
  extend: "Ext.data.Store",
  alias: "store.album",
  model: "MsTraining.model.Album",
  requires: ["MsTraining.model.Album"],
  autoLoad: true,
});

