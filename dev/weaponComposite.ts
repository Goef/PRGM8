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
        public element: HTMLElement
        public posX:number = 20
        public posY:number = 40
        public div:string

        constructor(g: String) {
            this.g = g;
             this.div =  this.g + "sword"
            console.log(this.div)
            console.log(g)
        }
        public showInventory(): void {
            console.log("sword of", this.g, " is equipped.");
            console.log(this.div)
            this.element = document.createElement(this.div)
            this.createElement()
            this.setPosition()
        }
        createElement(){
            let foreground = document.getElementsByTagName("foreground")[0]
            foreground.appendChild(this.element)
        }
    
        public setPosition() {
            this.element.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)"
        }
    }
    
    export class shield implements gear {
        private g: String;
        public element: HTMLElement
        public posX:number = 40
        public posY:number = 60
        public div:string
        constructor(g: String) {
            this.g = g;
             this.div =  this.g + "shield"
            console.log(this.div)
            console.log(g)
        }
        public showInventory(): void {
            console.log("shield of", this.g, " is equipped.");
            console.log(this.div)
            this.element = document.createElement(this.div)
            this.createElement()
            this.setPosition()
        }
        createElement(){
            let foreground = document.getElementsByTagName("foreground")[0]
            foreground.appendChild(this.element)
        }
    
        public setPosition() {
            this.element.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)"
        }
    }
}