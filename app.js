
const test = {
  prop: 42,
  func: function () {
    return this.prop;
  },
};

console.log(test.func());



fullName: function() {
  return this.firstName + " " + this.lastName;
}

function myFunction() {
  return this;
}

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  myFunction: function () {
    return this;
  }
};
const person1 = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const person2 = {
  firstName: "John",
  lastName: "Doe",
}


person1.fullName.call(person2);

const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);
