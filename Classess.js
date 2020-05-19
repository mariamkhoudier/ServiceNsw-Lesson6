class person {
    constructor(givenName, LastName, age) {
        this.givenName = givenName;
        this.LastName = LastName;
        this.age = age;

    }

    getFullName() {
        return `${this.givenName} ${this.LastName}`
    }

    increaseAge(number) {
        this.age += number;
    }
    getdiscription() {
        return this.getFullName() + "is" + this.age + "years old";
    }
    static createpersonfromobject(obj){
        return obj.first
    }


}

let me = new person("mariam", "khoudier ", 24);
console.log(me);


class
