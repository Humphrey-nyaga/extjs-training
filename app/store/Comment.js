Ext.define("MsTraining.store.Comment", {
  extend: "Ext.data.Store",
  alias: "store.comment",
  model: "MsTraining.model.Comment",
  requires: ["MsTraining.model.Comment"],
  autoLoad: true,
});
