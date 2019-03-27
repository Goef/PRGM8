namespace potionDecorator {

    export interface potion {
        hp:number
        heal(dmg:number, effect:string):void
    }

    export class healthPotion implements potion {
        
        public element: HTMLElement
        public posX:number
        public posY:number
        public div:string
        public basehp = 20
        public hp:number
        

        constructor(hp: number,div:string, x:number, y:number ) {
            this.hp = hp;
            this.div = div
            this.element = document.createElement(this.div)
            this.posX = x
            this.posY = y
            this.createElement()
            this.setPosition()
            console.log("your hp is",this.basehp + hp)
            
            
        }
        createElement(){
            let foreground = document.getElementsByTagName("foreground")[0]
            foreground.appendChild(this.element)
        }
    
        public setPosition() {
            this.element.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)"
        }

        public heal(): void {
        }
    }


    export class PotionDecorator implements potion {
        hp:number
        private potion: potion;
        private addOn :number;

        constructor(addOn: number, potion: potion) {
            this.addOn = addOn;
            this.potion = potion;
        }
        public heal(dmg:number, effect:string) {
            console.log("you take", dmg, "damage , and gain",effect)
            this.potion.heal(dmg, effect)
        }
    }

    export class silent extends PotionDecorator {
        constructor(addOn: number, potion: potion) {
            super(addOn, potion);
        }

        public heal(): void {
            super.heal(20, "silent walking");
            console.log("potion with silent" );
        }
    }

    export class damage extends PotionDecorator {
        constructor(addOn: number, potion: potion) {
            super(addOn, potion);
        }

        public heal(): void {
            super.heal(40, "extra damage per hit");
            console.log("potion with damage");
        }
    }
}