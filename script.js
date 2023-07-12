//complete this code
class Rectangle {
	constructor(width, height){
		this.height = height;
		this.width = width;
	}

	get width(){
		return this._width;
	}

	get height(){
		return this._height;
	}

	getArea(){
		return (this.width * this.height)
	}
}

class Square extends Rectangle {
	constructor(side){
		this.side = side;
	}
	
	getPerimeter(){
		return (this.side * 4);
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
