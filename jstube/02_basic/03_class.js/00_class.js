class Animal {
    constructor(name, legCount) {
        this.name = name
        this.legCount = legCount

    }
    describe() {
        return ` this ${this.name} has ${this.legCount} legs`
    }

}

// Creating an instance of the Animal class
const obj = new Animal('dog', 4);

// You can now use the obj variable to access the properties and methods of the Animal class
console.log(obj.describe());