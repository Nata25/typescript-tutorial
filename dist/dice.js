var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var DieValues;
(function (DieValues) {
    DieValues[DieValues["One"] = 0] = "One";
    DieValues[DieValues["Two"] = 1] = "Two";
    DieValues[DieValues["Three"] = 2] = "Three";
    DieValues[DieValues["Four"] = 3] = "Four";
    DieValues[DieValues["Five"] = 4] = "Five";
    DieValues[DieValues["Six"] = 5] = "Six";
})(DieValues || (DieValues = {}));
var Die = (function () {
    function Die(dieOptions) {
        this.options = dieOptions;
        this.value = DieValues[getRandomIntInclusive(0, 5)];
    }
    return Die;
}());
var dieOptions = [
    {
        width: 100,
        border: '1px solid'
    },
    {
        width: 100,
        border: '1px solid'
    }
];
var DieRoller = (function (_super) {
    __extends(DieRoller, _super);
    function DieRoller(die) {
        var _this = _super.call(this, die) || this;
        _this.initDie();
        return _this;
    }
    DieRoller.prototype.initDie = function () {
        this.die = document.createElement('div');
        var sizeForCss = this.options.width + "px";
        this.die.className = 'dice';
        this.die.style.width = sizeForCss;
        this.die.style.height = sizeForCss;
        this.die.style.border = this.options.border;
        this.die.innerText = this.value;
        document.body.appendChild(this.die);
    };
    DieRoller.prototype.rollDice = function () {
        this.value = DieValues[getRandomIntInclusive(0, 3)];
        this.die.innerText = this.value;
        return true;
    };
    return DieRoller;
}(Die));
var dice = [];
dieOptions.forEach(function (die) {
    var dieInstance = new DieRoller(die);
    dice.push(dieInstance);
});
var button = document.createElement('button');
button.innerText = 'Roll the dice';
document.body.appendChild(button);
button.addEventListener('click', function () {
    for (var i = 0; i < dieOptions.length; i++) {
        dice[i].rollDice();
    }
});
