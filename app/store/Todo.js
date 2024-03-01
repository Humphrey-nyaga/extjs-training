Ext.define("MsTraining.store.Todo", {
  extend: "Ext.data.Store",
  model: "MsTraining.model.Todo",
  alias: "store.todo",
  requires: ["MsTraining.model.Todo"],
  autoLoad: {
    start:1, limit:25
  },
});
