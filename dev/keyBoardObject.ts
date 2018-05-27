class KeyboardObject{
    private leftKey:number = 65
    private rightKey:number = 68
    private spacebar:number = 32
    
	private xSpeed: number = 0
    private ySpeed: number = 0
    
    private jump:boolean = false
    private inJump:boolean = false
    private instance:any

    constructor(i:any){
        this.instance = i
        window.addEventListener("keydown", this.onKeydown.bind(this))
        window.addEventListener("keyup", this.onKeyUp.bind(this))
    }

    
    
    public move() {

        //if you leave the screen
        if(this.instance.posX > 700 -47 ||this.instance.posX < 0){
            this.instance.posX = 0
        }

        if(this.jump == true &&
        // makes so you cannot keep jumping
        this.inJump == false){
            this.ySpeed -= 14
            this.inJump = true
        }
        
        this.ySpeed += 1.5 // gravity
		this.instance.posX += this.xSpeed
		this.instance.posY +=this.ySpeed
        

        if(this.instance.posY > 192 ){
            this.inJump = false
            this.instance.posY = 192
            this.ySpeed = 0
        }

        this.instance.element.style.transform = "translate(" +this.instance.posX + "px, " + this.instance.posY + "px)"
        
    }

    onKeydown(event: KeyboardEvent): void {
        switch (event.keyCode) {
            case this.leftKey:
                this.xSpeed = -3
                break

            case this.rightKey:
                this.xSpeed = 3
                break

            case this.spacebar:
                this.jump = true
                break
        }
    }

    onKeyUp(event: KeyboardEvent): void {
        switch (event.keyCode) {
            case this.leftKey:
                this.xSpeed = 0
                break

            case this.rightKey:
                this.xSpeed = 0
                break

                case this.spacebar:
                this.jump = false
                break
        }

    }
}