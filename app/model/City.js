Ext.define(
  "MsTraining.model.City", // classname=> <AppName>.<foldername>.<ClassAndFileName>
  {
    extend: "Ext.data.Model",
    fields: ["id",
     "name", 
     { name: "phone", type: "string" },
     { name: "age", type: "int" },
    ],
  }, //configuration/ properties
  function () {
    let city = Ext.create("MsTraining.model.City");

    console.log(city);
    console.log("On city model");
  }
);
