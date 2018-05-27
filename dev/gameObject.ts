abstract class gameObject{
    protected element: HTMLElement
    public posX:number
    public posY:number
    private div:string

    constructor(div:string, x:number, y:number){
        this.posX = x
        this.posY = y
        this.div = div
        this.createElement()
        this.setPosition()
    }

    createElement(){
        this.element = document.createElement(this.div)
        let foreground = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this.element)
    }

    public setPosition() {
        this.element.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)"
    }
}