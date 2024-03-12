Ext.define("MsTraining.store.Menu", {
  extend: "Ext.data.TreeStore",
  alias: "store.menu",
  root: {
    text: "Root",
    expanded: true,
    children: [
      {
        text: "Security",
        iconCls: "fas fa-users-cog",
        children: [
          {
            text: "Users",
            iconCls: "fa fa-users",
            leaf: true,
            className: "parentpanel",
          },
          {
            text: "Permission",
            iconCls: "fas fa-user-secret",
            leaf: true,
          },
        ],
      },
      {
        text: "Static Data",
        iconCls: "fa fa-database fa-lg",
        children: [
          {
            text: "Users",
            iconCls: "fa fa-users",
            className: "parentpanel",
            leaf: true,
          },
          {
            text: "Permission",
            iconCls: "fa fa-users",
            leaf: true,
          },
        ],
      },
      {
        text: "Json Placeholder Data",
        iconCls: "fa fa-database fa-lg",
        children: [
          {
            text: "Users",
            iconCls: "fa fa-users",
            className: "parentpanel",
            leaf: true,
          },
          {
            text: "Todos",
            iconCls: "fa-solid fa-list",
            className: "todogrid",

            leaf: true,
          },
          {
            text: "Albums",
            iconCls: "fa-images",
            className: "albumgrid",
            leaf: true,
          },
        ],
      },
    ],
  },
});
