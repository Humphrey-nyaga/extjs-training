Ext.define("MsTraining.store.Post", {
  extend: "Ext.data.Store",
  alias: "store.post",
  model: "MsTraining.model.Post",
  requires: ["MsTraining.model.Post"],
  autoLoad: true,
  sorters: ['id', 'title'],
  // filters:{
  //   property:"userId",
  //   value:10
  // },
  pageSize: 25,
  page: 1,
});

