const Item = require("../src/item");

describe("Item", () => {
  const item = new Item("Candy", 3, 5);

  it("has a name", () => {
    expect(item.name).toBe("Candy");
  });

  it("has a sell in value", () => {
    expect(item.sellIn).toBe(3);
  });

  it("has a quality value", () => {
    expect(item.quality).toBe(5);
  });
});
