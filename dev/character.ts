/// <reference path="GameObject.ts"/>
class Character extends gameObject{
    
    public keyBoardObject:KeyboardObject

    constructor() {
        super("character", 0, 192)
        this.keyBoardObject = new KeyboardObject(this)
    }

    public update(): void {
        this.keyBoardObject.move()
    }
}