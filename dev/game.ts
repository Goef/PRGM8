/// <reference path="weaponComposite.ts" />
namespace CompositePattern {
	export namespace GearSelector {
		export function buyItems() : void {
		    var woodSword = new CompositePattern.sword("wood"),
			steelShield = new CompositePattern.shield("wood"),
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
	    var Dragon:EnemyFabric.Enemy = EnemyFabric.EnemyFabric.spawnEnemy("Dragon",200,5);
	    var Gnome: EnemyFabric.Enemy = EnemyFabric.EnemyFabric.spawnEnemy("slime", 480, 125);
        var dragon2 :EnemyFabric.Enemy = EnemyFabric.EnemyFabric.spawnEnemy("Dragon",210,5)
            Dragon
            Gnome
            dragon2
       	};
    }
}

/// <reference path="HealthPotionDecorator.ts" />
namespace DecoratorPattern {
	export namespace Demo {

		export function heal() : void {
            var hppotion = new potionDecorator.healthPotion(10,"potion",50,5)
            var hpdmgpotion = new potionDecorator.damage(-20, new potionDecorator.healthPotion(10,"hpdmg",100,1));
            var silentpotion = new potionDecorator.silent(-40, new potionDecorator.healthPotion(10,"hpsilent", 150,1));
            var hpdmgsilentpotion = new potionDecorator.silent(10, new potionDecorator.damage(20, new potionDecorator.healthPotion(50,"hpsilentdmg",200,1)))
           
            silentpotion.heal();
            hppotion.heal();
            hpdmgpotion.heal();
            hpdmgsilentpotion.heal();
   
            
		}
	}
}

class Game {
    character:Character
    slime:Slime

    constructor() {
        this.character = new Character()
        // this.slime = new Slime()
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