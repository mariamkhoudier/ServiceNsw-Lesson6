// // 1- Create a class called Pet
// class Pet {

// }


// //2- Give the class 3 properties called givenName, age and ownerId
//  class Person {
//      givenName;
//      age;
//      ownerId;
//}
//consonle.log(newPet());


// 3- Create a constructor that assigns the 3 properties above
// class Pet{
//     constructor(givenName, age, ownerId) {
//         this.givenName = givenName;
//         this.age = age;
//         this.ownerId = ownerId;
//     }
// }
// let me = new Pet("lolly", 30, 5467);
// console.log(me);

// //4- Create a class called Owner with 3 properties: givenName, familyName and id
// class Owner {
//     givenName;
//    familyName;
//     id;
// }
// console.log(new Owner());

// 5- Create a constructor for the Owner class that assigns the values above.

// class Owner {
//     constructor(givenName, familName, id) {
//         this.givenName = givenName;
//         this.familyName = givenName;
//         this.id = id;
//       
//     }
// }
// console.log(newOwner("Mariam", "Kh", 20));


//6- Create a method in the class Owner called getFullName that takes no arguments and returns the full name of the owner
// class Owner {
//     constructor(givenName, familyName, id) {
//         this.givenName = givenName;
//         this.familyName = familyName;
//         this.id = id;
//     }
//     getFullName() {
//         return `${this.givenName} ${this.familyName}`
//     }
// }
// let person = new Ownerw("Mariam", "Mo", 15);
// console.log(person.getFullName());

// 7- Create a static method in the class Pet called getOwnerById that takes 2 arguments, the first should be a pet object and the second should be an array of owners. The function should return the full name of the owner with an id matching the ownerId of the pet or else return an error message.
class Pet {
    constructor(givenName, age, ownerId) {
        this.givenName = givenName;
        this.age = age;
        this.ownerId = ownerId;
    }
    static getOwnerById(pet, owners) {

        let foundOwner;
        for (let i = 0; i < owners.length; i++) {
            const owner = owners[i];
            if (owners.id === pet.ownerId) {
                foundOwner = owner;
                break;
            }
        }

        if (!foundOwner) {
            return "Error: Owner not found ";
        }
        return foundOwner.getFullName();
    }
}
let owners = [
    new Owner("Mariam", "Nagi", 13),
    new Owner("Maria", "John", 24),
    new Owner("Caitlin", "Mo", 30)

];
let myPet = new Pet("Cat", 5, 15);
console.log(Pet.getOwnerById(myPet, owners));

// 8- Create a class called Square with a single property, sideLength and create a constructor that assigns that value   
class Square {
    constructor(sidelenght) {
        this.sidelenght = sidelenght
    }
}
console.log(new Square())





