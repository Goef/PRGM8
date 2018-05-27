class Laser{
    private element:HTMLElement
    public posY:number
    public posX:number
    public active:boolean
    public speed:number

    constructor(c:Character){
        this.active = false
        this.posX = c.posX+25
        this.posY = c.posY+50
        this.speed = 5
        this.element = document.createElement("laser")
        let f = document.getElementsByTagName('foreground')[0]
        f.appendChild(this.element)
    }

    public update(c:Character){
        // laser stays in weapon
        if (this.active == false){
            this.posX = c.posX+25
            this.posY = c.posY+50
            this.element.style.transform = `translate(${this.posX}px, ${this.posY}px)`
        }
        // when pressed E, laser zapps!
        else {
            this.posX += 10
            this.element.style.transform = `translate(${this.posX}px, ${this.posY}px)`
            if (this.posX >= window.innerWidth){
                this.active=false
            }
        }
       
    }
}