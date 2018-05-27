"use strict";
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
var gameObject = (function () {
    function gameObject(div, x, y) {
        this.posX = x;
        this.posY = y;
        this.div = div;
        this.createElement();
        this.setPosition();
    }
    gameObject.prototype.createElement = function () {
        this.element = document.createElement(this.div);
        var foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this.element);
    };
    gameObject.prototype.setPosition = function () {
        this.element.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    };
    return gameObject;
}());
var Character = (function (_super) {
    __extends(Character, _super);
    function Character() {
        var _this = _super.call(this, "character", 0, 192) || this;
        _this.keyBoardObject = new KeyboardObject(_this);
        return _this;
    }
    Character.prototype.update = function () {
        this.keyBoardObject.move();
    };
    return Character;
}(gameObject));
var Game = (function () {
    function Game() {
        this.character = new Character();
        this.slime = new Slime();
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        console.log("updating the game");
        this.character.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var KeyboardObject = (function () {
    function KeyboardObject(i) {
        this.leftKey = 65;
        this.rightKey = 68;
        this.spacebar = 32;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.jump = false;
        this.inJump = false;
        this.instance = i;
        window.addEventListener("keydown", this.onKeydown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
    }
    KeyboardObject.prototype.move = function () {
        if (this.instance.posX > 700 - 47 || this.instance.posX < 0) {
            this.instance.posX = 0;
        }
        if (this.jump == true &&
            this.inJump == false) {
            this.ySpeed -= 14;
            this.inJump = true;
        }
        this.ySpeed += 1.5;
        this.instance.posX += this.xSpeed;
        this.instance.posY += this.ySpeed;
        if (this.instance.posY > 192) {
            this.inJump = false;
            this.instance.posY = 192;
            this.ySpeed = 0;
        }
        this.instance.element.style.transform = "translate(" + this.instance.posX + "px, " + this.instance.posY + "px)";
    };
    KeyboardObject.prototype.onKeydown = function (event) {
        switch (event.keyCode) {
            case this.leftKey:
                this.xSpeed = -3;
                break;
            case this.rightKey:
                this.xSpeed = 3;
                break;
            case this.spacebar:
                this.jump = true;
                break;
        }
    };
    KeyboardObject.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case this.leftKey:
                this.xSpeed = 0;
                break;
            case this.rightKey:
                this.xSpeed = 0;
                break;
            case this.spacebar:
                this.jump = false;
                break;
        }
    };
    return KeyboardObject;
}());
var Slime = (function (_super) {
    __extends(Slime, _super);
    function Slime() {
        return _super.call(this, "slime", 480, 125) || this;
    }
    return Slime;
}(gameObject));
//# sourceMappingURL=main.js.map