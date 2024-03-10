Ext.define("MsTraining.view.student.StudentGrid", {
  extend: "Ext.grid.Panel",
  xtype:'studentgrid',

  width: 700,
  height: 600,
  title: "Summary Test",
  style: "padding: 20px",
  features: [
    {
      ftype: "summary",
    },
  ],
  store: {
    type: "students",
  },
  columns: [
    {
      dataIndex: "student",
      text: "Name",
      summaryType: "count",
      summaryRenderer: function (value, summaryData, dataIndex) {
        return Ext.String.format(
          "{0} student{1}",
          value,
          value !== 1 ? "s" : ""
        );
      },
    },
    {
      dataIndex: "mark",
      text: "Mark",
      summaryType: "average",
    },
  ],
});
