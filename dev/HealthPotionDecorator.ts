namespace potionDecorator {

    export interface potion {
        heal(): void;
    }

    export class healthPotion implements potion {
        private hp: String;

        constructor(hp: String) {
            this.hp = hp;
        }

        public heal(): void {
        }
    }

    export class manaPotion implements potion {
        private mana: String;

        constructor(mana: String) {
            this.mana = mana;
        }

        public heal(): void {
        }
    }

    export class PotionDecorator implements potion {
        private potion: potion;
        private addOn :String;

        constructor(addOn: String, potion: potion) {
            this.addOn = addOn;
            this.potion = potion;
        }
        public heal(): void {
            console.log("`Your healing with the healt potion with", this.potion, "with", this.addOn);
            this.potion.heal();
        }
    }

    export class silent extends PotionDecorator {
        constructor(addOn: String, potion: potion) {
            super(addOn, potion);
        }

        public heal(): void {
            super.heal();
            console.log("potion with silent" );
        }
    }

    export class damage extends PotionDecorator {
        constructor(addOn: string, potion: potion) {
            super(addOn, potion);
        }

        public addition(): void {
            super.heal();
            console.log("potion with damage");
        }
    }
}