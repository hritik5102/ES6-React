// var -> functional scope
function hello() {
    for (var i = 0; i < 5; i++) {
        console.log(i);

    }

    console.log(i);

}
hello();

//let -> block scope
function let_variable() {
    for (let k = 0; k < 5; k++) {
        console.log(k);

    }
    // console.log(k);

}
let_variable();

// const -> block scope 
// it cannnot re assign 

// object 

// Person is object and mark is method (function inside object)

const Person = {
    name: 'john',
    mark: function() {},
    talk() {}
};

Person.talk();
Person['name'] = 'jam';
Person.name = 'johnson';

// this 

const Dancer = {
    name: 'john',
    style: function() {
        console.log(this);
    },
    talk() {}
};

Dancer.style();

// Arrow function

const square = function(number) {
    return number * number;
}

const square_arrow = number => {
    return number * number;

}
console.log(square(2));
console.log(square_arrow(2));

// filter 
const job = [{
        id: 1,
        isActive: true
    },
    {
        id: 3,
        isActive: false
    },
    {
        id: 5,
        isActive: false
    },
]

const result = job.filter(
    function(job) {
        return job.isActive;
    }
)

const result2 = job.filter(job => !job.isActive)
console.log(result2);

// arrow function and this keyword

// as its display window object bcoz this time it doesn't belongs to any object 
// as this is inside SetTimeout 

const parameter = {
    text() {
        setTimeout(function() {

            console.log("this", this)
        }, 1000);
    }
};

parameter.text();

const parameters = {
    text() {
        const self = this;
        setTimeout(function() {

            console.log("self", self)
        }, 1000);
    }
};

parameters.text();

// array map -> it will map colors with each list item 

const colors = ['red', 'green', 'blue'];

const item = colors.map(function(color) {
    return '<li>' + color + '</li>';
});

console.log(item);

// object destructuring

const address = {
    street: 'london',
    city: '',
    country: ''
}

const {
    street,
    city,
    country
} = address;
console.log(street);

// spread operator-> its helps to concatinate a the two list and we add more char , str, alpha , num in between the list

const first = [1, 2, 3];
const second = [5, 6, 7]

const add = first.concat(second);
const add2 = [...first, 'a', ...second];
console.log(add2);

const firstName = {
    name: 'Hritik'
};
const lastName = {
    job: 'learner'
};

const combined = {
    ...firstName,
    ...lastName,
    location: 'UK'
};
console.log(combined);

// classes -> 

class animal {
    constructor(name) {
        this.name = name;

    }
    walking() {
        console.log("walk");
    }
}

const ani = new animal('Hritik');
console.log(ani.name);

// inheritance 
// we are extending from the parent class we have to keep in mind that 
// if we create a child class that will inherite a parent class should not contain constructor with same 
// parameter it will throw an error 
// to remove such ambiguty we use super keyword

class human {
    constructor(name) {
        this.name = name;

    }

    eat() {
        console.log("eat");
    }
}

class plant extends human {
    constructor(name, degree) {
        super(name)
        this.degree = degree;
    }
    drink() {
        console.log("drink");
    }
}

const plan = new plant("mosh", 'deg');
plan.drink();