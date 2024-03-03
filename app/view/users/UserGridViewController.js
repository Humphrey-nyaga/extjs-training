Ext.define("MsTraining.view.users.UserGridViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.usergridviewcontroller",

  onAddUserClicked: function (btn, e, eOpts) {
    console.log(btn.getText() + " was clicked");
    var wd = Ext.create({
      xtype: "userformwindow",
    });
    wd.show();
  },


});
