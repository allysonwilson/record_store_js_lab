var assert = require("assert");
var RecordStore = require("../record_store.js");
var Record = require("../record.js");

beforeEach(function () {
  recordstore = new RecordStore("Ping Pong Records", "Edinburgh");
  record1 = new Record("The National", "High Violet", "Indie Rock", 10.00);
  record2 = new Record("Neck Deep", "The Peace and the Panic", "Pop Punk", 10.00);
});

describe("Record Store", function() {
  it("should have a name", function() {
    assert.strictEqual(recordstore.name, "Ping Pong Records");
  });
  it("should be able add record to inventory", function(){
    recordstore.addRecord(record1);
    assert.strictEqual(recordstore.inventory.length, 1)
  });
  it("should list the inventory", function() {
    recordstore.addRecord(record1);
    recordstore.addRecord(record2);
    assert.strictEqual(recordstore.listInventory().length, 2)
  });
  it("should be able to sell a Record and increase store balance", function(){
    recordstore.addRecord(record1);
    recordstore.addRecord(record2);
    recordstore.sellRecord(record2);
    assert.strictEqual(recordstore.balance, 10)
  });
  it("should report financial situation", function(){
    recordstore.addRecord(record1);
    recordstore.addRecord(record2);
    recordstore.sellRecord(record2);
    assert.strictEqual(recordstore.reportFinances(), 'Balance: £10, Inventory Value: £10');
  })
});
