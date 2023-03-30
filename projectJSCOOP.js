//проверка конца иггры
var GameOver_3 = false;

//кнопки клавиатуры
var keyState_3 = {};
//
var menu_3 = 1;

//координаты мышки
var Xpos_3 = 0;
var Ypos_3 = 0;

//переменные для персонажа
var health_player_0 = [1, 1, 1, 1, 1];
var angle_3_0a = 0;
var angle_3_0b = 0;

var fps_3 = 120;
//разница музыки в меню и во время игры
var fon_3 = false;
var game_3 = false;

//переменные для создания врагов
var enemys_3 = [];
var many_3 = 10;
var angle_3_1 = 0;
//переменные для оружия
var [pulka_a, pulka_b, vrag] = [0, 0, 0];
//player_a
var bullets_3_a = [];
var dx_3_a = 0;
var dy_3_a = 0;
var time_3_a = 0;
var angle_3_2a = 0;

var dist_a = 0;
//player_b
var bullets_3_b = [];
var dx_3_b = 0;
var dy_3_b = 0;
var time_3_b = 0;
var angle_3_2b = 0;

var dist_b = 0;

//
var [countenemy_3,bulcount_3]=[many_3, 1];

//координаты персонажа для поворота врага
var [mouseX_3_a,mouseY_3_a] = [0,0];
var [mouseX_3_b,mouseY_3_b] = [0,0];

var ayd_a = 0;
var ayd_b = 0;

//проверка врагов для перехода на следующую локацию
var Check_enemy_3 = 0;

//переменные для показа таймера
var [msec, sec, min, hour] = [0, 0 ,0, 0];
var indx = 0;

//
var sex_3 = "";
var win_3 = 1;

var proc=0;




