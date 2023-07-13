function getThis() {
  return this;
}

const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };

obj1.getThis = getThis;
obj2.getThis = getThis;

console.log(obj1.getThis());
console.log(obj2.getThis());


const obj3 = {
  __proto__: obj1,
  name: "obj3",
};

console.log(obj3.getThis());

const obj4 = {
  name: "obj4",
  getThis() {
    return this;
  },
};

const obj5 = { name: "obj5" };

obj5.getThis = obj4.getThis;
console.log(obj5.getThis());


function getThis() {
  return this;
}

function logThis() {
  "use strict";
  console.log(this);
}

[1, 2, 3].forEach(logThis);