/// <reference path="GameObject.ts"/>
class Character extends gameObject{
    
    public keyBoardObject:KeyboardObject
    public laser:Laser

    constructor() {
        super("character", 0, 192)
        this.laser = new Laser(this)
        this.keyBoardObject = new KeyboardObject(this)
    }

    public update(): void {
        this.keyBoardObject.move()
        this.laser.update(this)
    
    }
}