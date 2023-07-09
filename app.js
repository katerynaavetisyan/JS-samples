const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount++;
        return 'EGG';
    }
};

const hen2 = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg: function () {
        this.eggCount += 1;
        return 'EGG';
    }
};
