//таймер для движения пули
let time=0;
//кнопки клавиатуры
let keyState = {};
//количество пикселей для шага
let step=4;
//угол на который поворячивается игрок
//угол для врагов
//угол для пули
let [angle,angle1,angle2]=[0,0,0];
//координаты мышки
let [Xpos,Ypos] = [0,0];
//какая локация сейчас
let win=0;
//массивы врагов и пулей и их количество
let enemys=[];
let bullets=[];
let many=20;
let [countenemy,bulcount]=[many,1];
//нажал на клавишу мыши
let click=0;
//количество кадров в секунду
let fps=120;
//стили пулей
//стили врагов
let [bul,jopa]=[0,0];
//проверка конца иггры
let GameOver=false;
//проверка врагов для перехода на следующую локацию
let enemy=0;
//координаты персонажа для поворота врага
var [mouseX,mouseY] = [0,0];
//проверка для перехода на следующую локу
let sex="";
//аудио в игре
var audioElement=0;
//
let [readyfon,readygame]=[0,0];
//
let fon=false;
let game=false;
//база музыки в игре
var musicfon =["music/Fon1.mp3","music/Fon2.mp3", "music/Fon3.mp3"];
var musicgame=["music/Game1.mp3","music/Game2.mp3","music/Game3.mp3"];


