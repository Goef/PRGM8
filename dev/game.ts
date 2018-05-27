class Game {
    character:Character
    slime:Slime
    constructor() {
        this.character = new Character()
        this.slime = new Slime()
        this.gameLoop()
    }
    
    private gameLoop():void{
        console.log("updating the game")

        this.character.update()
        requestAnimationFrame(() => this.gameLoop())
    }
} 

window.addEventListener("load", () => {
    new Game();
});