function Point(x, y){
    this.x = x;
    this.y = y;
}

function Line(pointA , pointB){
    this.pointA = pointA;
    this.pointB = pointB;
    this.getLine = function(){
        const dx = this.pointB.x - this.pointA.x;
        const dy = this.pointB.y - this.pointA.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

function Triangle(p1 , p2 , p3){
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
    this.getPerimeter = function(){
        const l1 = new Line(this.p1, this.p2);
        const l2 = new Line(this.p1, this.p3);
        const l3 = new Line(this.p3, this.p2);
        return l1.getLine() + l2.getLine() + l3.getLine();
    }
}

const A = new Point(0, 1);
const B = new Point(1, 0);
const C = new Point(0, 0);
const triangle = new Triangle(A, B, C);
console.log(triangle.getPerimeter());


// Function like a variable
function getLog(){
    return console.log;
}
const c = getLog();
c('Test get log!');

// Callback in function
function doubleNumber(a){
    return a * 2;
}
function numbers(callback){
    return callback(123);
}
console.log(numbers(doubleNumber));