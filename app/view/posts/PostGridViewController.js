Ext.define("MsTraining.view.post.PostGridViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.postgridviewcontroller",

  onAddPostClicked: function (btn, e, eOpts) {
    console.log(btn.getText() + " was clicked");
    var wd = Ext.create({
      xtype: "postformwindow",
    });
    wd.show();
  },

  onSaveNewPost: function () {
    var form = this.getView().down("form").getForm();
    console.log("Form Values: " + form.getValues());

    if (form.isValid()) {
      form.submit({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "POST",

        success: function (form, action) {
          Ext.Msg.alert("Success", action.result.msg);
          //this.up("form").close();
        },
        failure: function (form, action) {
          Ext.Msg.alert("Failed", action.result.msg);
          console.log("Error:", action.response.responseText);
        },
      });
    }

    //  this.getView().destroy();
  },

  onPostCommentSelected: function (
    table,
    td,
    cellIndex,
    record,
    tr,
    rowIndex,
    e,
    eOpts
  ) {
    var grid = Ext.ComponentQuery.query("commentgrid")[0];
     let commentStore = grid.getStore();
    commentStore.reload({
      params: {
        postId: record.data._id,
      },
    });
    grid.setHidden(false)
  },
});
