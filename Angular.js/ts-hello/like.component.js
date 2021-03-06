"use strict";
exports.__esModule = true;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_likesCount, _isSelected) {
        this._likesCount = _likesCount;
        this._isSelected = _isSelected;
    }
    LikeComponent.prototype.onClick = function () {
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
    };
    Object.defineProperty(LikeComponent.prototype, "likesCount", {
        get: function () {
            return this._likesCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
