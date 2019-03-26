namespace CompositePattern {
    export interface gear {
        showInventory(): void;
    }



    export class Gear implements gear {

        private list: gear[];
        private g: String;

        constructor(g: String) {
            this.list = [];
            this.g = g;
        }

        public showInventory(): void {
            console.log("show inventory")
            for (var i = 0; i < this.list.length; i += 1) {
                this.list[i].showInventory();
            }
        }

        public add(c: gear): void {
            this.list.push(c);
        }

        public remove(i: number): void {
            if (this.list.length <= i) {
                throw new Error("index out of bound!");
            }
            this.list.splice(i, 1);
        }
    }

    export class sword implements gear {
        private g: String;
        constructor(g: String) {
            this.g = g;
        }
        public showInventory(): void {
            console.log("sword of", this.g, " is equipped.");
        }
    }
    
    export class shield implements gear {
        private g: String;
        constructor(g: String) {
            this.g = g;
        }
        public showInventory(): void {
            console.log("shield of", this.g, " is equipped.");
        }
    }
}