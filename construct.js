//Learning Construction function


function BellBoy (name,age,workPermit,language) {
    this.name = name;
    this.age = age;
    this.workPermit = workPermit;
    this.language = language;
}

var oneService = new BellBoy ("Tim",21,true,"English");



function HouseHelp (name,age,specialty,language){
    this.name = name;
    this.age = age;
    this.specialty = specialty;
    this.language =language;
}

var oneHelp = new HouseHelp("Kelly",23,["chef","cleaner"],"French");

console.log(oneHelp.specialty);
console.log(oneHelp.age);