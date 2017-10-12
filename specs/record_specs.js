var assert = require("assert");
var Record = require("../record.js");

beforeEach(function () {
  record1 = new Record("The National", "High Violet", "Indie Rock", 10.00);
});

describe("Record", function() {
  it("should have a title", function() {
    assert.strictEqual(record1.title, "High Violet");
  });
  it("should be able to print properties", function(){
    assert.strictEqual(record1.logInfo() , "Artist: The National, Title: High Violet, Genre: Indie Rock, Price: 10")
  });
  
});
