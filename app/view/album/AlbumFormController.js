Ext.define("MsTraining.view.album.AlbumFormController", {
  extend: "Ext.app.ViewController",
  alias: "controller.albumformcontroller",

  onSaveClick: function (btn, e, eOpts) {
     let window = this.getView();
     let form = window.getReferences()["albumform"].getForm();

     let albumId = window.getReferences()["albumIdField"].getValue();


     let url = "http://localhost:3000/album";
     if (form.isValid()) {
       //send ajax request to submit
       form.submit({
         method: albumId === "" ? "POST" : "PUT",
         url: albumId === "" ? url : `http://localhost:3000/albums/${albumId}`,
         submitEmptyText: false,
         success: function (form, action) {
           Ext.Msg.alert("Success", action.result.msg);
           // add the record to the post store -> post grid
           window.close();
         },
         failure: function (form, action) {
           // handle failures
           Ext.Msg.alert("Failed", action.result.msg);
         },
       });
     } else {
       Ext.Msg.alert("Invalid Data", "Please correct form errors.");
     }
  },
  onResetClick: function (btn, e, eOpts) {},
});