(function() {
    $(document).ready(function () {
        
        document.body.style.overflow = "hidden"
        $("html").mousemove(gunmove_coop);
        
        $(".restart_coop").click(restart_coop);
        $(".continue").click(continue_coop);
        $("#startweb").click(startcoop);
        $("#back_menu_coop").click(back_menu_coop);
        $("#start_coop").click(start_coop);

        
        const okno_coop = document.querySelector('#window_3'); 
    
        $(".menu").click(menu_coop);
        $("#menuwinner").click(menu_coop);
    
        class Enemy_coop{
            constructor(){
                this.top;
                this.left;
                this.width = 60;
                this.height = 60;
                this.position = "absolute";
                this.transform ='rotate(' + 0 + 'deg)';
                
                this.visual_3 = document.createElement("div");
                const visual_3 = this.visual_3;
                
                visual_3.setAttribute("style", "background-image:" + s);
                visual_3.classList.add('enemy_3');
                visual_3.style.top = this.top + 'px';
                visual_3.style.left = this.left + 'px';
                visual_3.style.width = this.width+"px";
                visual_3.style.height = this.height+"px";
                visual_3.style.position = this.position;
                visual_3.style.transform = this.transform;

                okno_coop.appendChild(visual_3);
            }
        }
        
        class Bullet_coop{
            constructor(){
                this.top;
                this.left;
                this.transform = 'rotate(' + 0 + 'deg)';
                this.width = 10;
                this.height = 30;
                this.position = "absolute";
                this.visual_03 = document.createElement("div");
                const visual_03 = this.visual_03;
                visual_03.setAttribute("style", "background-image:" +"url(image/bullet.png)");
                visual_03.classList.add('bullet_3');
                visual_03.style.top = this.top+"px";
                visual_03.style.left = this.left+"px";
                visual_03.style.width = this.width+"px";
                visual_03.style.height = this.height+"px";
                visual_03.style.position = this.position;
                visual_03.style.transform = this.transform;
                okno_coop.appendChild(visual_03);
            }
        }
        function back_menu_coop(){
            $("#menugame").show();
            $("#pred_start_coop").hide();
            $("#pred_start_coop p").html("");
            $("body").css("backgroundColor","rgb()");
            $("body").css("backgroundImage","url(image/Foto.png)");
        }
        
        function start_coop() {
            $("#menugame").hide();
            $("#pred_start_coop").hide();
            
            
            document.getElementById('hp_a').value=100;
            document.getElementById('hp_b').value=100;
            
            $("body").css("backgroundColor","rgb(50,50,50)");
            $("body").css("backgroundImage","url()");
            
            $("#window_3>h4#a").text(document.getElementById('hp_a').value);
            $("#window_3>h4#b").text(document.getElementById('hp_b').value);
            
            $("#window_3").css("backgroundImage","url(image/map1.png)");
            $("#window_3").show();
            $("#player_a").show();
            $("#player_a").css({
                    "top": 325+"px",
                    "left": 325+"px"
            });
            $("#player_b").show();
            $("#player_b").css({
                    "top": 525+"px",
                    "left": 325+"px"
            });

            if(menu_3===1){
                GameOver_3 = false;
                for (var i = 0; i < enemys_3.length; i++) {
                        vrag = enemys_3[i].visual_3;
                        vrag.classList.remove("enemy_3");
                        vrag.remove();
                }
                enemys_3.length = 0;
                menu_3 = 0;
            }
            
            createenemys_coop();
            gameloop_coop();
        };
        
        function createenemys_coop(){
            temi_3 = setInterval(function(){
                let newEnemy;
                let rand = parseInt(Math.random()*3)+1;
                
                if(countenemy_3==0){
                    sex_3 = "end";
                    clearInterval(temi_3);
                }
                else{
                    s = "url(image/enemy"+rand+".gif)";
                    newEnemy = new Enemy_coop();
                    newEnemy.top = Math.random()*500;
                    newEnemy.left = Math.random()*900;
                    enemys_3.push(newEnemy);
                    countenemy_3--;
                }   
            },300);
	};
        
        function deleteenemys_coop(obj, id, bullets){
            return((bullets[0].top>=obj[id].top && bullets[0].top<=obj[id].top+60 && bullets[0].left>=obj[id].left && bullets[0].left<=obj[id].left+60)||
                            (bullets[0].top>=obj[id].top && bullets[0].top<=obj[id].top+60 && bullets[0].left>=obj[id].left && bullets[0].left<=obj[id].left+60 && bullets[0].left+10>=obj[id].left && bullets[0].left+10<=obj[id].left+60)||
                            (bullets[0].left+10>=obj[id].left && bullets[0].left+10<=obj[id].left+60 && bullets[0].top>=obj[id].top && bullets[0].top<=obj[id].top+60)||
                            (bullets[0].left+10>=obj[id].left && bullets[0].left+10<=obj[id].left+60 && bullets[0].top>=obj[id].top && bullets[0].top<=obj[id].top+60 && bullets[0].top+30>=obj[id].top && bullets[0].top+30<=obj[id].top+60)||
                            (bullets[0].top+30>=obj[id].top && bullets[0].top+30<=obj[id].top+60 && bullets[0].left+10>=obj[id].left && bullets[0].left+10<=obj[id].left+60)||
                            (bullets[0].top+30>=obj[id].top && bullets[0].top+30<=obj[id].top+60 && bullets[0].left+10>=obj[id].left && bullets[0].left+10<=obj[id].left+60 && bullets[0].left>=obj[id].left && bullets[0].left<=obj[id].left+60)||
                            (bullets[0].left>=obj[id].left && bullets[0].left<=obj[id].left+60 && bullets[0].top+30>=obj[id].top && bullets[0].top+30<=obj[id].top+60)||
                            (bullets[0].left>=obj[id].left && bullets[0].left<=obj[id].left+60 && bullets[0].top+30>=obj[id].top && bullets[0].top+30<=obj[id].top+60 && bullets[0].top>=obj[id].top && bullets[0].top<=obj[id].top+60))
	};
        
        //движение и поворот врагов
	function moverotateenemys_coop(e){
            for(var i=0; i<enemys_3.length; i++){

                if(document.getElementById('hp_a').value!=0){
                    dist_a = Math.sqrt( ((enemys_3[i].left -  mouseX_3_a) ** 2) + ((enemys_3[i].top -  mouseY_3_a) ** 2) ); 
                    ayd_a = "#"+document.getElementById('player_a').id;
                }
                else{
                    $("#player_a").hide();
                    dist_a = 10000;
                }
                
                if(document.getElementById('hp_b').value!=0){
                    dist_b = Math.sqrt( ((enemys_3[i].left -  mouseX_3_b) ** 2) + ((enemys_3[i].top -  mouseY_3_b) ** 2) );
                    ayd_b = "#"+document.getElementById('player_b').id;
                }
                else{
                    $("#player_b").hide();
                    dist_b = 10000;
                }
                
                
                
                
                if(dist_a<dist_b){
                    angle_3_1 = Math.atan2($("#player_a").offset().left-15 - enemys_3[i].left-133, -($("#player_a").offset().top-15 - enemys_3[i].top-43)) * (180 / Math.PI);
                    
                    if(!deletehp_coop(enemys_3, i, ayd_a)){
                        enemys_3[i].left += (mouseX_3_a - enemys_3[i].left) / 50;
                        enemys_3[i].top += (mouseY_3_a - enemys_3[i].top) / 50;
                    }                    
                }
                else{
                    angle_3_1 = Math.atan2($("#player_b").offset().left-15 - enemys_3[i].left-133, -($("#player_b").offset().top-15 - enemys_3[i].top-43)) * (180 / Math.PI);
                    

                    if(!deletehp_coop(enemys_3, i, ayd_b)){
                        enemys_3[i].left += (mouseX_3_b - enemys_3[i].left) / 50;
                        enemys_3[i].top += (mouseY_3_b - enemys_3[i].top) / 50;
                    }                                      
                } 
                
                if(bullets_3_a[0]!= undefined)
                    pulka_a = bullets_3_a[0].visual_03;  
                if(bullets_3_b[0]!= undefined)
                    pulka_b = bullets_3_b[0].visual_03;
                
                if(deletehp_coop(enemys_3, i, ayd_a)) hpbar_coop(ayd_a);
                if(deletehp_coop(enemys_3, i, ayd_b)) hpbar_coop(ayd_b);
                
                vrag = enemys_3[i].visual_3;
                

                vrag.style.left = enemys_3[i].left + "px";
                vrag.style.top = enemys_3[i].top + "px";

                vrag.style.transform = 'rotate(' + angle_3_1 + 'deg)';

                
                
                if(bullets_3_a[0]!= undefined){
                    if(deleteenemys_coop(enemys_3, i, bullets_3_a)){
                        vrag.classList.remove("enemy_3");
                        vrag.remove();
                        enemys_3[i].top=-30;
                        enemys_3[i].left=-30;
                        enemys_3.splice(i,1);

                        pulka_a.classList.remove("bullet_3");
                        pulka_a.remove();
                        bullets_3_a.pop();
                    }
                }
                
                if(bullets_3_b[0]!= undefined){
                    if(deleteenemys_coop(enemys_3, i, bullets_3_b)){
                        vrag.classList.remove("enemy_3");
                        vrag.remove();
                        enemys_3[i].top=-30;
                        enemys_3[i].left=-30;
                        enemys_3.splice(i,1);

                        pulka_b.classList.remove("bullet_3");
                        pulka_b.remove();
                        bullets_3_b.pop();
                    }
                }
            }
        };
        
        function hpbar_coop(ayd){
            if(ayd=="#player_a")
                document.getElementById('hp_a').value-=0.05;
            else if(ayd=="#player_b")
                document.getElementById('hp_b').value-=0.05;
            
            if(document.getElementById('hp_a').value==0 && document.getElementById('hp_b').value==0){
                gameover_coop();
            }
	};
        
        function deletehp_coop(obj, id, ayd){
            return((parseInt($(ayd).css("top"))>=obj[id].top && parseInt($(ayd).css("top"))<=obj[id].top+60 && parseInt($(ayd).css("left"))>=obj[id].left && parseInt($(ayd).css("left"))<=obj[id].left+60)||
                    (parseInt($(ayd).css("top"))>=obj[id].top && parseInt($(ayd).css("top"))<=obj[id].top+60 && parseInt($(ayd).css("left"))>=obj[id].left && parseInt($(ayd).css("left"))<=obj[id].left+60 && parseInt($(ayd).css("left"))+60>=obj[id].left && parseInt($(ayd).css("left"))+60<=obj[id].left+60)||
                    (parseInt($(ayd).css("left"))+60>=obj[id].left && parseInt($(ayd).css("left"))+60<=obj[id].left+60 && parseInt($(ayd).css("top"))>=obj[id].top && parseInt($(ayd).css("top"))<=obj[id].top+60)||
                    (parseInt($(ayd).css("left"))+60>=obj[id].left && parseInt($(ayd).css("left"))+60<=obj[id].left+60 && parseInt($(ayd).css("top"))>=obj[id].top && parseInt($(ayd).css("top"))<=obj[id].top+60 && parseInt($(ayd).css("top"))+60>=obj[id].top && parseInt($(ayd).css("top"))+60<=obj[id].top+60)||
                    (parseInt($(ayd).css("top"))+60>=obj[id].top && parseInt($(ayd).css("top"))+60<=obj[id].top+60 && parseInt($(ayd).css("left"))+60>=obj[id].left && parseInt($(ayd).css("left"))+60<=obj[id].left+60)||
                    (parseInt($(ayd).css("top"))+60>=obj[id].top && parseInt($(ayd).css("top"))+60<=obj[id].top+60 && parseInt($(ayd).css("left"))+60>=obj[id].left && parseInt($(ayd).css("left"))+60<=obj[id].left+60 && parseInt($(ayd).css("left"))>=obj[id].left && parseInt($(ayd).css("left"))<=obj[id].left+60)||
                    (parseInt($(ayd).css("left"))>=obj[id].left && parseInt($(ayd).css("left"))<=obj[id].left+60 && parseInt($(ayd).css("top"))+60>=obj[id].top && parseInt($(ayd).css("top"))+60<=obj[id].top+60)||
                    (parseInt($(ayd).css("left"))>=obj[id].left && parseInt($(ayd).css("left"))<=obj[id].left+60 && parseInt($(ayd).css("top"))+60>=obj[id].top && parseInt($(ayd).css("top"))+60<=obj[id].top+60 && parseInt($(ayd).css("top"))>=obj[id].top && parseInt($(ayd).css("top"))<=obj[id].top+60));
        };
        
        
        function gunmove_coop(event){
            Xpos_3 = event.pageX;
            Ypos_3 = event.pageY;
        };
        
        function gameloop_coop(e){
            if(!GameOver_3){
                if(document.getElementById('hp_a').value!=0){
                    if (keyState_3[38]) {
                        if(parseInt($("#player_a").css("top"))>0){
                            $("#player_a").css("top", function(index, old) {return parseInt(old) -step + "px"});
                        }   
                    }
                    if (keyState_3[40] ) {
                        if(parseInt($("#player_a").css("top"))<$("#window_3").height()-60){
                            $("#player_a").css("top", function(index, old) {return parseInt(old) +step + "px"});
                        }
                    }
                    if (keyState_3[37]){
                        if(parseInt($("#player_a").css("left"))>0){
                            $("#player_a").css("left", function(index, old) {return parseInt(old) -step + "px"});
                        }
                    }
                    if (keyState_3[39]){
                        if(parseInt($("#player_a").css("left"))<$("#window_3").width()-60){
                            $("#player_a").css("left", function(index, old) {return parseInt(old) +step + "px"});
                        }
                    }  
                }
                /*************************************************************************************************/
                if(document.getElementById('hp_b').value!=0){  
                    if (keyState_3[87]) {
                        if(parseInt($("#player_b").css("top"))>0){
                            $("#player_b").css("top", function(index, old) {return parseInt(old) -step + "px"});
                        }
                    }
                    if (keyState_3[83]) {
                        if(parseInt($("#player_b").css("top"))<$("#window_3").height()-60){
                            $("#player_b").css("top", function(index, old) {return parseInt(old) +step + "px"});
                        }
                    }
                    if (keyState_3[65]){
                        if(parseInt($("#player_b").css("left"))>0){
                            $("#player_b").css("left", function(index, old) {return parseInt(old) -step + "px"});
                        }
                    }
                    if (keyState_3[68]){
                        if(parseInt($("#player_b").css("left"))<$("#window_3").width()-60){
                            $("#player_b").css("left", function(index, old) {return parseInt(old) +step + "px"});
                        }
                    }
                    
                    if(keyState_3[75]){
                        angle_3_0b-= (1/20*180/Math.PI);
                    }
                    if(keyState_3[76]){
                        angle_3_0b+=(1/20*180/Math.PI);
                    }
                    //player_b pulya
                    if(keyState_3[74]){                                
                        if (!GameOver_3) {
                            clearInterval(time_3_b);
                            angle_3_2b = angle_3_0b;
                            //вычисляется расстояние для пули
                            dx_3_b = Math.cos((angle_3_2b-90)*(Math.PI/180));
                            dy_3_b = Math.sin((angle_3_2b-90)*(Math.PI/180));

                            if(bullets_3_b[0]!= undefined){
                                    pulka_b.classList.remove("bullet_3");
                                    pulka_b.remove();
                                    bullets_3_b.pop();
                            }

                            createbul_coop(ayd_b);
                            time_3_b = setInterval(bulmove_coop_b, 1000/fps_3);
                        }	
                    }
                }
                if(keyState_3[116]){
                    location.reload();
                }
                /*************************************************************************************************/
                
                
                if(keyState_3[192]){                                
                    //clearInterval(indx);
                    GameOver_3 = true;
                    $("#restart>h3").hide();
                    $("#restart").show();
                    $(".continue").show();
                    $(".restart").hide();
                    $(".restart_tg").hide();
                    $(".restart_coop").show();
                    clearInterval(temi_3);
                }
                
                //отвечает за поворот персонажа
                angle_3_0a = Math.atan2(Xpos_3 - $("#player_a").offset().left-25, -(Ypos_3 - $("#player_a").offset().top-35)) * (180 / Math.PI);
                $("#player_a").css({'transform': 'rotate(' + angle_3_0a + 'deg)'});
                /*************************************************************************************************/
                $("#player_b").css({'transform': 'rotate(' + angle_3_0b + 'deg)'});

                // Ищет координаты игрока
                var offset = $('#window_3').offset();
                mouseX_3_a = parseInt($("#player_a").css("left"));
                mouseY_3_a = parseInt($("#player_a").css("top"));
                /*************************************************************************************************/
                mouseX_3_b = parseInt($("#player_b").css("left"));
                mouseY_3_b = parseInt($("#player_b").css("top"));

                moverotateenemys_coop();

                $("#window_3>h3").html("Осталось "+countenemy_3);
                
                if(sex_3=="end" && enemys_3.length==0 && Check_enemy_3==0 && countenemy_3==0){
                    $("#transition_coop").show();
                    Check_enemy_3 = 1;
                }
                if( ( parseInt($("#player_a").css("left"))>=$("#window_3").width()-60 || parseInt($("#player_b").css("left"))>=$("#window_3").width()-60 ) && win_3==1 && Check_enemy_3==1){
                    win_3 = 2;
                    Check_enemy_3=0;
                    countenemy_3 = many_3;

                    $("#player_a").css({
                            "top": 325+"px",
                            "left": 325+"px"
                    });
                    /*************************************************************************************************/
                    $("#player_b").css({
                            "top": 525+"px",
                            "left": 325+"px"
                    });
                        
                    $("#window_3").css("backgroundImage","url(image/map2.png)");
                    $("#transition_coop").hide();
                    createenemys_coop();
                    sex_3 = "";
                }
                if( ( parseInt($("#player_a").css("left"))>=$("#window_3").width()-60 || parseInt($("#player_b").css("left"))>=$("#window_3").width()-60 ) && win_3==2 && Check_enemy_3==1){
                    win_3 = 3;
                    Check_enemy_3 = 0;
                    countenemy_3 = many_3;

                    $("#player_a").css({
                        "top": 325+"px",
                        "left": 325+"px"
                    });
                    /*************************************************************************************************/
                    $("#player_b").css({
                        "top": 525+"px",
                        "left": 325+"px"
                    });
                    
                    $("#window_3").css("backgroundImage","url(image/map3.png)");
                    $("#transition_coop").hide();
                    createenemys_coop();
                    sex_3 = "";
                }
                if( ( parseInt($("#player_a").css("left"))>=$("#window_3").width()-60 || parseInt($("#player_b").css("left"))>=$("#window_3").width()-60 ) && win_3==3 && Check_enemy_3==1){
                        win_3 = 4;
                        Check_enemy_3 = 0;
                        countenemy_3 = many_3;
                        
                        $("#player_a").css({
                            "top": 325+"px",
                            "left": 325+"px"
                        });
                        /*************************************************************************************************/
                        $("#player_b").css({
                            "top": 525+"px",
                            "left": 325+"px"
                        });
                        
                        $("#window_3").css("backgroundImage","url(image/коты.png)");
                        $("#transition_coop").hide();
                        createenemys_coop();
                        sex_3 = "";
                }
                if( ( parseInt($("#player_a").css("left"))>=$("#window_3").width()-60 || parseInt($("#player_b").css("left"))>=$("#window_3").width()-60 ) && win_3==4 && Check_enemy_3==1){
                        $("#winner").show();
                        GameOver_3 = true;
                        clearInterval(temi_3);
                }

                $("#window_3>h4#a").text(parseInt(document.getElementById('hp_a').value));
                $("#window_3>h4#b").text(parseInt(document.getElementById('hp_b').value));
                setTimeout(gameloop_coop, 1000/fps_3);
            }
	};
        
        
         window.addEventListener('click', function(e) {
		if (!GameOver_3 && document.getElementById('hp_a').value!=0) {
			clearInterval(time_3_a);
			angle_3_2a = angle_3_0a;
			//вычисляется расстояние для пули
			dx_3_a = Math.cos((angle_3_2a-90)*(Math.PI/180));
			dy_3_a = Math.sin((angle_3_2a-90)*(Math.PI/180));

			if(bullets_3_a[0]!= undefined){
				pulka_a.classList.remove("bullet_3");
				pulka_a.remove();
				bullets_3_a.pop();
			}

			createbul_coop(ayd_a);
			time_3_a = setInterval(bulmove_coop_a, 1000/fps_3);
		}	
	});
        
        function createbul_coop(ayd){
            if(ayd=="#player_a"){
                for(let i=0; i<bulcount_3; i++){
                    let newBul = new Bullet_coop();
                    newBul.top = parseInt($(ayd).css("top"))+15;
                    newBul.left = parseInt($(ayd).css("left"))+25;
                    bullets_3_a.push(newBul);
                }
            }
            else if(ayd=="#player_b"){
                for(let i=0; i<bulcount_3; i++){
                    let newBul = new Bullet_coop();
                    newBul.top = parseInt($(ayd).css("top"))+15;
                    newBul.left = parseInt($(ayd).css("left"))+25;
                    bullets_3_b.push(newBul);
                }
            }
        };
        
        function disance_coop(x, y, ayd) {
	    return (Math.sqrt(((x - $(ayd).offset().left-150) ** 2) + ((y - $(ayd).offset().top-60) ** 2))/200);
	};
        
	function bulmove_coop_a() {
            if(bullets_3_a[0]!= undefined){
                for(let i=0; i<bullets_3_a.length; i++){
                    pulka_a = bullets_3_a[i].visual_03;

                    bullets_3_a[i].left += 10*dx_3_a;
                    bullets_3_a[i].top += 10*dy_3_a;

                    pulka_a.style.left = bullets_3_a[i].left + "px";
                    pulka_a.style.top = bullets_3_a[i].top + "px";

                    pulka_a.style.transform='rotate(' + angle_3_2a + 'deg)';

                    if(disance_coop(bullets_3_a[i].left, bullets_3_a[i].top, ayd_a)>4){
                        pulka_a.classList.remove("bullet_3");
                        pulka_a.remove();
                        bullets_3_a.pop();
                    }
                }
            }
	};
        
        function bulmove_coop_b() {
            if(bullets_3_b[0]!= undefined){
                for(let i=0; i<bullets_3_b.length; i++){
                    pulka_b = bullets_3_b[i].visual_03;

                    bullets_3_b[i].left += 10*dx_3_b;
                    bullets_3_b[i].top += 10*dy_3_b;

                    pulka_b.style.left = bullets_3_b[i].left + "px";
                    pulka_b.style.top = bullets_3_b[i].top + "px";

                    pulka_b.style.transform='rotate(' + angle_3_2b + 'deg)';

                    if(disance_coop(bullets_3_b[i].left, bullets_3_b[i].top, ayd_b)>4){
                        pulka_b.classList.remove("bullet_3");
                        pulka_b.remove();
                        bullets_3_b.pop();
                    }
                }
            }
	};
        
        function gameover_coop(){
            GameOver_3 = true;
            $(".continue").hide();
            $("#restart>h3").show();
            $("#restart").show();
            $(".restart").hide();
            $(".restart_tg").hide();
            $(".restart_coop").show();
            clearInterval(temi_3);
	};
        
        function menu_coop(){
            $("body").css("backgroundColor","rgb()");
            $("body").css("backgroundImage","url(image/Foto.png)");
            $("#menugame").show();
            $("#window_3").hide();
            $("#restart").hide();
            $(".settings").hide();
            $("#winner").hide();
            
            sex_3 = "";
            Check_enemy_3 = 0;
            countenemy_3 = many_3;
            menu_3 = 1;
            game_3 = false;
            fon_3 = true;
            
	};

    function startcoop() {
            $("#menugame").hide();
            $("#pred_start_coop").show();
        };

        
        //рестарт игры при смерти
	function restart_coop(){
            $("#restart").hide();
            $("#transition_coop").hide(); 

            GameOver_3 = false;

            for(var i=0; i<enemys_3.length; i++) {
                vrag = enemys_3[i].visual_3;
                vrag.classList.remove("enemy_3");
                vrag.remove();
            }
               
            sex_3 = "";
            Check_enemy_3 = 0;
            countenemy_3 = many_3;
            enemys_3.length = 0;
            start_coop();
	};
        
        function continue_coop(){
            GameOver_3 = false;
            gameloop_coop();
            $("#restart").hide();
            if(countenemy_3!=0) createenemys_coop();
	};
        
        
        window.addEventListener('keydown', function(e) {
        e.preventDefault();
        keyState_3[e.keyCode || e.which] = true;
        }, true);

        window.addEventListener('keyup', function(e) {
            e.preventDefault();
            keyState_3[e.keyCode || e.which] = false;
        }, true);

    });
})();
