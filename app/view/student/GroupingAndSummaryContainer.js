Ext.define("MsTraining.view.student.GroupingAndSummaryContainer", {
  extend: "Ext.container.Container",
  xtype:'groupingsummary',

  layout: "hbox",
  items: [
    {
      xtype: "employeegrid",
    },
    {
      xtype: "studentgrid",
    },
  ],
});
