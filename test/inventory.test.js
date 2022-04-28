const Inventory = require("../src/inventory");

describe("Inventory", () => {
  const inventory = new Inventory();

  it("stores an inventory of 5 types of items", () => {
    expect(inventory.inventory.length).toBe(5);
  });

  it("stores information of every type", () => {
    expect(inventory.inventory[0]).toHaveProperty("category");
    expect(inventory.inventory[0]).toHaveProperty("items");
    expect(inventory.inventory[0]).toHaveProperty("aging");
  });

  it("identifies an iteam successfully", () => {
    const itemName = "Sulfuras, Hand of Ragnaros";
    const itemType = inventory.identify(itemName);
    expect(typeof itemType).toBe("object");
    expect(itemType.category).toBe("legendary");
    expect(itemType.items).toContain(itemName);
    expect(itemType.aging).toBe(0);
  });
});
