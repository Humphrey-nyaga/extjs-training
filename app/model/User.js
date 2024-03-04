Ext.define("MsTraining.model.User", {
  extend: "Ext.data.Model",
  idProperty: "_id",
  fields: [
    "_id",
    "name",
    "username",
    "email",
    "phone",
    "website",
    { name: "street", type: "string" },
    { name: "suite", type: "string" },
    { name: "city", type: "string" },
    { name: "zipcode", type: "string" },
    { name: "lat", type: "string" },
    { name: "lng", type: "string" },
    { name: "companyName", type: "string" },
    { name: "companyCatchPhrase", type: "string" },
    { name: "companyBs", type: "string" },
  ],

  
});
