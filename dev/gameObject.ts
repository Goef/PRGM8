abstract class gameObject{
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
}