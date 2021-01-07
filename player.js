class Player {

    constructor(x, y, width) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = this.width * 2.5;
        this.vel_x = 0;
        this.vel_y = 3.5;
        this.grav = 3.5;
        this.jumping = false;
        this.direction = 1;
        // this.jumpHeight = 13;
        this.jumpHeight = this.height * 0.16 + 6;
        this.groundLevel = 400 - this.height/2;
        this.maxJump = this.height/2;
        this.jumpCount = 0;
        this.falling = false;
    }

    display() {
        strokeWeight(3);
        fill(100, 0, 200);
        rect(this.x, this.y, this.width, this.height, 5);
    }

    collide(pf) {
        if (this.x >= pf.x - pf.width/2 && this.x <= pf.x + pf.width/2 && this.y + this.height/2 >= pf.y - pf.height/2 && this.y + this.height/2 <= pf.y + pf.height/2 && this.jumping === false && this.falling === false){
            if (!pf.wall) this.y = pf.y - pf.height/2 - this.height/2;
            this.vel_y = 0;
            this.jumpCount = 0;
        }
        if (pf.wall) {
            if (this.y > pf.y - pf.height / 2 && this.y < pf.y + pf.height && this.x + this.width/2 > pf.x - pf.width / 2 && this.x - this.width/2 < pf.x + pf.width / 2) {
                if (pf.x > this.x) this.x = (pf.x - (pf.width / 2)) - (this.width / 2)
                if (pf.x < this.x) this.x = (pf.x + (pf.width / 2)) + (this.width / 2)
            }
        }
        // if (this.x >= pf.x - pf.width/2 && this.x <= pf.x + pf.width/2 && this.y + this.height/2 >= pf.y - pf.height/2 && this.y + this.height/2 <= pf.y + pf.height/2 && this.jumping === false && this.falling === false){
        //     this.y = pf.y - pf.height/2 - this.height/2;
        //     this.vel_y = 0;
        //     this.jumpCount = 0;
        // }
    }

    jump() {
        keyIsDown(UP_ARROW) ? this.jumping = true : this.jumping = false;
    }

    move() {
        if (keyIsDown(LEFT_ARROW)) {
            this.x -= 4
        }
        this.x = constrain(this.x, 0+this.width/2, 800-this.width/2)
    
        if (keyIsDown(RIGHT_ARROW)) {
            this.x += 4
        }

        if (keyIsDown(DOWN_ARROW)) {
            this.falling = true;
        } else {
            this.falling = false;
        }
    }

    gravity() {
        //collision with ground level
        // this.y = constrain(this.y, 0, this.groundLevel)
        if (this.y >= this.groundLevel && this.jumping === false) {
            // this.y += 0;
            this.jumpCount = 0;
        } else {
            // this.y += (this.direction*this.vel_y);
            this.y += this.vel_y;
        }
    
        if (this.jumping === true) {
            if(this.y <= this.maxJump || this.jumpCount >= this.jumpHeight) {
                if(this.y >= this.groundLevel){
                    this.y = this.groundLevel;
                } else {
                    this.vel_y = this.grav;
                }
            } else {
                this.vel_y = -this.jumpHeight
                this.jumpCount += 1
            }
        } else {
            this.vel_y = this.grav
        }
    }
}