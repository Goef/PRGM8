  namespace EnemyFabric {

    export interface Enemy extends gameObject{
        getName():String;
    }

    export class Slime implements Enemy{
        public element: HTMLElement
        public posX:number
        public posY:number
        public div:string

        constructor(div:string, x:number, y:number){
            this.div = div
            this.element = document.createElement(this.div)
            this.posX = x
            this.posY = y
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
        getName():String{
            
            return "Gnome"
        }
    }
    export class Dragon implements Enemy{
 public element: HTMLElement
        public posX:number
        public posY:number
        public div:string

        constructor(div:string, x:number, y:number){
            this.div = div
            this.element = document.createElement(this.div)
            this.posX = x
            this.posY = y
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
        getName(): String{
            return "Dragon"
        }
    }


  

    export class EnemyFabric{

        public static spawnEnemy(div: string,x:number,y:number)   : Enemy {
            if(div === "Dragon"){
                return new Dragon(div,x,y);
            }
            else if(div === "slime"){
                return new Slime(div,x,y);
            }
            return null;
        }
    }

  }
  