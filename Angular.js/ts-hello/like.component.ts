export class LikeComponent {
    constructor(private _likesCount: number, private _isSelected: boolean) {
    }
    onClick() {
        // if (this.isSelected) {
        //     this.likesCount--;
        // }
        // else {
        //     this.likesCount++;
        // }
        //instead of above commented code , we can simply write code shown asd below 
        this._likesCount += (this._isSelected) ? -1 : 1;

        // if(this.isSelected){
        //     this.isSelected =false;
        // }else{
        //     this.isSelected =true;
        // }
        // As like previous we could simplyfy the above commented code as shown below(Here in below code Toggling of the boolean value using falsy method)
        this._isSelected = !this._isSelected;

    }
    get likesCount(){
        return this._likesCount;
    }
    get isSelected(){
        return this._isSelected;
    }

}