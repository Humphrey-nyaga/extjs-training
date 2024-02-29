Ext.define(
  "MsTraining.model.Person",
  {
    uname: "Unknown",
    requires: ["MsTraining.util.Util"],
    init: function() {
    throw new Error("[" + Ext.getDisplayName(arguments.callee) + "] Some message here"
      );
    },

    constructor: function (uname) {
      if (uname) {
        this.uname = uname;
      }
    },

    eat: function (foodType) {
     // alert(`${this.uname} eats ${foodType}`);
      MsTraining.util.Util.logInfo(`${this.uname} eats ${foodType}`);

    },
  // },
  // () => {
  //   var bob = Ext.create("MsTraining.model.Person", "Bob");
  //   bob.eat("Salad");
  //   bob.init(this)
  }
);
