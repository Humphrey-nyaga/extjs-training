Ext.define("MsTraining.view.posts.PostGrid", {
  extend: "Ext.container.Container",
  xtype: "postgrid",

  controller: "postgridviewcontroller",
  viewModel: "postviewmodel",

  height: 600,
  layout: {
    type: "hbox",
    align: "stretch",
  },

  items: [
    {
      store: {
        type: "posts",
      },
      xtype: "grid",
      title: "Posts",
      flex: 1,
      scrollable: true,
      columns: [
        { dataIndex: "_id", text: "ID" },
        { dataIndex: "title", text: "Title", flex: 1 },
        { dataIndex: "body", text: "Body", flex: 2 },
        { dataIndex: "userId", text: "User ID" },
      ],
      selModel: {
        selType: "checkboxmodel",
        mode: "SINGLE",
        listeners: {
          select: "onPostCommentSelected",
        },
      },
      // tbar: [
      //   {
      //     text: "Add Post",
      //     listeners: {
      //       click: "onAddPostClicked",
      //     },
      //   },
      // ],
      bbar: [
        {
          xtype: "pagingtoolbar",
          displayInfo: true,
        },
      ],
      scrollable: true,
    },
    {
      xtype: "splitter",
    },
    {
      xtype: "grid",
      reference: "postcommentsgrid",
      title: "Comments",
      flex: 1,
      hidden: true,
      collapsible: true,
      collapseDirection: "right",
     
      bbar: [
        {
          xtype: "pagingtoolbar",
          displayInfo: true,
        },
      ],
      columns: [
        { dataIndex: "_id", text: "ID" },
        { dataIndex: "postId", text: "Post ID" },
        { dataIndex: "name", text: "Name" },
        { dataIndex: "email", text: "Email" },
        { dataIndex: "body", text: "Body", flex: 2 },
      ],
    },
  ],
});
