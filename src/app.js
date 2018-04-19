class Vehicle {
  start() {
    console.log('starting Vehicle')
  }
  static getCompanyName () {
    console.log('My getCompanyName')
  }
}

class Car extends Vehicle {
  start() {
    super.start()
    console.log('starting car')
  }
  static getCompanyName () {
    super.getCompanyName()
    console.log('My other one')
  }
}

let c = new Car()
c.start()

Car.getCompanyName()



