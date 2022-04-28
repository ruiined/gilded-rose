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
        items: ["Backstage Pass"],
        aging: 1,
      },
      {
        category: "regular",
        items: ["Candy", "Chocolate"],
        aging: -1,
      },
      {
        category: "conjured",
        items: ["Conjured"],
        aging: -2,
      },
    ];
  }

  identify(item) {
    return this.inventory.find((element) => element.items.includes(item));
  }
}

module.exports = Inventory;
