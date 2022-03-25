function sum(...arg){
    let sum = 0;
    for (let ele of arg) {
        sum += ele;
    }
    return sum;
}

// console.log(sum(1,2,3,4,5));

Function.prototype.myBind1 = function(context,...aArgs) {
    let that = this;
    return function(...bArgs) {
        // debugger;
        that.apply(context,aArgs.concat(bArgs));
    };
};


Function.prototype.myBind = function (context, argss) {
    let that = this;
    let args = Object.values(arguments).slice(1);
    return function (argss) {
        // debugger;
        that.apply(context, args.concat(Object.values(arguments)));
    };
};

class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true

function curriedSum(num) {
    const sum = [];
    let count = num;
    return function _curriedSum(num) {
        sum.push(num);
        count -= 1;
        if (count === 0){
            return sum.sum();
        }
        else{
            return _curriedSum;
        }
    };
}

Array.prototype.sum = function() {
    let sum = 0;
    for (let ele of this){
        sum += ele;
    }
    return sum;
};

// const total = curriedSum(3);
// console.log(total(5)(30)(20)); // => 56

Function.prototype.curry1 = function (numArgs){
    let nums = [];
    let count = numArgs;
    let that = this;
    return function _curriedSum(num){
        nums.push(num);
        count -= 1;
        if (count === 0){
            return that.apply(null, nums);
        }else{
            return _curriedSum;
        }
    };
};

Function.prototype.curry2 = function (numArgs){
    let nums = [];
    let count = numArgs;
    let that = this;
    return function _curriedSum(num){
        nums.push(num);
        count -= 1;
        if (count === 0){
            return that(...nums);
        }else{
            return _curriedSum;
        }
    };
};

function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
let f1 = sumThree.curry1(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30

// or more briefly:
console.log(sumThree.curry1(3)(4)(20)(6)); // == 30

let f2 = sumThree.curry2(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f2 = f2(4); // [Function]
f2 = f2(20); // [Function]
f2 = f2(6); // = 30

// or more briefly:
console.log(sumThree.curry2(3)(4)(20)(6)); // == 30