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
    const albumStore = Ext.ComponentQuery.query("albumgrid")[0].getStore();
    const todoStore = Ext.ComponentQuery.query("todogrid")[0].getStore();

    albumStore.reload({
      params: {
        userId: record.get("_id"),
      },
    });
    todoStore.reload({
      params: {
        userId: record.get("_id"),
      },
    });
  },
});
