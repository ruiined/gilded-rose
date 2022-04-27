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

      item.name === "Aged Brie"
        ? this._amendQuality(item, 1)
        : item.name === "Backstage Pass"
        ? this._backstagePass(item)
        : item.sellIn < 0 && item.name === "Conjured"
        ? this._amendQuality(item, -4)
        : item.sellIn < 0 || item.name === "Conjured"
        ? this._amendQuality(item, -2)
        : this._amendQuality(item, -1);
    });
  }

  _amendQuality(item, times) {
    item.quality += times;
    if (item.quality > this.maxQuality) item.quality = this.maxQuality;
    if (item.quality < this.minQuality) item.quality = this.minQuality;
  }

  _backstagePass(item) {
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
