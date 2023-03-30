//
var GameOver_0 = false;
//
var keyState_0 = {};
//
var menu_0 = 1;

var Xpos_0 = 0;
var Ypos_0 = 0;

//переменные для персонажа
var health_player_0 = [1, 1, 1, 1, 1];
var angle_0 = 0;

var fps_0 = 120;
//разница музыки в меню и во время игры
var fon_0 = false;
var game_0 = false;

//переменные для создания врагов
var enemys_0 = [];
var many_0 = -1;
var angle_01 = 0;
//переменные для оружия
var bullets_0 = [];
var [pulka, popka] = [0, 0];
var dx_0 = 0;
var dy_0 = 0;
var time_0 = 0;
var angle_02 = 0;
//
var [countenemy_0,bulcount_0]=[many_0, 1];

//координаты персонажа для поворота врага
var [mouseX_0,mouseY_0] = [0,0];
//
var Check_enemy = 0;

//переменные для показа таймера
var [msec, sec, min, hour] = [0, 0 ,0, 0];
var indx = 0;
//првоерка смерти
var dead=0;
//защита от двойного нажатия
var click_rec=0;


(function() {
$(document).ready(function () {
    
    
    const okno_tg = document.querySelector('#window_2'); 
    
    $(".menu").click(menu_tg);
    
        class Enemy_tg{
            constructor(){
                this.top;
                this.left;
                this.width = 60;
                this.height = 60;
                this.position = "absolute";
                this.transform ='rotate(' + 0 + 'deg)';
                
                this.visual_0 = document.createElement("div");
                const visual_0 = this.visual_0;
                
                visual_0.setAttribute("style", "background-image:" + s);
                visual_0.classList.add('enemy_0');
                visual_0.style.top = this.top + 'px';
                visual_0.style.left = this.left + 'px';
                visual_0.style.width = this.width+"px";
                visual_0.style.height = this.height+"px";
                visual_0.style.position = this.position;
                visual_0.style.transform = this.transform;

                okno_tg.appendChild(visual_0);
            }
        }
        
        class Bullet_tg{
            constructor(){
                this.top;
                this.left;
                this.transform = 'rotate(' + 0 + 'deg)';
                this.width = 10;
                this.height = 30;
                this.position = "absolute";
                this.visual_02 = document.createElement("div");
                const visual_02 = this.visual_02;
                visual_02.setAttribute("style", "background-image:" +"url(image/bullet.png)");
                visual_02.classList.add('bullet_0');
                visual_02.style.top = this.top+"px";
                visual_02.style.left = this.left+"px";
                visual_02.style.width = this.width+"px";
                visual_02.style.height = this.height+"px";
                visual_02.style.position = this.position;
                visual_02.style.transform = this.transform;
                okno_tg.appendChild(visual_02);
            }
        }
        
        $("#starttime").click(starttime);
        $("html").mousemove(gunmove_tg);
        $(".restart_tg").click(restart_tg);
        $(".continue").click(continue_tg);
        $("#start_tg").click(start_tg);
        $("#reiting_tg").click(show_reiting);
        $("#back_menu").click(back_menu);
        $("#null_table_reiting").click(null_table);

        function show_reiting(){
        	click_rec++;
        	if(click_rec==1){
				let dar=$("#pred_start_tg p").html();
				if(localStorage.getItem(1)!=null) $("#pred_start_tg p").html(dar+"Лидеры локальной игры"+'<br>'+"1. "+localStorage.getItem(1)+'<br>');
				else if(localStorage.getItem(1)==null) $("#pred_start_tg p").html(dar+'<br>'+"Нет результатов");
				if(localStorage.getItem(2)!=null) $("#pred_start_tg p").html(dar+"Лидеры локальной игры"+'<br>'+"1. "+localStorage.getItem(1)+'<br>'+"2. "+localStorage.getItem(2)+'<br>');
				if(localStorage.getItem(3)!=null) $("#pred_start_tg p").html(dar+"Лидеры локальной игры"+'<br>'+"1. "+localStorage.getItem(1)+'<br>'+"2. "+localStorage.getItem(2)+'<br>'+"3. "+localStorage.getItem(3)+'<br>');
				if(localStorage.getItem(4)!=null) $("#pred_start_tg p").html(dar+"Лидеры локальной игры"+'<br>'+"1. "+localStorage.getItem(1)+'<br>'+"2. "+localStorage.getItem(2)+'<br>'+"3. "+localStorage.getItem(3)+'<br>'+"4. "+localStorage.getItem(4)+'<br>');
				if(localStorage.getItem(5)!=null) $("#pred_start_tg p").html(dar+"Лидеры локальной игры"+'<br>'+"1. "+localStorage.getItem(1)+'<br>'+"2. "+localStorage.getItem(2)+'<br>'+"3. "+localStorage.getItem(3)+'<br>'+"4. "+localStorage.getItem(4)+'<br>'+"5. "+localStorage.getItem(5)+'<br>');
	        }
	    }

	    function null_table(){
	    	localStorage.clear();
	    }

        function back_menu(){
        	$("#menugame").show();
			$("#pred_start_tg").hide();
			$("#pred_start_tg p").html("");
			$("body").css("backgroundColor","rgb()");
            $("body").css("backgroundImage","url(image/Foto.png)");
            click_rec=0;
        }
        
        function starttime() {
	        $("#menugame").hide();
			$("#pred_start_tg").show();
			$("body").css("backgroundImage","url(image/fontproj.gif)");
        };

        function random_name(length) {
		    var result = '';
		    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		    var charactersLength = characters.length;
		    for ( var i = 0; i < length; i++ ) {
		      	result += characters.charAt(Math.floor(Math.random() * charactersLength));
		   	}
		   	return result;
		}

        function start_tg(){
	        $("#pred_start_tg").hide();
	        $("#pred_start_tg p").html("");
	//		audioElement.setAttribute('src', 'music/Game1.mp3');
	//		audioElement.volume=document.getElementById("volume").value/100;
	//		audioElement.play();
			document.getElementById('hp_0').value=100;
			$("body").css("backgroundColor","rgb(50,50,50)");
			$("body").css("backgroundImage","url()");
			$("#window_2>h4").text(document.getElementById('hp_0').value);
			$("#window_2").css("backgroundImage","url(image/map4.jpg)");
			$("#window_2").show();
			$("#player_0").show();
			$("#player_0").css({
				"top": 325+"px",
				"left": 325+"px"
			});
                
	        indx = setInterval(timer_tg, 10);
	        click_rec=0;
	//		win=1;
	//		game=true;
	//		fon=false;

			if(menu_0==1){
	                    GameOver_0=false;
	                    for (var i = 0; i < enemys_0.length; i++) {
	                            popka = enemys_0[i].visual_0;
	                            popka.classList.remove("enemy_0");
	                            popka.remove();
	                    }
	                    enemys_0.length = 0;
	                    menu_0 = 0;
			}
			createenemys_tg();
			gameloop_tg();
        }
        
        function continue_tg(){
            GameOver_0 = false;
            gameloop_tg();
            $("#restart").hide();
            if(countenemy_0!=0) createenemys_tg();
            indx = setInterval(timer_tg, 10);
	}
        
        function menu_tg(){
//            audioElement.setAttribute('src', 'music/Fon1.mp3');
//            audioElement.volume=document.getElementById("volume").value/100;
//            audioElement.play();
            $("body").css("backgroundColor","rgb()");
            $("body").css("backgroundImage","url(image/Foto.png)");
            $("#menugame").show();
            $("#window_2").hide();
            $("#restart").hide();
            $(".settings").hide();
            $("#winner").hide();
            
            sex_0 = "";
            Check_enemy = 0;
            countenemy_0 = many_0;
            menu_0 = 1;
            game_0 = false;
            fon_0 = true;
            
            reiting();

            clearInterval(indx);
            hour = 0;
            min = 0;
            sec = 0;
            msec = 0;
	};
        
        //рестарт игры при смерти
	function restart_tg(){
		$("#restart").hide();
                
		GameOver_0 = false;
                
		for (var i = 0; i < enemys_0.length; i++) {
			popka = enemys_0[i].visual_0;
			popka.classList.remove("enemy_0");
			popka.remove();
		}
		if(dead==1){
        	reiting();
        }

        clearInterval(indx);
        hour = 0;
        min = 0;
        sec = 0;
        msec = 0;
                
		sex_0 = "";
		//enemy_0 = 0;
		countenemy_0 = many_0;
		enemys_0.length = 0;
		if($(".name_player").val()=="") $(".name_player").val("Введите имя!");
		else
			start_tg();
	};
        
        function createenemys_tg(){
            temi_0 = setInterval(function(){
                let newEnemy;
                let rand = parseInt(Math.random()*3)+1;
                
                if(countenemy_0==0){
                    sex_0 = "end";
                    clearInterval(temi_0);
                }
                else{
                    s = "url(image/enemy"+rand+".gif)";
                    newEnemy = new Enemy_tg();
                    newEnemy.top = Math.random()*($("#window_2").height()-100);
                    newEnemy.left = Math.random()*($("#window_2").width()-100);
                    enemys_0.push(newEnemy);
                    countenemy_0--;
                }   
            },1000);
	};
        
        function createbul_tg(){
		for(let i=0; i<bulcount_0; i++){
			let newBul = new Bullet_tg();
			newBul.top = parseInt($("#player_0").css("top"))+15;
			newBul.left = parseInt($("#player_0").css("left"))+25;
			bullets_0.push(newBul);
		}
	}
        
        
        function gameloop_tg(e){
		if(!GameOver_0){
			if (keyState_0[38] || keyState_0[87]) {
				if(parseInt($("#player_0").css("top"))>0){
					$("#player_0").css("top", function(index, old) {return parseInt(old) -step + "px"});
				}
			}
			if (keyState_0[40] || keyState_0[83]) {
				if(parseInt($("#player_0").css("top"))<$("#window_2").height()-60){
					$("#player_0").css("top", function(index, old) {return parseInt(old) +step + "px"});
				}
			}
			if (keyState_0[37] || keyState_0[65]){
				if(parseInt($("#player_0").css("left"))>0){
					$("#player_0").css("left", function(index, old) {return parseInt(old) -step + "px"});
				}
			}
			if (keyState_0[39] || keyState_0[68]){
				if(parseInt($("#player_0").css("left"))<$("#window_2").width()-60){
					$("#player_0").css("left", function(index, old) {return parseInt(old) +step + "px"});
				}
			}
			if(keyState_0[116]){
				location.reload();
			}
			if(keyState_0[192]){                                
                            clearInterval(indx);
                            GameOver_0 = true;
                            $("#restart>h3").hide();
                            $("#restart").show();
                            $(".continue").show();
                            $(".restart").hide();
                            $(".restart_coop").hide();
                            $(".restart_tg").show();
                            clearInterval(temi_0);
			}
			//отвечает за поворот персонажа
			angle_0 = Math.atan2(Xpos_0 - $("#player_0").offset().left-25, -(Ypos_0 - $("#player_0").offset().top-35)) * (180 / Math.PI);
			$("#player_0").css({'transform': 'rotate(' + angle_0 + 'deg)'});

			// Ищет координаты игрока
			var offset = $('#window_2').offset();
			mouseX_0 = parseInt($("#player_0").css("left"));
			mouseY_0 = parseInt($("#player_0").css("top"));
			         
			moverotateenemys_tg();

			//$("#window_2>h3").html("Осталось "+countenemy_0);

			$("#window_2>h4").text(parseInt(document.getElementById('hp_0').value));
			setTimeout(gameloop_tg, 1000/fps_0);
		}
	};
        
        window.addEventListener('click', function(e) {
		if (!GameOver_0) {
			clearInterval(time_0);
			angle_02 = angle_0;
			//вычисляется расстояние для пули
			dx_0 = Math.cos((angle_02-90)*(Math.PI/180));
			dy_0 = Math.sin((angle_02-90)*(Math.PI/180));

			if(bullets_0[0]!= undefined){
				pulka.classList.remove("bullet_0");
				pulka.remove();
				bullets_0.pop();
			}

			createbul_tg();
			time_0 = setInterval(bulmove_tg, 1000/fps_0);
		}	
	});
        
        function deleteenemys_tg(obj, id, bullets){
			return((bullets[0].top>=obj[id].top && bullets[0].top<=obj[id].top+60 && bullets[0].left>=obj[id].left && bullets[0].left<=obj[id].left+60)||
					(bullets[0].top>=obj[id].top && bullets[0].top<=obj[id].top+60 && bullets[0].left>=obj[id].left && bullets[0].left<=obj[id].left+60 && bullets[0].left+10>=obj[id].left && bullets[0].left+10<=obj[id].left+60)||
					(bullets[0].left+10>=obj[id].left && bullets[0].left+10<=obj[id].left+60 && bullets[0].top>=obj[id].top && bullets[0].top<=obj[id].top+60)||
					(bullets[0].left+10>=obj[id].left && bullets[0].left+10<=obj[id].left+60 && bullets[0].top>=obj[id].top && bullets[0].top<=obj[id].top+60 && bullets[0].top+30>=obj[id].top && bullets[0].top+30<=obj[id].top+60)||
					(bullets[0].top+30>=obj[id].top && bullets[0].top+30<=obj[id].top+60 && bullets[0].left+10>=obj[id].left && bullets[0].left+10<=obj[id].left+60)||
					(bullets[0].top+30>=obj[id].top && bullets[0].top+30<=obj[id].top+60 && bullets[0].left+10>=obj[id].left && bullets[0].left+10<=obj[id].left+60 && bullets[0].left>=obj[id].left && bullets[0].left<=obj[id].left+60)||
					(bullets[0].left>=obj[id].left && bullets[0].left<=obj[id].left+60 && bullets[0].top+30>=obj[id].top && bullets[0].top+30<=obj[id].top+60)||
					(bullets[0].left>=obj[id].left && bullets[0].left<=obj[id].left+60 && bullets[0].top+30>=obj[id].top && bullets[0].top+30<=obj[id].top+60 && bullets[0].top>=obj[id].top && bullets[0].top<=obj[id].top+60))
	};
        
	function disance_tg(x,y) {
	    return (Math.sqrt(((x - $("#player_0").offset().left-150) ** 2) + ((y - $("#player_0").offset().top-60) ** 2))/200);
	};
        
	function bulmove_tg() {
         	if(bullets_0[0]!= undefined){
				for(let i=0;i<bullets_0.length;i++){
					pulka = bullets_0[i].visual_02;
					
					bullets_0[i].left += 10*dx_0;
					bullets_0[i].top += 10*dy_0;

					pulka.style.left = bullets_0[i].left + "px";
					pulka.style.top = bullets_0[i].top + "px";

					pulka.style.transform='rotate(' + angle_02 + 'deg)';

					if(disance_tg(bullets_0[i].left, bullets_0[i].top)>4){
						pulka.classList.remove("bullet_0");
						pulka.remove();
						bullets_0.pop();
					}
				}
			}
	};
        
        //проверка коснулся ли враг игрока
	function deletehp_tg(obj, id){
            return((parseInt($("#player_0").css("top"))>=obj[id].top && parseInt($("#player_0").css("top"))<=obj[id].top+60 && parseInt($("#player_0").css("left"))>=obj[id].left && parseInt($("#player_0").css("left"))<=obj[id].left+60)||
                    (parseInt($("#player_0").css("top"))>=obj[id].top && parseInt($("#player_0").css("top"))<=obj[id].top+60 && parseInt($("#player_0").css("left"))>=obj[id].left && parseInt($("#player_0").css("left"))<=obj[id].left+60 && parseInt($("#player_0").css("left"))+60>=obj[id].left && parseInt($("#player_0").css("left"))+60<=obj[id].left+60)||
                    (parseInt($("#player_0").css("left"))+60>=obj[id].left && parseInt($("#player_0").css("left"))+60<=obj[id].left+60 && parseInt($("#player_0").css("top"))>=obj[id].top && parseInt($("#player_0").css("top"))<=obj[id].top+60)||
                    (parseInt($("#player_0").css("left"))+60>=obj[id].left && parseInt($("#player_0").css("left"))+60<=obj[id].left+60 && parseInt($("#player_0").css("top"))>=obj[id].top && parseInt($("#player_0").css("top"))<=obj[id].top+60 && parseInt($("#player_0").css("top"))+60>=obj[id].top && parseInt($("#player_0").css("top"))+60<=obj[id].top+60)||
                    (parseInt($("#player_0").css("top"))+60>=obj[id].top && parseInt($("#player_0").css("top"))+60<=obj[id].top+60 && parseInt($("#player_0").css("left"))+60>=obj[id].left && parseInt($("#player_0").css("left"))+60<=obj[id].left+60)||
                    (parseInt($("#player_0").css("top"))+60>=obj[id].top && parseInt($("#player_0").css("top"))+60<=obj[id].top+60 && parseInt($("#player_0").css("left"))+60>=obj[id].left && parseInt($("#player_0").css("left"))+60<=obj[id].left+60 && parseInt($("#player_0").css("left"))>=obj[id].left && parseInt($("#player_0").css("left"))<=obj[id].left+60)||
                    (parseInt($("#player_0").css("left"))>=obj[id].left && parseInt($("#player_0").css("left"))<=obj[id].left+60 && parseInt($("#player_0").css("top"))+60>=obj[id].top && parseInt($("#player_0").css("top"))+60<=obj[id].top+60)||
                    (parseInt($("#player_0").css("left"))>=obj[id].left && parseInt($("#player_0").css("left"))<=obj[id].left+60 && parseInt($("#player_0").css("top"))+60>=obj[id].top && parseInt($("#player_0").css("top"))+60<=obj[id].top+60 && parseInt($("#player_0").css("top"))>=obj[id].top && parseInt($("#player_0").css("top"))<=obj[id].top+60))
		}
        
        //движение и поворот врагов
	function moverotateenemys_tg(e){
            for(var i=0; i<enemys_0.length; i++){

                angle_01 = Math.atan2($("#player_0").offset().left-15 - enemys_0[i].left-133, -($("#player_0").offset().top-15 - enemys_0[i].top-43)) * (180 / Math.PI);
                popka = enemys_0[i].visual_0;

                if(bullets_0[0]!= undefined)
                    pulka = bullets_0[0].visual_02;

                if(!deletehp_tg(enemys_0, i)){
                        enemys_0[i].left += (mouseX_0 - enemys_0[i].left) / 100;
                        enemys_0[i].top += (mouseY_0 - enemys_0[i].top) / 100;
                }

                popka.style.left = enemys_0[i].left + "px";
                popka.style.top = enemys_0[i].top + "px";

                popka.style.transform = 'rotate(' + angle_01 + 'deg)';

                if(deletehp_tg(enemys_0, i)) hpbar_tg();
                
                if(bullets_0[0]!= undefined){
                    if(deleteenemys_tg(enemys_0, i, bullets_0)){
                        popka.classList.remove("enemy_0");
                        popka.remove();
                        enemys_0[i].top=-30;
                        enemys_0[i].left=-30;
                        enemys_0.splice(i,1);

                        pulka.classList.remove("bullet_0");
                        pulka.remove();
                        bullets_0.pop();
                    }
                }
            }
        };
        
        function gameover_tg(){
            GameOver_0 = true;
            $(".continue").hide();
            $("#restart>h3").show();
            $("#restart").show();
            $(".restart").hide();
            $(".restart_coop").hide();
            $(".restart_tg").show();
            $(".name_player").show();
            
            dead=1;
            
            clearInterval(temi_0);
            clearInterval(indx);
	};
        
        function hpbar_tg(){
            document.getElementById('hp_0').value-=0.05;
            if(document.getElementById('hp_0').value==0){
                gameover_tg();
            }
	}
        
        function gunmove_tg(event){
		Xpos_0 = event.pageX;
		Ypos_0 = event.pageY;
	};
        
        window.addEventListener('keydown', function(e) {
	    e.preventDefault();
	    keyState_0[e.keyCode || e.which] = true;
	}, true);

	window.addEventListener('keyup', function(e) {
		e.preventDefault();
	   	keyState_0[e.keyCode || e.which] = false;
	}, true);
        
        //Счетчик времени
        function timer_tg(){
            $("#window_2 h3").html(hour+":"+min+":"+sec+":"+msec);
            msec++;
            if(msec==99){
                    sec++;
                    msec = 0;
            }
            if(sec==59){
                    min++;
                    sec = 0;
            }
            if(min==59){
                    hour++
                    min = 0;
            }
        }
        //рейтинг режима на время
        function reiting() {
			valve=$("#window_2 h3").html().split(":");

			valv=parseInt(valve[3])+parseInt(valve[2])*100+parseInt(valve[1])*100*60;

			if(localStorage.getItem(5)!=null){
				a1=localStorage.getItem(1).split(":");
				a2=localStorage.getItem(2).split(":");
				a3=localStorage.getItem(3).split(":");
				a4=localStorage.getItem(4).split(":");
				a5=localStorage.getItem(5).split(":");

				ab1=parseInt(a1[3])+parseInt(a1[2])*100+parseInt(a1[1])*100*60;
				ab2=parseInt(a2[3])+parseInt(a2[2])*100+parseInt(a2[1])*100*60;
				ab3=parseInt(a3[3])+parseInt(a3[2])*100+parseInt(a3[1])*100*60;
				ab4=parseInt(a4[3])+parseInt(a4[2])*100+parseInt(a4[1])*100*60;
				ab5=parseInt(a5[3])+parseInt(a5[2])*100+parseInt(a5[1])*100*60;

				if(valv>ab5 && valv<ab4){
					localStorage.setItem(5,random_name(6)+" "+$("#window_2 h3").html());
				}
				if(valv>ab4 && valv<ab3){
					localStorage.setItem(5,localStorage.getItem(4));
					localStorage.setItem(4,random_name(6)+" "+$("#window_2 h3").html());
				}
				if(valv>ab3 && valv<ab2){
					localStorage.setItem(5,localStorage.getItem(4));
					localStorage.setItem(4,localStorage.getItem(3));
					localStorage.setItem(3,random_name(6)+" "+$("#window_2 h3").html());
				}
				if(valv>ab2 && valv<ab1){
					localStorage.setItem(5,localStorage.getItem(4));
					localStorage.setItem(4,localStorage.getItem(3));
					localStorage.setItem(3,localStorage.getItem(2));
					localStorage.setItem(2,random_name(6)+" "+$("#window_2 h3").html());
				}
				if(valv>ab1){
					localStorage.setItem(5,localStorage.getItem(4));
					localStorage.setItem(4,localStorage.getItem(3));
					localStorage.setItem(3,localStorage.getItem(2));
					localStorage.setItem(2,localStorage.getItem(1));
					localStorage.setItem(1,random_name(6)+" "+$("#window_2 h3").html());
				}
			}
			else if(localStorage.getItem(4)!=null){
				a1=localStorage.getItem(1).split(":");
				a2=localStorage.getItem(2).split(":");
				a3=localStorage.getItem(3).split(":");
				a4=localStorage.getItem(4).split(":");

				ab1=parseInt(a1[3])+parseInt(a1[2])*100+parseInt(a1[1])*100*60;
				ab2=parseInt(a2[3])+parseInt(a2[2])*100+parseInt(a2[1])*100*60;
				ab3=parseInt(a3[3])+parseInt(a3[2])*100+parseInt(a3[1])*100*60;
				ab4=parseInt(a4[3])+parseInt(a4[2])*100+parseInt(a4[1])*100*60;
			
				if(valv<ab4){
					localStorage.setItem(5,random_name(6)+" "+$("#window_2 h3").html());
				}
				if(valv>ab4 && valv<ab3){
					localStorage.setItem(5,localStorage.getItem(4));
					localStorage.setItem(4,random_name(6)+" "+$("#window_2 h3").html());
				}
				if(valv>ab3 && valv<ab2){
					localStorage.setItem(5,localStorage.getItem(4));
					localStorage.setItem(4,localStorage.getItem(3));
					localStorage.setItem(3,random_name(6)+" "+$("#window_2 h3").html());
				}
				if(valv>ab2 && valv<ab1){
					localStorage.setItem(5,localStorage.getItem(4));
					localStorage.setItem(4,localStorage.getItem(3));
					localStorage.setItem(3,localStorage.getItem(2));
					localStorage.setItem(2,random_name(6)+" "+$("#window_2 h3").html());
				}
				if(valv>ab1){
					localStorage.setItem(5,localStorage.getItem(4));
					localStorage.setItem(4,localStorage.getItem(3));
					localStorage.setItem(3,localStorage.getItem(2));
					localStorage.setItem(2,localStorage.getItem(1));
					localStorage.setItem(1,random_name(6)+" "+$("#window_2 h3").html());
				}
			}
			else if(localStorage.getItem(3)!=null){
				a1=localStorage.getItem(1).split(":");
				a2=localStorage.getItem(2).split(":");
				a3=localStorage.getItem(3).split(":");

				ab1=parseInt(a1[3])+parseInt(a1[2])*100+parseInt(a1[1])*100*60;
				ab2=parseInt(a2[3])+parseInt(a2[2])*100+parseInt(a2[1])*100*60;
				ab3=parseInt(a3[3])+parseInt(a3[2])*100+parseInt(a3[1])*100*60;

				if(valv<ab3){
					localStorage.setItem(4,random_name(6)+" "+$("#window_2 h3").html());
				}
				if(valv>ab3 && valv<ab2){
					localStorage.setItem(4,localStorage.getItem(3));
					localStorage.setItem(3,random_name(6)+" "+$("#window_2 h3").html());
				}
				if(valv>ab2 && valv<ab1){
					localStorage.setItem(4,localStorage.getItem(3));
					localStorage.setItem(3,localStorage.getItem(2));
					localStorage.setItem(2,random_name(6)+" "+$("#window_2 h3").html());
				}
				if(valv>ab1){
					localStorage.setItem(4,localStorage.getItem(3));
					localStorage.setItem(3,localStorage.getItem(2));
					localStorage.setItem(2,localStorage.getItem(1));
					localStorage.setItem(1,random_name(6)+" "+$("#window_2 h3").html());
				}
			}
			else if(localStorage.getItem(2)!=null){
				a1=localStorage.getItem(1).split(":");
				a2=localStorage.getItem(2).split(":");

				ab1=parseInt(a1[3])+parseInt(a1[2])*100+parseInt(a1[1])*100*60;
				ab2=parseInt(a2[3])+parseInt(a2[2])*100+parseInt(a2[1])*100*60;

				if(valv<ab2){
					localStorage.setItem(3,random_name(6)+" "+$("#window_2 h3").html());
				}
				if(valv>ab2 && valv<ab1){
					localStorage.setItem(3,localStorage.getItem(2));
					localStorage.setItem(2,random_name(6)+" "+$("#window_2 h3").html());
				}
				if(valv>ab1){
					localStorage.setItem(3,localStorage.getItem(2));
					localStorage.setItem(2,localStorage.getItem(1));
					localStorage.setItem(1,random_name(6)+" "+$("#window_2 h3").html());
				}
			}
			else if(localStorage.getItem(1)!=null){
				a1=localStorage.getItem(1).split(":");

				ab1=parseInt(a1[3])+parseInt(a1[2])*100+parseInt(a1[1])*100*60;

				if(valv<ab1){
					localStorage.setItem(2,random_name(6)+" "+$("#window_2 h3").html());
				}
				if(valv>ab1){
					localStorage.setItem(2,localStorage.getItem(1));
					localStorage.setItem(1,random_name(6)+" "+$("#window_2 h3").html());
				}
			}

			else {
				localStorage.setItem(1,random_name(6)+" "+$("#window_2 h3").html());
			}
    }

})
})();