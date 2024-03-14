Ext.define("MsTraining.view.posts.CommentGrid", {
  extend: "Ext.grid.Panel",
  xtype: "commentgrid",

  store: {
    type: "comment",
  },

  title: "Comments",
  flex: 1,
  scrollable: true,
  collapsible: true,
  collapsed: true,
  hidden:true,
  collapseDirection: "right",

  columns: [
    { dataIndex: "_id", text: "ID" },
    { dataIndex: "postId", text: "Post ID" },
    { dataIndex: "name", text: "Name", flex:1},
    { dataIndex: "body", text: "Body",flex:2 },
    { dataIndex: "email", text: "Email" },
  ],

  selModel: {
    selType: "checkboxmodel",
    mode: "SINGLE",
  },

  bbar: {
    xtype: "pagingtoolbar",
    displayInfo: true,
  },

  tbar: {
    items: [
      {
        text: "Add Comment",
      },
    ],
  },

  plugins: {
    rowediting: {
      clicksToEdit: 1,
    },
  },
});
