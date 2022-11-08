export class Animal {
    name: string;
    type: string;
    preferedFoods: Array<string>;
    constructor(name:string, type: string, preferedFoods: Array<string>) {
        this.name = name;
        this.type = type;
        this.preferedFoods = preferedFoods
    }
feed(food: string) {
    if (this.preferedFoods.includes(food))
        return `${this.name} the ${this.type} likes ${food}!`;
    else return `${this.name} the ${this.type} does not like ${food}!`;
    }
}

import { Animal } from "./animal";
import { getAnimal } from "./zoo";

const alex: Animal = getAnimal("Alex");
const marty: Animal = getAnimal("Marty");
const melman: Animal = getAnimal("Melman");
const gloria: Animal = getAnimal("Gloria");

const lionFood = ["meat"];
const zebraFood = ["grass", "leaves", "shrubs", "bark"];
const giraffeFood = ["Leaves", "hay", "carrots"]; 
const hippoFood = ["grass", "reeds", "shoots"];

const badFood = ["Shrimp", "potatoes", "icecream", "pizza"]; 

describe("feeding animlas" , () => {
    test("Alex likes the food we expect", (lionFood) => {
        lionFood.forEach((lionFood).toBe(`Alex the lion likes ${lionFood}!`)
    })
  });
  badFood.forEach((food) => {
    expect(alex.feed(badFood)).toBe(`Alex the lion does not like ${badFood}!`)

  })
  test("Marty likes the food we expect", (zebraFood) => {
    zebraFood.forEach((zebraFood) => {
      expect(marty.feed(zebraFood)).toBe(`Marty the Zebra likes ${zebraFood}!`)
    })
  });
  badFood.forEach((food) => {
    expect(marty.feed(badFood)).toBe(`Marty the Zebra does not like ${badFood}!`)
  })
  test ("Melman likes the food we expect",(giraffeFood)=> {
    giraffeFood.forEach((giraffeFood) => {
        expect(melman.feed(giraffeFood)).toBe(`Melman the giraffe likes ${giraffeFood}!`)
    })
});
badFood.forEach((food) => {
    expect(melman.feed(badFood)).toBe(`Melman the giraffe does not likes ${badFood}!`)
    })
    test("Gloria likes the food we expect", (hippoFood) => {
        hippoFood.forEach((hippoFood) => {
          expect(gloria.feed(hippoFood)).toBe(`Gloria the Hippo likes ${hippoFood}!`)
        })
      });
      badFood.forEach((food) => {
        expect(gloria.feed(badFood)).toBe(`Gloria the Hippo does not like ${badFood}!`)
      })
    });
    


