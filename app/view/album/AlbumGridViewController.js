Ext.define("MsTraining.view.album.AlbumGridViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.albumgridviewcontroller",

  onAddAlbumClicked: function (btn, e, eOpts) {
    console.log(btn.getText() + " was clicked");
    var wd = Ext.create({
      xtype: "albumform",
    });
    wd.show();
  },

  onSaveNewAlbum: function () {
   
  },
});
