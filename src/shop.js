class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      if (item.name === "Sulfuras, Hand of Ragnaros") return;
      item.sellIn -= 1;
      if (item.quality <= 0 || item.quality >= 50) return;
      if (item.name === "Aged Brie") return (item.quality += 1);
      if (item.name === "Backstage Pass") return this._backstagePass(item);
      if (item.name === "Conjured") item.quality -= 1;
      if (item.sellIn < 0) item.quality -= 1;
      if (item.quality <= 0) return;
      if (item.sellIn < 0 && item.name === "Conjured" && item.quality >= 2)
        item.quality -= 2;
      item.quality -= 1;
    });
  }

  _backstagePass(item) {
    if (item.sellIn > 10) return (item.quality += 1);
    if (item.sellIn > 5) return (item.quality += 3);
    if (item.sellIn > 0) return (item.quality += 4);
    if (item.sellIn === 0) return (item.quality = 0);
  }
}

module.exports = Shop;
