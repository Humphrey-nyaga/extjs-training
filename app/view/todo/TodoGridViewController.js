Ext.define("MsTraining.view.todo.TodoGridViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.todogridviewcontroller",
  mixins: ["MsTraining.mixin.GridMixin"],

  onAddTodo: function (btn, e, eOpts) {
    Ext.create({
      xtype: "todoform",
      viewModel: {
        data: {
          newTitle: "Add New Todo",
        },
      },
    });
  },
  onViewTodo: function (btn, e, eOpts) {
    let grid = this.getView();
    let record = this.getSelectedRecordByXType("todogrid");
    Ext.create({
      xtype: "todoform",
      viewModel: {
        data: {
          newTitle: "Update Todo",
          record: record,
        },
      },
    });
  },

  onDeleteTodo: function (btn, e, eOpts) {
    let me = this;
    let grid = me.getView();
    let record = this.getSelectedRecordByXType("todogrid");

    if (record) {
      let recordId = record.get("_id");
      Ext.Msg.confirm(
        "Delete Todo",
        `Are you sure you want to delete the todo with id ${recordId}`,
        function (btn, text) {
          if (btn == "yes") {
            Ext.Ajax.request({
              url: `http://localhost:3000/todos/${recordId}`,
              method: "DELETE",
              success: function (response, opts) {
                var obj = Ext.decode(response.responseText);
                me.showToast("Operation successful");
                grid.getStore().reload();
              },

              failure: function (response, opts) {
                console.log(
                  "server-side failure with status code " + response.status
                );
              },
            });
          } else {
            Ext.Msg.alert("Deletion Cancelled", "Deletion Aborted");
          }
        }
      );
    }
  },
  onClickCellActivateButtons: function (
    grid,
    td,
    cellIndex,
    record,
    tr,
    rowIndex,
    e,
    eOpts
  ) {
    let component = Ext.getCmp("deleteTodo");
    console.log(component);
    Ext.getCmp("delete").enable();
  },
});
