class Inventory {
  constructor() {
    this.inventory = [
      {
        category: "legendary",
        items: ["Sulfuras, Hand of Ragnaros"],
        aging: 0,
      },
      {
        category: "aged",
        items: ["Aged Brie"],
        aging: 1,
      },
      {
        category: "ticket",
        items: ["Backstage Pass", "Backstage passes to a TAFKAL80ETC concert"],
        aging: 1,
      },
      {
        category: "regular",
        items: ["Candy", "Chocolate", "+5 Dexterity Vest"],
        aging: -1,
      },
      {
        category: "conjured",
        items: ["Conjured", "Conjured Mana Cake"],
        aging: -2,
      },
    ];
  }

  identify(item) {
    return this.inventory.find((element) => element.items.includes(item));
  }
}

module.exports = Inventory;
