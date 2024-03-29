/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define("MsTraining.view.main.MainBackup", {
  extend: "Ext.tab.Panel",
  xtype: "app-main-backup",

  requires: [
    "Ext.plugin.Viewport",
    "Ext.window.MessageBox",

    "MsTraining.view.main.MainController",
    "MsTraining.view.main.MainModel",
    "MsTraining.view.main.List",
  ],

  controller: "main",
  viewModel: "main",
  //plugins: "viewport",
  ui: "navigation",

  tabBarHeaderPosition: 1,
  titleRotation: 0,
  tabRotation: 0,

  header: {
    layout: {
      align: "stretchmax",
    },
    title: {
      bind: {
        text: "{name}",
      },
      flex: 0,
    },
    iconCls: "fa-th-list",
  },

  tabBar: {
    flex: 1,
    layout: {
      align: "stretch",
      overflowHandler: "none",
    },
  },

  responsiveConfig: {
    tall: {
      headerPosition: "top",
    },
    wide: {
      headerPosition: "left",
    },
  },

  defaults: {
    bodyPadding: 20,
    tabConfig: {
      responsiveConfig: {
        wide: {
          iconAlign: "left",
          textAlign: "left",
        },
        tall: {
          iconAlign: "top",
          textAlign: "center",
          width: 120,
        },
      },
    },
  },

  items: [
    {
      title: "Home",
      iconCls: "fa-home",
      // The following grid shares a store with the classic version's grid as well!
      items: [
        {
          xtype: "mainlist",
        },
      ],
    },
    {
      title: "Grouping and Summary",
      iconCls: "fa-user",
      items: [
        {
          xtype: "groupingsummary",
        },
      ],
    },

    {
      title: "Users",
      iconCls: "fa-user",
      items: [
        {
          xtype: "parentpanel",
        },
      ],
    },
    {
      title: "Posts",
      iconCls: "fa-user",
      items: [
        {
          xtype: "postgrid",
        },
      ],
    },
    // {
    //   title: "Albums",
    //   iconCls: "fa-images",
    //   items: [
    //     {
    //       //  xtype: "albumgrid",
    //     },
    //   ],
    // },
    // // <FontAwesomeIcon icon="fa-solid " />
    // {
    //   title: "Comments",
    //   iconCls: "fa-solid fa-list",
    //   items: [
    //     {
    //        //xtype: "commentgrid",
    //     },
    //   ],
    // },
    {
      title: "Checkout",
      iconCls: "fas fa-shopping-cart",
      items: [
        {
          xtype: "checkoutgrid",
        },
      ],
    },
    {
      title: "Settings",
      iconCls: "fa-cog",
      bind: {
        html: "{loremIpsum}",
      },
    },
    {
      title: "Log out",
      iconCls: "fas fa-sign-out-alt",
    },
  ],
  listeners: {
    tabchange: function (tabPanel, newCard, oldCard, eOpts) {
      if (newCard.title === "Log out") {
        this.getController().onLogout();
      }
    },
  },
});
