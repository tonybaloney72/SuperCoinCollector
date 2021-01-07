class Platform {
    constructor(x, y, width, height, rotation = 0) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        dfg
    }

    display() {
        strokeWeight(3);
        fill(200, 80, 0);
        rect(this.x, this.y, this.width, this.height);
    }

}