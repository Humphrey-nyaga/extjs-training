Ext.define("MsTraining.view.employee.EmployeeGrid", {
  extend: "Ext.grid.Panel",
  
  xtype: 'employeegrid',

  title: "Employees",
  width:700,
  frame:true,
  store: {
    type:'employees',
  },

  columns: [
    { text: "Name", dataIndex: "name", flex: 1 },
    { text: "Seniority", dataIndex: "seniority", flex: 1 },
  ],
  features: [{ ftype: "grouping" }],
});