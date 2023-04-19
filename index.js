class Circle{
    constructor(radius) {
        this.radius = radius;
    }
    get diameter() {
       return 2 * this.radius 
    };
    get circumference(){  
        return (this.radius * 2) * Math.PI
    };
    get area() { 
        return Math.PI * (this.radius * this.radius)
    };

    set diameter(diameter) { 
        return this.radius = diameter / 2
    };
    set circumference(circumference) { 
        return this.radius = circumference / (Math.PI * 2)
    };
    set area(area) {
        return this.radius = Math.sqrt(area / Math.PI)
    };

}