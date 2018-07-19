// Alias
let obj = { x: 1 };
let aliasToObj = obj;
aliasToObj.x ++;
console.log(obj.x);

// Objects
let car = {
    name : "Fiat",
    model : 500,
    weight : "850kg",
    color : "white",
    info : function() {
        return this.name + " - " + this.model;
    }
};
console.log(car.info());
