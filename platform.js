class Platform {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.wall = height > width ? true : false;
    }

    display() {
        strokeWeight(3);
        fill(200, 80, 0);
        rect(this.x, this.y, this.width, this.height);
    }

}