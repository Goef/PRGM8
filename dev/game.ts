/// <reference path="weaponComposite.ts" />
namespace CompositePattern {
	export namespace GearSelector {
		export function buyItems() : void {
		    var woodSword = new CompositePattern.sword("wood"),
				steelShield = new CompositePattern.shield("steel"),

			player1 = new CompositePattern.Gear("Player1")

			player1.add(woodSword);
			player1.add(steelShield);



			player1.showInventory();
		}
	}
}

/// <reference path="EnemyFabric.ts" />
 
namespace FactoryMethodPattern {
    export namespace Demo {
        export function spawnEnemy() : void {
	    var Dragon:EnemyFabric.Enemy = EnemyFabric.EnemyFabric.spawnEnemy("Dragon");
	    var Gnome: EnemyFabric.Enemy = EnemyFabric.EnemyFabric.spawnEnemy("Gnome");
        var dragon2 :EnemyFabric.Enemy = EnemyFabric.EnemyFabric.spawnEnemy("Dragon")
	    console.log(Dragon.getName());
        console.log(Gnome.getName());
        console.log(dragon2.getName());

	};
    }
}

/// <reference path="HealthPotionDecorator.ts" />
namespace DecoratorPattern {
	export namespace Demo {

		export function heal() : void {
			var potion1: potionDecorator.PotionDecorator = new potionDecorator.silent("60 seconds", new potionDecorator.healthPotion("60hp"));
            var potion2:potionDecorator.PotionDecorator = new potionDecorator.damage("60 seconds", new potionDecorator.healthPotion("60hp"));
            var potion3:potionDecorator.PotionDecorator = new potionDecorator.silent("60 seconds", new potionDecorator.damage("60 seconds", new potionDecorator.healthPotion("120hp")))
            var potion4:potionDecorator.PotionDecorator = new potionDecorator.silent("30 seconds", new potionDecorator.manaPotion("30 mp") )
            potion1.heal();
            potion2.heal();
            potion3.heal();
            potion4.heal();
		}
	}
}

class Game {
    character:Character
    slime:Slime

    constructor() {
        this.character = new Character()
        this.slime = new Slime()
        this.gameLoop()
        
        
    }
    
    private gameLoop():void{
        this.character.update()
        
        requestAnimationFrame(() => this.gameLoop())
        }
} 

window.addEventListener("load", () => {
    new Game();
    DecoratorPattern.Demo.heal();
    FactoryMethodPattern.Demo.spawnEnemy();
    CompositePattern.GearSelector.buyItems();
});