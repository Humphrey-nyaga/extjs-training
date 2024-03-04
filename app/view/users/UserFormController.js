Ext.define("MsTraining.users.UserFormController", {
  extend: "Ext.app.ViewController",
  alias: "controller.userformcontroller",
  init: function () {},

  onSaveClick: function (btn, e, eOpts) {
    let window = this.getView();

    let references = window.getReferences();
    console.log(references);

    let form = references["userform"].getForm();
    console.log(form);

    if (form.isValid()) {
      // make ajax request
      form.submit({
        url: "http://localhost:3000/users/",
        method: "POST",
        jsonSubmit: true, 
        headers: {
          "Content-Type": "application/json",
        },

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
