# Gilded Rose

[![tests](https://github.com/ruiined/bank-tech-test/actions/workflows/main.yml/badge.svg)](https://github.com/ruiined/gilded-rose/actions/workflows/main.yml)
[![codecov](https://codecov.io/gh/ruiined/gilded-rose/branch/main/graph/badge.svg?token=M8FARJY8DO)](https://codecov.io/gh/ruiined/gilded-rose)

![nodejs](https://img.shields.io/badge/npm-8.7.0-blue?logo=npm)
![jest](https://img.shields.io/badge/jest-28.0.0-blue?logo=jest)
![eslint](https://img.shields.io/badge/eslint-8.14.0-blue?logo=eslint)

## Overview

This is the Gilded Rose kata in JavaScript with Jest.

## Instructions

#### How to Install

- Clone this repository & `cd` into it
- `npm install`

#### How to Test

- `npm test` - unit tests, coverage and linter

#### How to Run

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

## Diagram
Diagramming was a great help in visualising the structure of Gilded Rose.
![Gilded Rose Diagram](/images/gilded-rose-diagram.jpeg)