Ext.define("MsTraining.store.AccountTypes", {
  extend: "Ext.data.Store",
  alias: "store.accounttypes",
  fields: ["name"],
  data: [
    { name: "Asset" },
    { name: "Liability" },
    { name: "Equity" },
    { name: "Expense" },
    { name: "Revenue" },
  ],
});
