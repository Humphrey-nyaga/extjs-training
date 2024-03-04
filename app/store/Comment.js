Ext.define("MsTraining.store.Comment", {
  extend: "Ext.data.Store",
  alias: "store.comment",
  model: "MsTraining.model.Comment",
  requires: ["MsTraining.model.Comment"],
  autoLoad: true,
  proxy: {
    type: "rest",
    url: "http://localhost:3000/comments/",
    readers: {
      type: "json",
      rootProperty: "rows",
      totalProperty: "totalCount",
    },
  },
  filterByPostId: function (postId) {
    this.getProxy()
      .setUrl(`http://localhost:3000/posts/${postId}/comments`)
      .setReader({
        type: "json",
        rootProperty: "rows",
        totalProperty: "totalCount",
      });
    this.load();
  },
});
