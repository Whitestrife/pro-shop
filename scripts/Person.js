var BallLayout = require('./BallLayout');
var ContactIno = require('./ContactInfo');

const Handedness = {
    LEFT: "letf",
    RIGHT: "right"
};

module.exports = Person;
function Person(name) {
    this.id = -1;
    this.notes = "Test Notes";
    this.contactInfo = new ContactIno(name);
    this.ballLayouts = [new BallLayout()];
    this.handedness = Handedness.RIGHT;
}