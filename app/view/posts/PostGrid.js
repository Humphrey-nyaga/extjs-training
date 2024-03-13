Ext.define("MsTraining.view.posts.PostGrid", {
  extend: "Ext.container.Container",
  xtype: "postgrid",

  controller: "postgridviewcontroller",
  

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
        { dataIndex: "title", text: "Title", flex: 1, editor: "textfield" },
        {
          dataIndex: "body",
          text: "Body",
          flex: 2,
          editor: {
            xtype: "textarea",
            allowBlank: false,
          },
        },
        { dataIndex: "userId", text: "User ID" },
      ],
      selModel: {
        selType: "checkboxmodel",
        mode: "SINGLE",
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
      tbar: [
        {
          text: "Add Post",
        },
      ],
      listeners: {
        cellclick: "onPostCommentSelected",
      },
      scrollable: true,

      plugins: {
        rowediting: {
          clicksToEdit: 1,
        },
      },
    },

    {
      xtype: "splitter",
    },
    {
      xtype: "commentgrid",
    },
  ],
});
