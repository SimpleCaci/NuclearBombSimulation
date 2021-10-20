function setup() {
	createCanvas(800,600);
	 bomb_hei = 0;
	 bomb_x = 0;
	 trans = 255;
	 bg_color = 200;
	 drop = false;
	 drop_ready = false;
}
function mouseClicked() {
	if (!drop){
		bomb_x = mouseX-25;
		bomb_hei = mouseY-10;
		drop = true;
		trans = 255;
		bg_color = 200;
		drop_ready = false;
	}
}

function touchStarted() {
	if (!drop){
		bomb_x = mouseX-25;
		bomb_hei = mouseY-10;
		drop = true;
		trans = 255;
		bg_color = 200;
		drop_ready = false;
	}
}

function draw() {
	background(bg_color);	
	if (bomb_hei >= 600){
		if (!(trans <= 0)){
			trans /= 1.5
			fill(color(200,20,50,30/trans));
			ellipse(bomb_x+25,bomb_hei,200/trans,200/trans);
			fill(color(250,00,50,30/trans));
			ellipse(bomb_x+25,bomb_hei,500/trans,500/trans);
			fill(color(255,00,0,30/trans));
			ellipse(bomb_x+25,bomb_hei,800/trans,800/trans);
			if (trans <= 0.2){
				trans *= -2;
			}
		}
		if (trans <= 0){
			trans *= 1.5;
			fill(color((1*trans)-200,20,50,30));
			ellipse(bomb_x+25,bomb_hei,-200/trans,-200/trans);
			fill(color((1*trans)-100,00,50,30));
			ellipse(bomb_x+25,bomb_hei,-500/trans,-500/trans);
			fill(color((1*trans),00,0,30));
			ellipse(bomb_x+25,bomb_hei,-800/trans,-800/trans);
			bg_color = 0;

		}
	} else{
		if (drop){
			fill(color(20,200,50));
			rect(bomb_x,bomb_hei, 50, 20, 0, 5, 5, 0);
			bomb_hei += 2;
		}
	}
	if (bg_color == 0){
		alert("good enough")
	}
	if (!drop_ready){
		fill(color(20,200,50));
		rect(mouseX-25,mouseY-10, 50, 20, 0, 5, 5, 0);
	}
}