const call = {
  caller: "mom",
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  }
};

call.says();

const call2 = {
  caller: "mom",
  says: () => {
    console.log(`Hey, ${this.caller} just called.`);
  }
};

call.says();