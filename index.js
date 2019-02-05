class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  details() {
    return `Full Name: ${this.firstName} ${this.lastName} \nAge: ${this.age}`;
  }
}

// class sportsman extends person
// inheritance

class Sportsman extends Person {
  constructor(firstName, lastName, age, sport) {
    super(firstName, lastName, age);
    this.sport = sport;
    this.alias = 'El Pulga'; // encapsulation
  }

  // polymophism
  details() {
    return `${this.alias} is an amazing sportsman. \n${super.details()} \nSport: ${this.sport}`;
  }
}

// create footballer class to extend sportsman
// inheritance

class Footballer extends Sportsman {
  constructor(firstName, lastName, age, sport, position, foot) {
    super(firstName, lastName, age, sport);
    this.position = position;
    this.foot = foot;
  }

  setFoot(foot) {
    this.foot = foot;
  }

  printdetails() {
    console.log(`A world class footballer. \n${super.details()} \nPosition: ${this.position} \nFoot: ${this.foot}`);
  }
}

// create a footballer and get the footballer's biography

const messi = new Footballer('Lionel', 'Messi', 32, 'Football', 'Forward', 'Left');
messi.printdetails();

console.log();
console.log('Changed foot');

messi.setFoot('right');
messi.printdetails();
