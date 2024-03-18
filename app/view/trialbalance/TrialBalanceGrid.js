Ext.define("MsTraining.view.trialbalance.TrialBalanceGrid", {
  extend: "Ext.grid.Panel",
  xtype: "trialbalancegrid",

  height: 600,
  width: 800,

  style: {
    border: "2px solid black",
    margin: "2rem",

  },

  store: {
    type: "trialbalances",
  },
  layout: "fit",

  /*    { name: "account", type: "string" },
    { name: "accountType", reference: "AccountTypes", type: "string" },
    { name: "debit", type: "float" },
    { name: "credit", type: "float" }, */

  columns: [
    { xtype: "rownumberer" },
    { dataIndex: "account", text: "Account", flex: 1 },
    {
      dataIndex: "debit",
      text: "Debit",
      summaryType: "sum",
      summaryRenderer: function (value, summaryData, dataIndex) {
        return (
          '<div class="total-line">' +
          MsTraining.util.Util.formatNumber(value) +
          "</div>"
        );
      },
      flex: 1,
    },
    {
      dataIndex: "credit",
      text: "Credit",
      summaryType: "sum",
      summaryRenderer: function (value, summaryData, dataIndex) {
        return (
          '<div class="total-line"><b>' +
          MsTraining.util.Util.formatNumber(value) +
          "</div>"
        );
      },
      flex: 1,
    },
  ],
  scrollable:true,
  features: [
    {
      ftype: "summary",
    },
  ],
  listeners: {
    afterrender: function () {
      Ext.util.CSS.createStyleSheet(
        ".total-line { text-decoration-line: underline; text-decoration-style: double; }"
      );
    },
  },
});
