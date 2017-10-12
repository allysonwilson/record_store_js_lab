var RecordStore = function (name, city) {
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
}


RecordStore.prototype.addRecord = function (record) {
    this.inventory.push(record);
};

RecordStore.prototype.listInventory = function () {
  var inventoryList = this.inventory.map(function(item) {
    return item.title;
  })
  return inventoryList;
};

RecordStore.prototype.sellRecord = function (record) {
  this.balance += record.price;
  var index = this.inventory.indexOf(record);
  this.inventory.splice(index, 1);
};

// RecordStore.prototype.reportFinances = function (options) {
//   if (options === "balance") {
//     return this.balance;
//   }
//   if (options === "inventory") {
//     var total = 0;
//     this.inventory.forEach(function (element){
//       total += element.price;
//     })
//   };
// };

RecordStore.prototype.reportFinances = function () {
  var total = 0;
  this.inventory.forEach(function(element){
    total += element.price;
  });
  return ("Balance: £" + this.balance + ", Inventory Value: £" + total);
};


module.exports = RecordStore;
