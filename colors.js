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
var color = 'green';
var squareSizeNum = 100;
var squareSize = squareSizeNum + "px";
var div = document.createElement('div');
var button = document.createElement('button');
button.innerHTML = 'Change it!';
// let changeColor: Function = (elem: Element, color: string) => {
// }
// document.body.appendChild(div);
// (<HTMLElement>div).style.backgroundColor = color;
// (<HTMLElement>div).style.width = `${squareSizeNum}px`;
// (<HTMLElement>div).style.height = `${squareSizeNum}px`;
// document.body.appendChild(button);
var Elements = {
    'div': document.createElement('div'),
    'button': document.createElement('button')
};
var elementSets = [];
for (var index = 0; index < 5; index++) {
    elementSets.push({
        'div': document.createElement('div'),
        'button': document.createElement('button')
    });
}
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Blue"] = 1] = "Blue";
    Colors[Colors["Green"] = 2] = "Green";
    Colors[Colors["Yellow"] = 3] = "Yellow";
    Colors[Colors["Orange"] = 4] = "Orange";
})(Colors || (Colors = {}));
var ColorChange = (function () {
    function ColorChange(div) {
        this.div = div;
    }
    ColorChange.prototype.changeColor = function (color) {
        if (typeof color === 'number') {
            return true;
        }
        this.div.style.backgroundColor = Colors[color];
        return true;
    };
    return ColorChange;
}());
var numericColor = (function (_super) {
    __extends(numericColor, _super);
    function numericColor(div) {
        var _this = _super.call(this, div) || this;
        _this.div.style.width = squareSize;
        _this.div.style.height = squareSize;
        return _this;
    }
    numericColor.prototype.changeColor = function (color) {
        this.div.style.backgroundColor = Colors[color];
        return true;
    };
    return numericColor;
}(ColorChange));
numericColor.Colors = Colors;
elementSets.map(function (elem, index) {
    var div = new numericColor(elem.div);
    elem.button.innerText = 'Click to colorize';
    document.body.appendChild(elem.div);
    document.body.appendChild(elem.button);
    elem.button.addEventListener('click', function (event) {
        // div.changeColor(Colors[index]);
        div.changeColor(getRandomIntInclusive(0, 4));
    });
});
