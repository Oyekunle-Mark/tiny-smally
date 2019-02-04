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

class Sportsman extends Person {
  constructor(firstName, lastName, age, sport) {
    super(firstName, lastName, age);
    this.sport = sport;
  }

  details() {
    return `${super.details()} \nSport: ${this.sport}`;
  }
}

// create footballer class to extend sportsman

class Footballer extends Sportsman {
  constructor(firstName, lastName, age, sport, position, foot) {
    super(firstName, lastName, age, sport);
    this.position = position;
    this.foot = foot;
  }

  bio() {
    console.log(`${super.details()} \nPosition: ${this.position} \nFoot: ${this.foot}`);
  }
}

// create a footballer and get the footballer's biography

const messi = new Footballer('Lionel', 'Messi', 32, 'Football', 'Forward', 'Left');
messi.bio();
