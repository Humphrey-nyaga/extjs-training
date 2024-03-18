Ext.define("MsTraining.store.TrialBalance", {
  extend: "Ext.data.Store",
  alias: "store.trialbalances",

  model: "MsTraining.model.TrialBalance",
  requires: ["MsTraining.model.TrialBalance"],

  data: [
    { account: "Cash", accountType: "Asset", debit: 223000 },
    { account: "Capital", accountType: "Equity", credit: 200000 },
    {
      account: "Accounts Receivable",
      accountType: "Asset",
      debit: 8000,
    },
    {
      account: "Accounts Payable",
      accountType: "Liability",
      credit: 40000,
    },
    { account: "Wages", accountType: "Expense", debit: 12000 },
    {
      account: "Sales & Revenue",
      accountType: "Revenue",
      credit: 133000,
    },
    {
      account: "Furnitures & Fixtures",
      accountType: "Asset",
      debit: 60000,
    },
    { account: "Supplies", accountType: "Asset", debit: 10000 },
    {
      account: "Electricity Expense",
      accountType: "Expense",
      debit: 1500,
    },
    {
      account: "Supplies Expense",
      accountType: "Expense",
      debit: 20000,
    },
    { account: "Rent Expense", accountType: "Expense", debit: 10000 },
    { account: "Rent Deposit", accountType: "Asset", debit: 10000 },
    {
      account: "Accrued Electricity Expense",
      accountType: "Expense",
      credit: 1500,
    },
    { account: "Drawings", accountType: "Equity", debit: 20000 },
  ],

  validators: {
    debitOrCredit: function (value, record) {
      if (
        (record.get("debit") && record.get("credit")) ||
        (!record.get("debit") && !record.get("credit"))
      ) {
        return "Either a debit or credit value must be provided, not both.";
      }
      return true;
    },
  },
});
