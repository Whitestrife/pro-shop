var BallLayout = require('./BallLayout');
var ContactInfo = require('./ContactInfo');

const Handedness = {
    LEFT: "letf",
    RIGHT: "right"
};

class Person {
    constructor() {
        this.id = -1;
        this.notes = "Test";
        this.contactInfo = new ContactInfo();
        this.ballLayouts = [new BallLayout()];
        this.handedness = Handedness.RIGHT;
    }
}

module.exports = Person;