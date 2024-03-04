Ext.define("MsTraining.posts.PostFormController", {
  extend: "Ext.app.ViewController",
  alias: "controller.postformcontroller",
  init: function () {},

  onSaveClick: function (btn, e, eOpts) {
    let window = this.getView();

    let references = window.getReferences();
    console.log(references);

    let form = references["postform"].getForm();
    console.log(form);

    if (form.isValid()) {
      // make ajax request
      form.submit({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "POST",

        success: function (form, action) {
          Ext.Msg.alert("Success", action.result.msg);
        },

        failure: function (form, action) {
          Ext.Msg.alert("Failed", action.result.msg);
        },
      });
    } else {
      Ext, Msg.alert("Invalid Form Data. Please Correct!!");
    }
  },
  onResetClick: function (btn, e, eOpts) {},
  
});
