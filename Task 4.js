// Task 7.4

let totalPower = 0;

function Device(name, power, switcher) {
    this.name = name;
    this.power = power;
    this.switcher = switcher;
  }
      
  Device.prototype.switchOnOff = function () {
    if (this.switcher === "on") {
      totalPower += this.power;
      console.log(`The ${this.name} is switched on`);
    } else {
      this.power = 0;
      console.log(`The ${this.name} is switched off`);
    }
  }
  


const tableLamp = new Device ("table lamp", 50, "off");
tableLamp.numberOfLightBulbs = 3;
tableLamp.devisePresentation = function () {
    console.log(`The devise is ${this.name}, its power is ${this.power}, it has ${this.numberOfLightBulbs} light bulbs and it is ${this.switcher}`);
}

tableLamp.devisePresentation();
tableLamp.switchOnOff();

const personalComputer = new Device ("personal computer", 250, "on");
personalComputer.hello = function () {
  console.log(`Hello, I am ${this.name}`);
}
personalComputer.devisePresentation = function () {
    console.log(`The devise is ${this.name}, its power is ${this.power} and it is ${this.switcher}`);
}

personalComputer.devisePresentation();
personalComputer.switchOnOff();
personalComputer.hello();

console.log(`Total power consumption is ${totalPower}`)
