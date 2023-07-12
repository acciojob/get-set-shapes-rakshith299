//complete this code
class Rectangle {
	constructor(width, height){
		this.height = height;
		this.width = width;
	}

	get width(){
		return this._width;
	}

	set width(width){
		this._width = width;
	}

	get height(){
		return this._height;
	}

	set height(height){
		this._height = height;
	}

	getArea(){
		return (this.width * this.height)
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side, side);
	}
	
	getPerimeter(){
		return (this.side * 4);
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
