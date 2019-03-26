  namespace EnemyFabric {

    export interface Enemy {
        getName():String;
    }

    export class Gnome implements Enemy{

        getName():String{
            return "Gnome"
        }
    }
    export class Dragon implements Enemy{

        getName(): String{
            return "Dragon"
        }
    }


  

    export class EnemyFabric{

        public static spawnEnemy(type: string)  : Enemy {
            if(type === "Dragon"){
                return new Dragon();
            }
            else if(type === "Gnome"){
                return new Gnome();
            }
            return null;
        }
    }

  }
  