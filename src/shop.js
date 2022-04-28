const Inventory = require("./inventory");

class Shop {
  constructor(items = [], inventory = Inventory) {
    this.items = items;
    this.maxQuality = 50;
    this.minQuality = 0;
    this.inventory = new inventory();
  }

  updateQuality() {
    this.items.forEach((item) => {
      let itemType = this.inventory.identify(item.name);
      if (itemType.category != "legendary") item.sellIn--;
      if (itemType.category === "ticket") return this._ticket(item);
      if (item.sellIn < 0 && itemType.aging < 0) itemType.aging *= 2;
      this._amendQuality(item, itemType.aging);
    });
  }

  _amendQuality(item, times) {
    item.quality += times;
    if (item.quality > this.maxQuality) item.quality = this.maxQuality;
    if (item.quality < this.minQuality) item.quality = this.minQuality;
  }

  _ticket(item) {
    item.sellIn === -1
      ? (item.quality = 0)
      : item.sellIn >= 0 && item.sellIn < 5
      ? this._amendQuality(item, 3)
      : item.sellIn >= 5 && item.sellIn < 10
      ? this._amendQuality(item, 2)
      : this._amendQuality(item, 1);
  }
}

module.exports = Shop;
