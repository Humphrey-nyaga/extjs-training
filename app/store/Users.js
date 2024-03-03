Ext.define("MsTraining.store.Users", {
  extend: "Ext.data.Store",
  alias: "store.users",
  requires: ["MsTraining.model.User"],
  model: "MsTraining.model.User",
  autoLoad: true,
});
