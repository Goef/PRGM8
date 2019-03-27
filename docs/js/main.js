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
var EnemyFabric;
(function (EnemyFabric_1) {
    var Slime = (function () {
        function Slime(div, x, y) {
            this.div = div;
            this.element = document.createElement(this.div);
            this.posX = x;
            this.posY = y;
            this.createElement();
            this.setPosition();
        }
        Slime.prototype.createElement = function () {
            var foreground = document.getElementsByTagName("foreground")[0];
            foreground.appendChild(this.element);
        };
        Slime.prototype.setPosition = function () {
            this.element.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
        };
        Slime.prototype.getName = function () {
            return "Gnome";
        };
        return Slime;
    }());
    EnemyFabric_1.Slime = Slime;
    var Dragon = (function () {
        function Dragon(div, x, y) {
            this.div = div;
            this.element = document.createElement(this.div);
            this.posX = x;
            this.posY = y;
            this.createElement();
            this.setPosition();
        }
        Dragon.prototype.createElement = function () {
            var foreground = document.getElementsByTagName("foreground")[0];
            foreground.appendChild(this.element);
        };
        Dragon.prototype.setPosition = function () {
            this.element.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
        };
        Dragon.prototype.getName = function () {
            return "Dragon";
        };
        return Dragon;
    }());
    EnemyFabric_1.Dragon = Dragon;
    var EnemyFabric = (function () {
        function EnemyFabric() {
        }
        EnemyFabric.spawnEnemy = function (div, x, y) {
            if (div === "Dragon") {
                return new Dragon(div, x, y);
            }
            else if (div === "slime") {
                return new Slime(div, x, y);
            }
            return null;
        };
        return EnemyFabric;
    }());
    EnemyFabric_1.EnemyFabric = EnemyFabric;
})(EnemyFabric || (EnemyFabric = {}));
var potionDecorator;
(function (potionDecorator) {
    var healthPotion = (function () {
        function healthPotion(hp, div, x, y) {
            this.basehp = 20;
            this.hp = hp;
            this.div = div;
            this.element = document.createElement(this.div);
            this.posX = x;
            this.posY = y;
            this.createElement();
            this.setPosition();
            console.log("your hp is", this.basehp + hp);
        }
        healthPotion.prototype.createElement = function () {
            var foreground = document.getElementsByTagName("foreground")[0];
            foreground.appendChild(this.element);
        };
        healthPotion.prototype.setPosition = function () {
            this.element.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
        };
        healthPotion.prototype.heal = function () {
        };
        return healthPotion;
    }());
    potionDecorator.healthPotion = healthPotion;
    var PotionDecorator = (function () {
        function PotionDecorator(addOn, potion) {
            this.addOn = addOn;
            this.potion = potion;
        }
        PotionDecorator.prototype.heal = function (dmg, effect) {
            console.log("you take", dmg, "damage , and gain", effect);
            this.potion.heal(dmg, effect);
        };
        return PotionDecorator;
    }());
    potionDecorator.PotionDecorator = PotionDecorator;
    var silent = (function (_super) {
        __extends(silent, _super);
        function silent(addOn, potion) {
            return _super.call(this, addOn, potion) || this;
        }
        silent.prototype.heal = function () {
            _super.prototype.heal.call(this, 20, "silent walking");
            console.log("potion with silent");
        };
        return silent;
    }(PotionDecorator));
    potionDecorator.silent = silent;
    var damage = (function (_super) {
        __extends(damage, _super);
        function damage(addOn, potion) {
            return _super.call(this, addOn, potion) || this;
        }
        damage.prototype.heal = function () {
            _super.prototype.heal.call(this, 40, "extra damage per hit");
            console.log("potion with damage");
        };
        return damage;
    }(PotionDecorator));
    potionDecorator.damage = damage;
})(potionDecorator || (potionDecorator = {}));
var gameObject = (function () {
    function gameObject(div, x, y) {
        this.div = div;
        this.element = document.createElement(this.div);
        this.posX = x;
        this.posY = y;
        this.createElement();
        this.setPosition();
    }
    gameObject.prototype.createElement = function () {
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
        _this.laser = new Laser(_this);
        _this.keyBoardObject = new KeyboardObject(_this);
        return _this;
    }
    Character.prototype.update = function () {
        this.keyBoardObject.move();
        this.laser.update(this);
    };
    return Character;
}(gameObject));
var CompositePattern;
(function (CompositePattern) {
    var Gear = (function () {
        function Gear(g) {
            this.list = [];
            this.g = g;
        }
        Gear.prototype.showInventory = function () {
            console.log("show inventory");
            for (var i = 0; i < this.list.length; i += 1) {
                this.list[i].showInventory();
            }
        };
        Gear.prototype.add = function (c) {
            this.list.push(c);
        };
        Gear.prototype.remove = function (i) {
            if (this.list.length <= i) {
                throw new Error("index out of bound!");
            }
            this.list.splice(i, 1);
        };
        return Gear;
    }());
    CompositePattern.Gear = Gear;
    var sword = (function () {
        function sword(g) {
            this.posX = 20;
            this.posY = 40;
            this.g = g;
            this.div = this.g + "sword";
            console.log(this.div);
            console.log(g);
        }
        sword.prototype.showInventory = function () {
            console.log("sword of", this.g, " is equipped.");
            console.log(this.div);
            this.element = document.createElement(this.div);
            this.createElement();
            this.setPosition();
        };
        sword.prototype.createElement = function () {
            var foreground = document.getElementsByTagName("foreground")[0];
            foreground.appendChild(this.element);
        };
        sword.prototype.setPosition = function () {
            this.element.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
        };
        return sword;
    }());
    CompositePattern.sword = sword;
    var shield = (function () {
        function shield(g) {
            this.posX = 40;
            this.posY = 60;
            this.g = g;
            this.div = this.g + "shield";
            console.log(this.div);
            console.log(g);
        }
        shield.prototype.showInventory = function () {
            console.log("shield of", this.g, " is equipped.");
            console.log(this.div);
            this.element = document.createElement(this.div);
            this.createElement();
            this.setPosition();
        };
        shield.prototype.createElement = function () {
            var foreground = document.getElementsByTagName("foreground")[0];
            foreground.appendChild(this.element);
        };
        shield.prototype.setPosition = function () {
            this.element.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
        };
        return shield;
    }());
    CompositePattern.shield = shield;
})(CompositePattern || (CompositePattern = {}));
var CompositePattern;
(function (CompositePattern) {
    var GearSelector;
    (function (GearSelector) {
        function buyItems() {
            var woodSword = new CompositePattern.sword("wood"), steelShield = new CompositePattern.shield("wood"), player1 = new CompositePattern.Gear("Player1");
            player1.add(woodSword);
            player1.add(steelShield);
            player1.showInventory();
        }
        GearSelector.buyItems = buyItems;
    })(GearSelector = CompositePattern.GearSelector || (CompositePattern.GearSelector = {}));
})(CompositePattern || (CompositePattern = {}));
var FactoryMethodPattern;
(function (FactoryMethodPattern) {
    var Demo;
    (function (Demo) {
        function spawnEnemy() {
            var Dragon = EnemyFabric.EnemyFabric.spawnEnemy("Dragon", 200, 5);
            var Gnome = EnemyFabric.EnemyFabric.spawnEnemy("slime", 480, 125);
            var dragon2 = EnemyFabric.EnemyFabric.spawnEnemy("Dragon", 210, 5);
            Dragon;
            Gnome;
            dragon2;
        }
        Demo.spawnEnemy = spawnEnemy;
        ;
    })(Demo = FactoryMethodPattern.Demo || (FactoryMethodPattern.Demo = {}));
})(FactoryMethodPattern || (FactoryMethodPattern = {}));
var DecoratorPattern;
(function (DecoratorPattern) {
    var Demo;
    (function (Demo) {
        function heal() {
            var hppotion = new potionDecorator.healthPotion(10, "potion", 50, 5);
            var hpdmgpotion = new potionDecorator.damage(-20, new potionDecorator.healthPotion(10, "hpdmg", 100, 1));
            var silentpotion = new potionDecorator.silent(-40, new potionDecorator.healthPotion(10, "hpsilent", 150, 1));
            var hpdmgsilentpotion = new potionDecorator.silent(10, new potionDecorator.damage(20, new potionDecorator.healthPotion(50, "hpsilentdmg", 200, 1)));
            silentpotion.heal();
            hppotion.heal();
            hpdmgpotion.heal();
            hpdmgsilentpotion.heal();
        }
        Demo.heal = heal;
    })(Demo = DecoratorPattern.Demo || (DecoratorPattern.Demo = {}));
})(DecoratorPattern || (DecoratorPattern = {}));
var Game = (function () {
    function Game() {
        this.character = new Character();
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.character.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
    DecoratorPattern.Demo.heal();
    FactoryMethodPattern.Demo.spawnEnemy();
    CompositePattern.GearSelector.buyItems();
});
var KeyboardObject = (function () {
    function KeyboardObject(i) {
        this.leftKey = 65;
        this.rightKey = 68;
        this.spacebar = 32;
        this.shootLaser = 69;
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
            case this.shootLaser:
                this.instance.laser.active = true;
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
            case this.shootLaser:
                break;
        }
    };
    return KeyboardObject;
}());
var Laser = (function () {
    function Laser(c) {
        this.active = false;
        this.posX = c.posX + 25;
        this.posY = c.posY + 50;
        this.speed = 5;
        this.element = document.createElement("laser");
        var f = document.getElementsByTagName('foreground')[0];
        f.appendChild(this.element);
    }
    Laser.prototype.update = function (c) {
        if (this.active == false) {
            this.posX = c.posX + 25;
            this.posY = c.posY + 50;
            this.element.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
        }
        else {
            this.posX += 10;
            this.element.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
            if (this.posX >= window.innerWidth) {
                this.active = false;
            }
        }
    };
    return Laser;
}());
var Slime = (function (_super) {
    __extends(Slime, _super);
    function Slime() {
        var _this = _super.call(this, "slime", 480, 125) || this;
        console.log("hoi");
        return _this;
    }
    return Slime;
}(gameObject));
//# sourceMappingURL=main.js.map