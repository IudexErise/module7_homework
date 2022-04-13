// Task 7.5

let totalPower = 0;

class Device {
  constructor (name, power, switcher) {
    this.name = name;
    this.power = power;
    this.switcher = switcher;
  }
      
  switchOnOff = function () {
    if (this.switcher === "on") {
      totalPower += this.power;
      console.log(`The ${this.name} is switched on`);
    } else {
      this.power = 0;
      console.log(`The ${this.name} is switched off`);
    }
  }
}

class LightDevice extends Device {
  constructor (numberOfLightBulbs, name, power, switcher) {
    super(name, power, switcher);
    this.numberOfLightBulbs = numberOfLightBulbs;
  }
  
  devicePresentation = function () {
    console.log(`The device is a ${this.name}, its power is ${this.power}, it has ${this.numberOfLightBulbs} light bulbs and it is ${this.switcher}`);
  }
}
  
class ComputerDevice extends Device {
  constructor (name, power, switcher) {
    super(name, power, switcher);
  }

  devicePresentation = function () {
    console.log(`The device is a ${this.name}, its power is ${this.power} and it is ${this.switcher}`);
  }

  deviceHello = function () {
    console.log(`Hello, I am ${this.name}`);
  }
}
  
const tableLamp = new LightDevice (3, "table lamp", 50, "off");
tableLamp.devicePresentation();
tableLamp.switchOnOff();

const personalComputer = new ComputerDevice ("personal computer", 250, "on");
personalComputer.devicePresentation();
personalComputer.switchOnOff();
personalComputer.deviceHello();

console.log(`Total power consumption is ${totalPower}`)
