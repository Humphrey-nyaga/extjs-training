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

  onSelectAlbumAndPostClicked: function (btn) {
    var grid = this.getView();
    let lowerPanel = Ext.ComponentQuery.query("postandalbumpanel")[0];

    if (grid.getHeight() === 900) {
      grid.setHeight(450);
      lowerPanel.setHeight(450);
      btn.setText("UNSELECT");
    } else {
      grid.setHeight(900);
      lowerPanel.setHeight(0);
      btn.setText("SELECT");
    }
  },

  onClickUserRowCell: function (
    table,
    td,
    cellIndex,
    record,
    tr,
    rowIndex,
    e,
    eOpts
  ) {
  
    console.log(record);
    let me = this;
    let view = me.getView();
    let viewModel = me.getViewModel();
    let refs = me.getReferences();
    viewModel.set("record", record)
  },
  onModelBinding: function (btn, e, eOpts) {
    Ext.create({
      xtype: "modelbindingform",
    });
  },
  onVTypesClicked: function (btn, e, eOpts) {
    Ext.create({
      xtype: "formvtypevalidations",
    });
  },

  onSelectUserPopulateForm: function (btn) {
    var grid = this.getView();
    let lowerPanel = Ext.ComponentQuery.query("userinfopanel")[0];


    if (grid.getHeight() === 900) {
      grid.setHeight(450);
      lowerPanel.setHeight(450);
      btn.setText("Hide Form");
    } else {
      grid.setHeight(900);
      lowerPanel.setHeight(0);
      btn.setText("Show Form");
    }
  },
});
