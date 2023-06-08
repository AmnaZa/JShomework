class Hamster {
    constructor (name) {
        this.owner = "";
        this.name = name;
        this.price = 15;
    }

    wheelRun () {
        console.log("squeak squeak");
    }
    eatFood () {
        console.log("nibble nibble");
    }
    getPrice () {
        return this.price
    }
}
class Person {
    constructor(name){
      this.name = name
      this.age = 0
      this.height = 0
      this.weight = 0
      this.mood = 0
      this.hamsters = []
      this.bankAccount = 0
    }
    getName(){
      return this.name
    }
    getAge(){
      return this.age
    }
    getWeight(){
      return this.weight
    }
    greet(){
      console.log(`I am ${this.name} hello`)
    }
    eat(){
      this.weight++
      this.mood++
    }
    exercise(){
      this.weight--
    }
    ageUp(){
      this.age++
      this.height++
      this.weight++
      this.mood--
      this.bankAccount+=10
    }
    buyHamster(hamster){
      this.hamsters.push(hamster)
      this.mood+=10
      this.bankAccount-=hamster.getPrice()
    }
  }

const timmy = new Person('Timmy')
for(let i =0; i < 5; i++){
  timmy.ageUp()
}
for(let i =0; i < 5; i++){
  timmy.eat()
}
for(let i =0; i < 5; i++){
  timmy.exercise()
}
for(let i =0; i < 9; i++){
  timmy.ageUp()
}
const gus = new Hamster('Gus')
gus.owner = 'Timmy'
timmy.buyHamster(gus)

for(let i =0; i < 15; i++){
  timmy.ageUp()
}
timmy.eat()
timmy.eat()
timmy.exercise()
timmy.exercise()

console.log(`Timmy's age: ${timmy.age}`);
console.log(`Timmy's weight: ${timmy.weight}`);
console.log(`Timmy's mood: ${timmy.mood}`);

console.log(`Gus's owner: ${gus.owner}`);

class Dinner {
    constructor(appetizer, entree, dessert) {
      this.appetizer = appetizer;
      this.entree = entree;
      this.dessert = dessert;
    }
  }
  
  class Chef {
    constructor() {
      this.dinners = [];
    }
  
    makeDinner(appetizer, entree, dessert) {
      const dinner = new Dinner(appetizer, entree, dessert);
      this.dinners.push(dinner);
    }
  }
  
  // Example usage:
  let chef = new Chef();
  chef.makeDinner("Salad", "Chicken", "Cake");
  chef.makeDinner("Soup", "Steak", "Ice Cream");
  chef.makeDinner("Nachos", "Tacos", "Churros");
  
  console.log(chef.dinners);
  