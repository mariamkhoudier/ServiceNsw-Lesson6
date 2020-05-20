//1- Create a class called Pet
// class pet {

// }

//2- Give the class 3 properties called givenName, age and ownerId
// class pet {

//     gienName;
//     age;
//     ownerId;

// }

//3- Create a constructor that assigns the 3 properties above

// class Pet {
//     constractor(givenName, age, ownerId) {
//         this.givenName = givenName;
//         this.age = age;
//         this.ownerId = ownerId
//     }
// }

//4- Create a class called Owner with 3 properties: givenName, familyName and id

// class Owner {
//     givenName;
//     familyName;
//     id;
// }

//5-Create a constructor for the Owner class that assigns the values above.

// class Owner {
//     constructor (givenName, familyName, id) {
//         this.givenName = givenName;
//         this.familyName = familyName;
//         this.id = id
//     }
// }

//6- Create a method in the class Owner called getFullName that takes no arguments and returns the full name of the owner
class Owner {
    givenName;
    constructor(givenName, familyName, id) {
        this.givenName = givenName;
        this.familyName = familyName;
        this.id = id
    }

    getFullName() {
        return `${this.givenName} ${this.familyName}`;
    }
}
//7-Create a static method in the class Pet called getOwnerById that takes 2 arguments, 
//the first should be a pet object and the second should be an array of owners. 
//The function should return the full name of the owner with an id matching the ownerId of the pet or else return an error message.

class Pet {
    constructor(givenName, age, ownerId) {
        this.givenName = givenName;
        this.age = age;
        this.ownerId = ownerId
    }

    static getOwnerById(pet, owners) {
        let owner = owners.find((owner) => {
            return owner.id == pet.ownerId;
        });
        if (owner == undefined) {
            return "Sorry cann't find your owner ";
        }
        else {
            return owner.getFullName();

        }

    }


}


let pet = new Pet("Rex", 6, 2323);
let pet2 = new Pet("Rexi", 6, 2431);
let pet3 = new Pet("Rexy", 6, 5555);

let owner = new Owner("Wael", "Emara", 2323);
let owner2 = new Owner("Mariam", "Kh", 2431);
let owner3 = new Owner("Maria", "Co", 1234);

console.log(Pet.getOwnerById(pet, [owner, owner2, owner3]));
console.log(Pet.getOwnerById(pet3, [owner, owner2, owner3]));

//8- Create a class called Square with a single property, sideLength and create a constructor that assigns that value
//9-Create a getter that returns the area of the Square (hint, the area is sideLength * sideLength)
//10- Create a setter for area that sets the sideLength for the given area (hint, use the Math.sqrt function to retrieve the square
// root of the area and assign it as the sideLength)

class Square {
    constructor(sidelenght) {
        this.sidelenght = sidelenght;
    }

    get area() {
        return this.sidelenght * this.sidelenght
    }

    set area(v) {
        this.sidelenght = Math.sqrt(v);
    }

    setArea(value) {
        this.sidelenght = Math.sqrt(v);
    }

}

let square = new Square(20);

console.log(square.area);
square.area = 64;
square.setArea(64);

console.log(square);