(function() {

$(document).ready(function () {


	audioElement = document.createElement('audio');
    audioElement.setAttribute('src', musicfon[readyfon]);
    
    audioElement.addEventListener('ended', function() {
    	if(fon==true){
	    	if(readyfon>=2) readyfon=-1;
	    	readyfon++;
	    	audioElement.setAttribute('src', musicfon[readyfon]);
	    	audioElement.volume=document.getElementById("volume").value/100;
	        audioElement.play();
    	}
    	if(game==true){
    		if(readygame>=2) readygame=-1;
	    	readygame++;
	    	audioElement.setAttribute('src', musicgame[readygame]);
	    	audioElement.volume=document.getElementById("volume").value/100;
	        audioElement.play();
    	}
    }, false);
    
    /*audioElement.addEventListener("canplay",function(){
        $("#length").text("Duration:" + audioElement.duration + " seconds");
        $("#source").text("Source:" + audioElement.src);
        $("#status").text("Status: Ready to play").css("color","green");
    });*/
    
    /*audioElement.addEventListener("timeupdate",function(){
    	if(readyfon==2 && audioElement.currentTime>24){
			$("body").css("backgroundImage","url(image/fon.gif)");
			console.log(audioElement.currentTime);
		}
		else if(menu==1 && readyfon!=2) $("body").css("backgroundImage","url(image/Foto.png)");
		//console.log(audioElement.currentTime);
        //$("#currentTime").text("Current second:" + audioElement.currentTime);
    });*/
    
    $('#startgame').click(function() {
        audioElement.play();
        audioElement.volume=document.getElementById("volume").value/100;
    });

    $('#play').click(function() {
        audioElement.play();
    });

    $('#pause').click(function() {
        audioElement.pause();
    });
    
    $('#restartaudio').click(function() {
        audioElement.currentTime = 0;
    });

    $('#next').click(function() {
        if(readyfon>=2) readyfon=-1;
	    	readyfon++;
	    	audioElement.setAttribute('src', musicfon[readyfon]);
	    	audioElement.volume=document.getElementById("volume").value/100;
	        audioElement.play();
    });
    $('.nextmusic').click(function() {
        if(readygame>=2) readygame=-1;
	    	readygame++;
	    	audioElement.setAttribute('src', musicgame[readygame]);
	    	audioElement.volume=document.getElementById("volume").value/100;
	        audioElement.play();
    });

const okno = document.querySelector('#window1');

	//отслеживание нажатия кнопок на экране
	$("#startgame").click(start1);
	//процесс изменения надписи рейтинга

	$("#start").click(first1);
	$("#window1").mousemove(gunmove);
	$(".restart").click(restart);
	$(".menu").click(menu);
	$("#menuwinner").click(menu);
	$(".continue").click(Continue);
	$("#back").click(function(){
		$("body").css("backgroundColor","rgb()");
		$("body").css("backgroundImage","url(image/Foto.png)");
		audioElement.volume=document.getElementById("volume").value/100;
		$("#menugame").show();
		$("#window1").hide();
		$("#restart").hide();
		$(".settings").hide();
		menu=1;
	});
	$("#settings").click(settings);
	$("#volume").mousemove(function(){
		audioElement.volume=document.getElementById("volume").value/100;
		$(".audio>h5").text(document.getElementById("volume").value);
	});

	//вход в меню
	function start1(){
		$("#startwindow").hide();
		$("#game").show();
		document.documentElement.requestFullscreen();
		$("body").css("backgroundColor","rgb()");
		$("body").css("backgroundImage","url(image/Foto.png)");
		$(document).bind('contextmenu', function(e) {
				    e.stopPropagation();
				    e.preventDefault();
				    e.stopImmediatePropagation();
				    return false;
		});
		game=false;
		fon=true;
	}

	//Запуск игры
	function first1(){
		$("#menugame").hide();
		audioElement.setAttribute('src', 'music/Game1.mp3');
		audioElement.volume=document.getElementById("volume").value/100;
		audioElement.play();
		document.getElementById('hp').value=100;
		$("body").css("backgroundColor","rgb(50,50,50)");
		$("body").css("backgroundImage","url()");
		$("#window1>h4").text(document.getElementById('hp').value);
		$("#window1").css("backgroundImage","url(image/map1.png)");
		$("#window1").show();
		$("#player").show();
		$("#player").css({
			"top": 325+"px",
			"left": 325+"px"
		});
		win=1;
		game=true;
		fon=false;
		if(menu==1){
			GameOver=false;
			for (var i = 0; i < enemys.length; i++) {
				jopa=enemys[i].visual;
				jopa.classList.remove("enemy");
				jopa.remove();
			}
			enemys.length=0;
			menu=0;
		}
		createenemys();
		gameloop();
	}
	function Continue(){
		GameOver=false;
		gameloop();
		$("#restart").hide();
		if(countenemy!=0)
			createenemys();
	}
	//рестарт игры при смерти
	function restart(){
		$("#restart").hide();
		$("#transition").hide();
		GameOver=false;
		for (var i = 0; i < enemys.length; i++) {
			jopa=enemys[i].visual;
			jopa.classList.remove("enemy");
			jopa.remove();
		}
		sex="";
		enemy=0;
		countenemy=many;
		enemys.length=0;
		first1();
	}
	//переход в меню
	function menu(){
		audioElement.setAttribute('src', 'music/Fon1.mp3');
		audioElement.volume=document.getElementById("volume").value/100;
		audioElement.play();
		$("body").css("backgroundColor","rgb()");
		$("body").css("backgroundImage","url(image/Foto.png)");
		$("#menugame").show();
		$("#window1").hide();
		$("#restart").hide();
		$(".settings").hide();
		$("#transition").hide();
		$("#winner").hide();
		sex="";
		enemy=0;
		countenemy=many;
		menu=1;
		game=false;
		fon=true;
	}
	function settings(){
		$("body").css("backgroundColor","rgb(50,50,50)");
		$("body").css("backgroundImage","url()");
		$(".settings").show();
		$("#menugame").hide();
		menu=2;
	}

		//враг
		class Enemy{
			constructor(){
				this.top;
				this.left;
				this.width = 30;
				this.height = 30;
				this.position = "absolute";
				this.transform='rotate(' + 0 + 'deg)';
				//this.border="2px solid black";
				this.visual = document.createElement("div");
				const visual = this.visual;
				visual.setAttribute("style", "background-image:" + s);
	            visual.classList.add('enemy');
	            visual.style.top=this.top + 'px';
	            visual.style.left=this.left + 'px';
	            visual.style.width=this.width+"px";
	            visual.style.height=this.height+"px";
	            visual.style.position=this.position;
	            visual.style.transform=this.transform;
	            //visual.style.border=this.border;
	            okno.appendChild(visual);
			}
		}
		class Bullet{
			constructor(){
				this.top;
				this.left;
				this.transform='rotate(' + 0 + 'deg)';
				this.width=10;
				this.height=30;
				this.position = "absolute";
				this.visual2 = document.createElement("div");
				const visual2 = this.visual2;
				visual2.setAttribute("style", "background-image:" +"url(image/bullet.png)");
				visual2.classList.add('bullet');
	            visual2.style.top=this.top+"px";
	            visual2.style.left=this.left+"px";
	            visual2.style.width=this.width+"px";
	            visual2.style.height=this.height+"px";
	            visual2.style.position=this.position;
	            visual2.style.transform=this.transform;
	            okno.appendChild(visual2);
			}
		}
	function createenemys(){
			temi=setInterval(function(){
				let newEnemy;
				let rand=parseInt(Math.random()*3)+1;
				s = "url(image/enemy"+rand+".gif)";
				newEnemy = new Enemy();
				newEnemy.top=Math.random()*500;
				newEnemy.left=Math.random()*900;
				enemys.push(newEnemy);
				countenemy--;
				if(countenemy==0){
					sex="end";
					clearInterval(temi);
				}
			},200);
		/*for (var i = 0; i <countenemy; i++) {
			let rand=parseInt(Math.random()*2)+1;
			s = "url(image/enemy"+rand+".gif)";
			let newEnemy = new Enemy();
			newEnemy.top=Math.random()*500;
			newEnemy.left=Math.random()*900;
			enemys.push(newEnemy);
		}*/
	}
	function createbul(){
		for(let i=0; i<bulcount;i++){
			let newBul = new Bullet();
			newBul.top=parseInt($("#player").css("top"));
			newBul.left=parseInt($("#player").css("left"))+10;
			bullets.push(newBul);
		}
	}


	//Движение персонажа игры в каждый кадр
	function gameloop(e){
		if(!GameOver){
			if (keyState[38] || keyState[87]) {
				if(parseInt($("#player").css("top"))>0){
					$("#player").css("top", function(index, old) {return parseInt(old) -step + "px"});
				}
			}
			if (keyState[40] || keyState[83]) {
				if(parseInt($("#player").css("top"))<$("#window1").height()-30){
					$("#player").css("top", function(index, old) {return parseInt(old) +step + "px"});
				}
			}
			if (keyState[37] || keyState[65]){
				if(parseInt($("#player").css("left"))>0){
					$("#player").css("left", function(index, old) {return parseInt(old) -step + "px"});
				}
			}
			if (keyState[39] || keyState[68]){
				if(parseInt($("#player").css("left"))<$("#window1").width()-30){
					$("#player").css("left", function(index, old) {return parseInt(old) +step + "px"});
				}
			}
			if(keyState[116]){
				location.reload();
			}
			if(keyState[192]){
				GameOver=true;
				$("#restart>h3").hide();
				$("#restart").show();
				$(".continue").show();
                                $(".restart_coop").hide()
                                $(".restart_tg").hide();
                                $(".restart").show();
				clearInterval(temi);
			}
			//отвечает за поворот персонажа
			angle = Math.atan2(Xpos - $("#player").offset().left-12, -(Ypos - $("#player").offset().top-17)) * (180 / Math.PI);
			$("#player").css({'transform': 'rotate(' + angle + 'deg)'});

			// Ищет координаты игрока
			var offset = $('#window1').offset();
			mouseX = parseInt($("#player").css("left"));
			mouseY = parseInt($("#player").css("top"));
			         
			moverotateenemys();

			$("#window1>h3").html("Осталось "+countenemy);
			if(sex=="end" && enemys.length==0 && enemy==0 && countenemy==0){
				$("#transition").show();
				enemy=1;
			}
			if(parseInt($("#player").css("left"))>=$("#window1").width()-30 && win==1 && enemy==1){
				win=2;
				enemy=0;
				countenemy=many;
				$("#player").css({
					"top": 325+"px",
					"left": 325+"px"
				});
				$("#window1").css("backgroundImage","url(image/map2.png)");
				$("#transition").hide();
				createenemys();
				sex="";
			}
			if(parseInt($("#player").css("left"))>=$("#window1").width()-30 && win==2 && enemy==1){
				win=3;
				enemy=0;
				countenemy=many;
				$("#player").css({
					"top": 325+"px",
					"left": 325+"px"
				});
				$("#window1").css("backgroundImage","url(image/map3.png)");
				$("#transition").hide();
				createenemys();
				sex="";
			}
			if(parseInt($("#player").css("left"))>=$("#window1").width()-30 && win==3 && enemy==1){
				win=4;
				enemy=0;
				countenemy=many;
				$("#player").css({
					"top": 325+"px",
					"left": 325+"px"
				});
				$("#window1").css("backgroundImage","url(image/коты.png)");
				$("#transition").hide();
				createenemys();
				sex="";
			}
			if(parseInt($("#player").css("left"))>=$("#window1").width()-30 && win==4 && enemy==1){
				$("#winner").show();
				GameOver=true;
				clearInterval(temi);
			}

			$("#window1>h4").text(parseInt(document.getElementById('hp').value));
			setTimeout(gameloop,1000/fps);
		}
	}
	function gameover(){
		GameOver=true;
		$(".continue").hide();
		$("#restart>h3").show();
		$("#restart").show();
                $(".restart_coop").hide();
                $(".restart_tg").hide();
                $(".restart").show();
		clearInterval(temi);
	}
	//
	window.addEventListener('click', function(e) {
		if (win!=0 && !GameOver) {
			clearInterval(time);
			angle2=angle;
			//вычисляется расстояние для пули
			dx=Math.cos((angle2-90)*(Math.PI/180));
			dy=Math.sin((angle2-90)*(Math.PI/180));

			if(bullets[0]!= undefined){
				bul.classList.remove("bullet");
				bul.remove();
				bullets.pop();
			}

			createbul();
			time = setInterval(bulmove,1000/fps);
		}	
	});
	function disance(x,y) {
	    return (Math.sqrt(((x - $("#player").offset().left-150) ** 2) + ((y - $("#player").offset().top-60) ** 2))/200);
	}
	function bulmove() {
         	if(bullets[0]!= undefined){
				for(let i=0;i<bullets.length;i++){
					bul=bullets[i].visual2;
					
					bullets[i].left += 10*dx;
					bullets[i].top += 10*dy;

					bul.style.left = bullets[i].left + "px";
					bul.style.top = bullets[i].top + "px";

					bul.style.transform='rotate(' + angle2 + 'deg)';

					if(disance(bullets[i].left, bullets[i].top)>4){
						bul.classList.remove("bullet");
						bul.remove();
						bullets.pop();
					}
				}
			}
	}
	//проверка коснулся ли враг игрока
	function deletehp(obj,id){
			return((parseInt($("#player").css("top"))>=obj[id].top && parseInt($("#player").css("top"))<=obj[id].top+30 && parseInt($("#player").css("left"))>=obj[id].left && parseInt($("#player").css("left"))<=obj[id].left+30)||
					(parseInt($("#player").css("top"))>=obj[id].top && parseInt($("#player").css("top"))<=obj[id].top+30 && parseInt($("#player").css("left"))>=obj[id].left && parseInt($("#player").css("left"))<=obj[id].left+30 && parseInt($("#player").css("left"))+30>=obj[id].left && parseInt($("#player").css("left"))+30<=obj[id].left+30)||
					(parseInt($("#player").css("left"))+30>=obj[id].left && parseInt($("#player").css("left"))+30<=obj[id].left+30 && parseInt($("#player").css("top"))>=obj[id].top && parseInt($("#player").css("top"))<=obj[id].top+30)||
					(parseInt($("#player").css("left"))+30>=obj[id].left && parseInt($("#player").css("left"))+30<=obj[id].left+30 && parseInt($("#player").css("top"))>=obj[id].top && parseInt($("#player").css("top"))<=obj[id].top+30 && parseInt($("#player").css("top"))+30>=obj[id].top && parseInt($("#player").css("top"))+30<=obj[id].top+30)||
					(parseInt($("#player").css("top"))+30>=obj[id].top && parseInt($("#player").css("top"))+30<=obj[id].top+30 && parseInt($("#player").css("left"))+30>=obj[id].left && parseInt($("#player").css("left"))+30<=obj[id].left+30)||
					(parseInt($("#player").css("top"))+30>=obj[id].top && parseInt($("#player").css("top"))+30<=obj[id].top+30 && parseInt($("#player").css("left"))+30>=obj[id].left && parseInt($("#player").css("left"))+30<=obj[id].left+30 && parseInt($("#player").css("left"))>=obj[id].left && parseInt($("#player").css("left"))<=obj[id].left+30)||
					(parseInt($("#player").css("left"))>=obj[id].left && parseInt($("#player").css("left"))<=obj[id].left+30 && parseInt($("#player").css("top"))+30>=obj[id].top && parseInt($("#player").css("top"))+30<=obj[id].top+30)||
					(parseInt($("#player").css("left"))>=obj[id].left && parseInt($("#player").css("left"))<=obj[id].left+30 && parseInt($("#player").css("top"))+30>=obj[id].top && parseInt($("#player").css("top"))+30<=obj[id].top+30 && parseInt($("#player").css("top"))>=obj[id].top && parseInt($("#player").css("top"))<=obj[id].top+30))
	}
	//проверка коснулась ли пуля врага
	function deleteenemys(obj,id,bullets){
			return((bullets[0].top>=obj[id].top && bullets[0].top<=obj[id].top+30 && bullets[0].left>=obj[id].left && bullets[0].left<=obj[id].left+30)||
					(bullets[0].top>=obj[id].top && bullets[0].top<=obj[id].top+30 && bullets[0].left>=obj[id].left && bullets[0].left<=obj[id].left+30 && bullets[0].left+10>=obj[id].left && bullets[0].left+10<=obj[id].left+30)||
					(bullets[0].left+10>=obj[id].left && bullets[0].left+10<=obj[id].left+30 && bullets[0].top>=obj[id].top && bullets[0].top<=obj[id].top+30)||
					(bullets[0].left+10>=obj[id].left && bullets[0].left+10<=obj[id].left+30 && bullets[0].top>=obj[id].top && bullets[0].top<=obj[id].top+30 && bullets[0].top+30>=obj[id].top && bullets[0].top+30<=obj[id].top+30)||
					(bullets[0].top+30>=obj[id].top && bullets[0].top+30<=obj[id].top+30 && bullets[0].left+10>=obj[id].left && bullets[0].left+10<=obj[id].left+30)||
					(bullets[0].top+30>=obj[id].top && bullets[0].top+30<=obj[id].top+30 && bullets[0].left+10>=obj[id].left && bullets[0].left+10<=obj[id].left+30 && bullets[0].left>=obj[id].left && bullets[0].left<=obj[id].left+30)||
					(bullets[0].left>=obj[id].left && bullets[0].left<=obj[id].left+30 && bullets[0].top+30>=obj[id].top && bullets[0].top+30<=obj[id].top+30)||
					(bullets[0].left>=obj[id].left && bullets[0].left<=obj[id].left+30 && bullets[0].top+30>=obj[id].top && bullets[0].top+30<=obj[id].top+30 && bullets[0].top>=obj[id].top && bullets[0].top<=obj[id].top+30))
	}
	/*//чтобы враги не входилидруг в друга
	function Enymy_no_enemy(obj,id,jd){
			return((obj[id].top>=obj[jd].top && obj[id].top<=obj[jd].top+40 && obj[id].left>=obj[jd].left && obj[id].left<=obj[jd].left+40)||
					(obj[id].top>=obj[jd].top && obj[id].top<=obj[jd].top+40 && obj[id].left>=obj[jd].left && obj[id].left<=obj[jd].left+40 && obj[id].left+40>=obj[jd].left && obj[id].left+40<=obj[jd].left+40)||
					(obj[id].left+40>=obj[jd].left && obj[id].left+40<=obj[jd].left+40 && obj[id].top>=obj[jd].top && obj[id].top<=obj[jd].top+40)||
					(obj[id].left+40>=obj[jd].left && obj[id].left+40<=obj[jd].left+40 && obj[id].top>=obj[jd].top && obj[id].top<=obj[jd].top+40 && obj[id].top+40>=obj[jd].top && obj[id].top+40<=obj[jd].top+40)||
					(obj[id].top+40>=obj[jd].top && obj[id].top+40<=obj[jd].top+40 && obj[id].left+40>=obj[jd].left && obj[id].left+40<=obj[jd].left+40)||
					(obj[id].top+40>=obj[jd].top && obj[id].top+40<=obj[jd].top+40 && obj[id].left+40>=obj[jd].left && obj[id].left+40<=obj[jd].left+40 && obj[id].left>=obj[jd].left && obj[id].left<=obj[jd].left+40)||
					(obj[id].left>=obj[jd].left && obj[id].left<=obj[jd].left+40 && obj[id].top+40>=obj[jd].top && obj[id].top+40<=obj[jd].top+40)||
					(obj[id].left>=obj[jd].left && obj[id].left<=obj[jd].left+40 && obj[id].top+40>=obj[jd].top && obj[id].top+40<=obj[jd].top+40 && obj[id].top>=obj[jd].top && obj[id].top<=obj[jd].top+40))
	}
	//
	function NoMoveEnemy(enemy){
		let topcol=false;
		for (var i = 0; i < enemy.length-1; i++) {
			for (var j = i+1; j < enemy.length; j++) {
				console.log(i + " " + j);
				topcol = Enymy_no_enemy(enemy,i,j);
				if(topcol) break;	
			}
			if(topcol) break;
		}
		return(topcol);
	}*/
	//движение и поворот врагов
	function moverotateenemys(e){
			for(let i=0;i<enemys.length;i++){

				angle1 = Math.atan2($("#player").offset().left-15 - enemys[i].left-133, -($("#player").offset().top-15 - enemys[i].top-43)) * (180 / Math.PI);
				jopa=enemys[i].visual;

				if(bullets[0]!= undefined)
					bul=bullets[0].visual2;

				if(!deletehp(enemys,i)){
					enemys[i].left += (mouseX - enemys[i].left) / 100;
					enemys[i].top += (mouseY - enemys[i].top) / 100;
				}
				/*if(NoMoveEnemy(enemys)){
					enemys[i].left -= (mouseX - enemys[i].left)/50;
					enemys[i].top -= (mouseY - enemys[i].top)/50;
				}*/

				jopa.style.left = enemys[i].left + "px";
				jopa.style.top = enemys[i].top + "px";

				jopa.style.transform = 'rotate(' + angle1 + 'deg)';

				if(deletehp(enemys,i))
				{
					hpbar();
				}
				if(bullets[0]!= undefined){
					if(deleteenemys(enemys,i,bullets)){
						jopa.classList.remove("enemy");
						jopa.remove();
						enemys[i].top=-30;
						enemys[i].left=-30;
						enemys.splice(i,1);

						bul.classList.remove("bullet");
						bul.remove();
						bullets.pop();
					}
				}
				
			}
		}
	
	//изменение хп
	function hpbar(){
		document.getElementById('hp').value-=0.05;
		if(document.getElementById('hp').value==0){
			gameover();
		}
	}
	//координаты курсора
	function gunmove(event){
		Xpos = event.pageX;
		Ypos = event.pageY;
	}

	//отключает все кнопки клавиатуры на сайте
	window.addEventListener('keydown', function (e) {
	    e.preventDefault();
	    keyState[e.keyCode || e.which] = true;
	}, true);

	window.addEventListener('keyup', function (e) {
		e.preventDefault();
	   	keyState[e.keyCode || e.which] = false;
	}, true);
});

})();