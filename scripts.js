var count = prompt("Количесво выстрелов:") - 0;
if (foolTest(count) == 0) {
    var isRandom = prompt("Стрелять случайно?") == "y";
    var radRandom = isRandom ? prompt("Введите радиус случайного радиуса: ") : 1;
    shotToTarget(count, isRandom, radRandom);
    }

function rand(min,max){
    return Math.random() * (max - min) + min
}

function shotToTarget(count,isRandom, radRandom){
    var points = 0;
    for(var i = 0; i < count; i++){
        var x = isRandom?rand(-radRandom,radRandom):prompt("x: ") - 0 + rand(-0.1, 0.1);
        var y = isRandom?rand(-radRandom,radRandom):prompt("y: ") - 0 + rand(-0.1, 0.1);
        points += shot(x,y,i);

        console.log("Промежуточная сумма очков: ", points);
    }
console.log("Конечная сумма очков: ", points);
return points;
}

function shotToPoint(x,y){
    return (x == 0 && y == 0) ? 6 : 0
}

function shotToStar(x,y){
    return ((Math.abs(y)) <= 2 / (Math.abs(x) + 1) - 1 && Math.max(Math.abs(y),Math.abs(x)) <= 1) ? 1 : 0
}

function shotToRhomb(x,y){
    return (Math.abs(x) + Math.abs(y)<=1) ? 1 : 0
}

function shotToCircle(x,y){
    return (Math.sqrt(x**2 + y**2)<= 1) ? 1 : 0
}

function shotToSquare(x,y){
    return (x<=1 && x>=-1 && y>=-1 && y<=1) ? 1 : 0
}

function shot(x,y,i){
    console.log(i + 1, 'х:' , x,'у:', y);
    var checkTarget = 0;
    checkTarget = shotToSquare(x,y) + shotToCircle(x,y) + shotToRhomb(x,y) + shotToStar(x,y) + shotToPoint(x,y);
    return checkTarget;
}

function foolTest(count){
    if (count <= 0) {
        console.log("Выстрелов не будет");
        return 1
    }else{
        return 0
    }
}
