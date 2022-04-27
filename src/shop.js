class Shop {
  constructor(items = []) {
    this.items = items;
    this.maxQuality = 50;
    this.minQuality = 0;
  }

  updateQuality() {
    this.items.forEach((item) => {
      if (item.name === "Sulfuras, Hand of Ragnaros") return;
      item.sellIn--;

      if (item.name === "Aged Brie") return this._amendQuality(item, 1);
      if (item.name === "Backstage Pass") return this._backstagePass(item);
      if (item.sellIn < 0 && item.name === "Conjured")
        return this._amendQuality(item, -4);
      if (item.sellIn < 0 || item.name === "Conjured")
        return this._amendQuality(item, -2);

      this._amendQuality(item, -1);
    });
  }

  _amendQuality(item, times) {
    item.quality += times;
    if (item.quality > this.maxQuality) item.quality = this.maxQuality;
    if (item.quality < this.minQuality) item.quality = this.minQuality;
  }

  _backstagePass(item) {
    if (item.sellIn >= 10 && item.sellIn < 50) return (item.quality += 1);
    if (item.sellIn >= 5 && item.sellIn < 10) return (item.quality += 2);
    if (item.sellIn >= 0 && item.sellIn < 5) return (item.quality += 3);
    if (item.sellIn === -1) item.quality = 0;
  }
}

module.exports = Shop;
