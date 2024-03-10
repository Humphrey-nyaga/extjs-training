Ext.define("MsTraining.view.todo.TodoGridViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.todogridviewcontroller",

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
    let grid = this.getView(),
      record = grid.getSelectionModel().getSelection()[0];
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
});