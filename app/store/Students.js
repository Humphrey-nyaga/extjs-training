Ext.define("MsTraining.store.Students", {
  extend: "Ext.data.Store",
  alias: "store.students",
  model: "MsTraining.model.Student",

  data: [
    {
      student: "Student 1",
      mark: 84,
    },
    {
      student: "Student 2",
      mark: 72,
    },
    {
      student: "Student 3",
      mark: 96,
    },
    {
      student: "Student 4",
      mark: 68,
    },
  ],
});