const Shop = require("../src/shop");

describe("Shop", () => {
  const regular = { name: "Regular", sellIn: 2, quality: 5 };
  const conjured = { name: "Conjured", sellIn: 2, quality: 10 };
  const brie = { name: "Aged Brie", sellIn: 2, quality: 5 };
  const sulf = { name: "Sulfuras, Hand of Ragnaros", sellIn: 2, quality: 5 };
  const vip = { name: "Backstage Pass", sellIn: 13, quality: 2 };
  const items = [regular, conjured, brie, sulf, vip];
  let shop = new Shop(items);

  it("stores the items in the shop", () => {
    expect(shop.items.length).toBe(5);
  });

  it("reduces the sellIn and the quality of a regular item", () => {
    shop.updateQuality();
    expect(shop.items[0].sellIn).toBe(1);
    expect(shop.items[0].quality).toBe(4);
  });

  it("reduces double the quality of a conjured item", () => {
    expect(shop.items[1].sellIn).toBe(1);
    expect(shop.items[1].quality).toBe(8);
  });

  it("increases the quality of 'Aged Brie'", () => {
    expect(shop.items[2].sellIn).toBe(1);
    expect(shop.items[2].quality).toBe(6);
  });

  it("reduces twice the quality of an expired regular item", () => {
    for (let n = 0; n < 2; n++) shop.updateQuality();
    expect(shop.items[0].sellIn).toBe(-1);
    expect(shop.items[0].quality).toBe(1);
  });

  it("reduces twice the quality of an expired conjured item", () => {
    expect(shop.items[1].sellIn).toBe(-1);
    expect(shop.items[1].quality).toBe(1);
  });

  it("does not update 'Sulfuras'", () => {
    expect(shop.items[3].sellIn).toBe(2);
    expect(shop.items[3].quality).toBe(5);
  });

  // it("increases the quality of the backstage passes appropriately", () => {
  //   expect(shop.items[4].sellIn).toBe(10);
  //   expect(shop.items[4].quality).toBe(5);
  //   for (let n = 0; n < 4; n++) shop.updateQuality();
  //   expect(shop.items[4].sellIn).toBe(6);
  //   expect(shop.items[4].quality).toBe(13);
  //   for (let n = 0; n < 6; n++) shop.updateQuality();
  //   expect(shop.items[4].sellIn).toBe(0);
  //   expect(shop.items[4].quality).toBe(30);
  //   shop.updateQuality();
  //   expect(shop.items[4].sellIn).toBe(-1);
  //   expect(shop.items[4].quality).toBe(0);
  // });

  it("doesn't lower the quality below 0", () => {
    for (let n = 0; n < 66; n++) shop.updateQuality();
    // expect(shop.items[0].sellIn).toBe(-78);
    expect(shop.items[0].quality).toBe(0);
  });

  it("doesn't increase the quality above 50", () => {
    // expect(shop.items[2].sellIn).toBe(-78);
    expect(shop.items[2].quality).toBe(50);
  });
});
