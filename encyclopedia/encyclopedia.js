/* 
    分类百科
*/

var btn = document.querySelectorAll("#menubtn");
var div = document.getElementsByClassName('content');
for (var i = 0; i < btn.length; i++) {
    //立即执行函数
    (function (n) {
        btn[n].onclick = function () {
            for (var j = 0; j < btn.length; j++) {
                btn[j].className = "";
                div[j].style.display = "none";
            }
            this.className = "actives";
            div[n].style.display = "block";
        }
    }(i))
}


var btntwo = document.querySelectorAll("#btn");
var divtwo = document.querySelectorAll("#require");
var i = 1;
for (var i = 0; i < btntwo.length; i++) {
    (function (n) {
        btntwo[n].onclick = function () {
            for (var j = 0; j < btntwo.length; j++) {
                btntwo[j].className = "";
                divtwo[j].style.display = "none";
            }
            this.className = "activeTwo";
            divtwo[n].style.display = "block";

            if (i % 2 == 1) {
                divtwo[n].style.display = "none";
            } else {
                divtwo[n].style.display = "block";
            }
            i++;


        }
    }(i))
}





/*
var first = document.getElementById("first");
var second = document.getElementById("second");
var i = 1;
first.onclick = function () {
    if (i % 2 == 1) {
        second.style.display = "block";
    } else {
        second.style.display = "none";
    }
    i++;
}

 */
