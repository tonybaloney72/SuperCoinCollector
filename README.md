<p align="center"><img src="/assets/Super-Ultra-Coin.png?raw=true"/></p>

<a href="https://tonybaloney72.github.io/SuperCoinCollector/">Super Ultra Coin Collector Turbo: MEGA EXTREME EDITION</a> is a high-octane, no-holds-barred, adrenaline-fueled coin collecting thrill ride. Right from the title screen the volume is cranked up to 11.

## Tech Specs

* HTML5
* CSS3
* JavaScript

## Title Screen
<img src="/assets/title-page.png?raw=true">

Collision Logic
```javascript
collide(pf) {
    if (this.x >= pf.x - pf.width/2 && this.x <= pf.x + pf.width/2 && this.y + this.height/2 >= pf.y - pf.height/2 && this.y + this.height/2 <= pf.y + pf.height/2 && this.jumping === false && this.falling === false){
        if (!pf.wall) this.y = pf.y - pf.height/2 - this.height/2;
        this.vel_y = 0;
        this.jumpCount = 0;
    }
    if (pf.wall) {
        if (this.y > pf.y - pf.height / 2 && this.y < pf.y + pf.height / 2 && this.x + this.width/2 > pf.x - pf.width / 2 && this.x - this.width/2 < pf.x + pf.width / 2) {
            if (pf.x > this.x) this.x = (pf.x - (pf.width / 2)) - (this.width / 2)
            if (pf.x < this.x) this.x = (pf.x + (pf.width / 2)) + (this.width / 2)
        }
    }
}
```

## Future Features:
* Enemies
* Puzzle Elements