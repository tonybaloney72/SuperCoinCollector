let player, platforms, coins, playButton, titleImg, song, slider, newSlider, lvlSong, launchGame;

let levels = levels_arr, y = -300;

// let currentLevel = 10;
let currentLevel = 2;

function preload() {
	titleImg = loadImage('assets/super-resize.png');
	song = loadSound('assets/bfg-edit.mp3')
	lvlSong = loadSound('assets/pc.mp3')
}

function setup() {
	createCanvas(800, 500).parent('sketch');
	rectMode(CENTER);
	textAlign(CENTER);
	
	if (!levels) {
		gameOver();
	} else if (!levels[currentLevel]) {
		gameOver();
	} else {
		player = new Player(levels[currentLevel].player.pos_x, levels[currentLevel].player.pos_y, levels[currentLevel].player.width)
		
		platforms = levels[currentLevel].platforms.map(pf => new Platform(pf.pos_x, pf.pos_y, pf.width, pf.height, pf.rotation))
		
		coins = levels[currentLevel].coins.map(coin => new Coin(coin.pos_x, coin.pos_y))
	}
}

function draw() {

	if (y === 50) {
		if (!slider) {
			createP("Move with Arrow keys: ⬅ ⬆ ➡").parent("instructions")
			createP("Fall through platforms: Hold ⬆ or ⬇").parent("instructions")
			createP("Collect all coins to progress to the next level.").parent("instructions")
			createP("Volume Slider").parent("instructions")
			slider = createSlider(0, 1, 0.03, 0.01)
		}
		song.loop();
	} 
	else if (currentLevel === 0) {
		if (!newSlider) {
			newSlider = createSlider(0, 1, 0.20, 0.01)
			lvlSong.loop();
		}
	}
	if (slider) song.setVolume(slider.value())
	if (newSlider) lvlSong.setVolume(newSlider.value())

	switch(currentLevel) {
		case 0:	levelOne(); break;
		case 1:	levelTwo(); break;
		case 2:	levelThree(); break;
		case 3:	levelFour(); break;
		case 4:	levelFive(); break;
		case 5: levelSix(); break;
		case 6: levelSeven(); break;
		case 7: levelEight(); break;
		case 8: levelNine(); break;
		case 9: levelTen(); break;
		case 10: splash(); break;
		case 11: welcome(); break;
		case 12: gameOver(); break;
		default: gameOver(); break;
	}
}
 
function welcome() {

	background("black");
	launchGame.hide();
	y > 50 ? y : y += 2
	image(titleImg, 50, y, 700, 300);
	
	if (y === 52 && playButton === undefined){
		textSize(24)
		playButton = createButton("PLAY").parent('sketch').addClass('play-btn')
		playButton.mousePressed(playBtn)
	}
	
}

function playBtn() {
	currentLevel = 0;
	song.stop();
	slider.hide();
	setup();
}

function splash() {
	if (launchGame === undefined) {
		textSize(24)
		launchGame = createButton("LAUNCH").parent('sketch').addClass('launch-btn')
		launchGame.mousePressed(launchBtn)
	}
}

function launchBtn() {
	currentLevel = 11;
}

function levelLogic() {
	backDrop();
	player.display();
	platforms.forEach(pf => pf.display())
	buttonPressed();
	coins.forEach(coin => coin.display())
	player.gravity();

	platforms.forEach(pf => player.collide(pf));
	for (let i = coins.length-1; i >= 0; i--) {
		if (coins[i].collide(player)) {
			coins.splice(i, 1)
		}
		beatLevel();
	}
}

function beatLevel() {
	if (coins.length === 0) {
		if (currentLevel === 9) {
			gameComplete();
		} else {
			currentLevel += 1
			setup();
		}
	}
}

function backDrop() {
	background(130, 210, 240);
	noStroke();
	fill(100, 200, 75);
	rect(width/2, 450, width, 100);
	noFill();
}

function buttonPressed() {
	player.move();
	player.jump();
}

function levelOne() {
	if (playButton) playButton.hide();
	levelLogic()
}

function levelTwo() {
	levelLogic()
}

function levelThree() {
	levelLogic()
}

function levelFour() {
	levelLogic()
}

function levelFive() {
	levelLogic()
}

function levelSix() {
	levelLogic()
}

function levelSeven() {
	levelLogic()
}

function levelEight() {
	levelLogic()
}

function levelNine() {
	levelLogic()
}

function levelTen() {
	levelLogic()
}

function gameOver() {
	if (playButton) playButton.show()
}

function gameComplete() {
}