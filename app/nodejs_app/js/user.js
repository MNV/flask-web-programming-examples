function User(name, age) {
    this.name = name;
    this.displayInfo = function () {
        console.log(`Имя: ${this.name}`);
    }
}

User.prototype.sayHi = function () {
    console.log(`Привет! Меня зовут ${this.name}.`);
};

module.exports = User;
