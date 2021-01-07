class Coin {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    display() {
        strokeWeight(1);
        fill(255, 255, 0);
        ellipse(this.x, this.y, 20, 30);
    }

    collide(player){
        if(dist(player.x, player.y, this.x, this.y) < 25 ) {
            return true;
        } else {
            return false; 
        }
    }
}