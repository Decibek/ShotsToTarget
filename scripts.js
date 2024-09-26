var count = prompt("Количесво выстрелов:") - 0;
if (foolTest(count) == 0) {
    var isRandom = prompt("Стрелять случайно?") == "y";
    shotToTarget(count, isRandom);
    }

function rand(min,max){
    return Math.random() * (max - min) + min
}

function shotToTarget(count,isRandom){
    var points = 0;
    for(var i = 0; i < count; i++){
        var x = isRandom?rand(-1,1):prompt("x: ") - 0 + rand(-0.1, 0.1);
        var y = isRandom?rand(-1,1):prompt("y: ") - 0 + rand(-0.1, 0.1);
        points += shot(x,y,i);

        console.log("Промежуточная сумма очков: ", points);
    }
console.log("Конечная сумма очков: ", points);
return points;
}

function shotToPoint(x,y){
    if (x == 0 && y == 0){
        return 6;
    }
    else{
        return 0;
    }
}

function shotToStar(x,y){
    if((Math.abs(y)) <= 2 / (Math.abs(x) + 1) - 1 && Math.max(Math.abs(y),Math.abs(x)) <= 1){
        return 1;
    }else{
        return 0;
    }
}

function shotToRhomb(x,y){
    if (Math.abs(x) + Math.abs(y)<=1){
        return 1;
    }
    else{
        return 0;
    }
}

function shotToCircle(x,y){
    if (Math.sqrt(x**2 + y**2)<= 1){
        return 1;
    }
    else{
        return 0;
    }
}

function shotToSquare(x,y){
    if (x<=1 && x>=-1 && y>=-1 && y<=1){
        return 1;
    }
    else{
        return 0;
    }
}

function shot(x,y,i){
    console.log(i + 1, 'х:' , x,'у:', y);
    var checkTarget = 0;
    checkTarget = shotToSquare(x,y) + shotToCircle(x,y) + shotToRhomb(x,y) + shotToStar(x,y) + shotToPoint(x,y);
    return checkTarget;
}

function foolTest(count){
    if (count == 0) {
        console.log("Выстрелов не будет");
        return 1
    }else{
        return 0
    }
}
