Ext.define("MsTraining.model.TrialBalance", {
  extend: "Ext.data.Model",

  fields: [
    { name: "account", type: "string" },
    { name: "accountType", type: "string" },
    { name: "debit", type: "float" },
    { name: "credit", type: "float" },
  ],
});
