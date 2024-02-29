Ext.Ext.define("MsTraining.store.City", {
  extend: "Ext.data.Store",
  model: "MsTraining.model.City",
  alias: "store.city",
  data: [
    { id: 1, name: "Nairobi", phone: "12121212", age: 100 },
    { id: 2, name: "Kisumu", phone: "5656565656", age: 50 },
    { id: 1, name: "Nakuru", phone: "9898989898", age: 2 },
  ],
});
