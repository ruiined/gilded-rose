# Gilded Rose

[![tests](https://github.com/ruiined/bank-tech-test/actions/workflows/main.yml/badge.svg)](https://github.com/ruiined/gilded-rose/actions/workflows/main.yml)
[![codecov](https://codecov.io/gh/ruiined/gilded-rose/branch/main/graph/badge.svg?token=aIfxAcpoTI)](https://codecov.io/gh/ruiined/gilded-rose)

![nodejs](https://img.shields.io/badge/npm-8.7.0-blue?logo=npm)
![jest](https://img.shields.io/badge/jest-28.0.0-blue?logo=jest)
![eslint](https://img.shields.io/badge/eslint-8.14.0-blue?logo=eslint)

## Overview

This is the [Gilded Rose](http://iamnotmyself.com/2011/02/14/refactor-this-the-gilded-rose-kata/) exercise in JavaScript with Jest. The source code came from [this](https://github.com/emilybache/GildedRose-Refactoring-Kata) repository.

## Instructions

#### How to Install

- Clone this repository & `cd` into it
- `npm install`

#### How to Test

- `npm test` - unit tests, coverage and linter

#### How to Run
- `cd src`
- `node` to run REPL
- `.load ./shop.js` to load the shop
- `'const Item = require(./item)` to load an item class
- Create the shop and item objects:
  ```
  const items = [
  new Item("+5 Dexterity Vest", 10, 20),
  new Item("Aged Brie", 2, 0),
  new Item("Elixir of the Mongoose", 5, 7),
  new Item("Sulfuras, Hand of Ragnaros", 0, 80),
  new Item("Sulfuras, Hand of Ragnaros", -1, 80),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
  new Item("Conjured Mana Cake", 3, 6),
  ];

  const shop = new Shop(items);
  ```
- `shop.updateQuality()` to have a daily update
- `shop` to review the shop items

## Features

- All items have a SellIn value which denotes the number of days we have to sell the item
- All items have a Quality value which denotes how valuable the item is
- At the end of each day our system lowers both values for every item
- Once the sell by date has passed, Quality degrades twice as fast
- The Quality of an item is never negative
- “Aged Brie” actually increases in Quality the older it gets
- The Quality of an item is never more than 50
- “Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
- “Conjured” items degrade in Quality twice as fast as normal items
- “Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert

## My Approach

I've started the process by writing out all the tests, until I got all the components of the shop covered. Once I passed the tests, it was time to refactor the Shop class. I found it tough to simply "refactor" as the code was impossible for me to work with. I had to delete the whole if block (as it was the only manpower for the class) and start over.

Item class, of course, was moved to a separate file and, aside from writing the tests, had no changes made to it.

Shop class had me create 2 additional methods:
  1. `_amendQuality` to increase/decrease quality and monitor that it doesn't go outside the limits (min & max).
  2. `_ticket` for the backstage ticket logic as it had a handful.

The `updateQuality` method was still quite lengthy and, to tackle that, I've created an `Inventory` class. It stores the categories' information and finds the required data with an `identify` method that takes an item name as an argument. That helped me to refactor the shop even further to the point it looked satisfactory.

I'm not 100% happy with my result. However, I felt like I had spent enought time on it. One of the parts that could be improved would be reducing Shop methods' length, as well as adding more functionality to the Inventory class. The backstage pass logic perhaps needs some improvement too.

## Diagram

Diagramming was a great help in visualising the structure of Gilded Rose.
![Gilded Rose Diagram](/images/gilded-rose-diagram.jpg)
