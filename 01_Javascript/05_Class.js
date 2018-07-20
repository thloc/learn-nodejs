class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Line {
    constructor(pointA, pointB) {
        this.pointA = pointA;
        this.pointB = pointB;
    }
    getLength() {
        const dx = this.pointA.x - this.pointB.x;
        const dy = this.pointA.y - this.pointB.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

class Triangle {
    constructor(p1, p2, p3) {
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }
    getPerimeter() {
        const l1 = new Line(this.p1, this.p2);
        const l2 = new Line(this.p1, this.p3);
        const l3 = new Line(this.p3, this.p2);
        return l1.getLength() + l2.getLength() + l3.getLength();
    }
}

const A = new Point(0, 1);
const B = new Point(1, 0);
const C = new Point(0, 0);

const lineAB = new Line(A, B);
const triangle = new Triangle(A, B, C);
console.log(triangle.getPerimeter());

// Sub classing with extends
function Animal (name) {
    this.name = name;  
}
  
Animal.prototype.speak = function () {
    console.log(this.name + ' makes a noise.');
}
  
class Dog extends Animal {
    speak() {
      console.log(this.name + ' barks.');
    }
}

let d = new Dog('Scooby');
d.speak();