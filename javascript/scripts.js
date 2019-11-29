var navButton = document.getElementById("btnOpen");
var coll = document.querySelector(".collapse");
var geometryList = document.querySelectorAll(".geo");
var left = document.getElementById("left");
var border = document.getElementById("border");
var center = document.getElementById("center");
var right = document.getElementById("right");



//TOGGLE NAV//

function toggle(e) {
	e.classList.toggle("switch");
}

function toggleClass(e, className) {
	var e = document.querySelector(e);

	if (e.classList) {
		e.classList.toggle(className);
	} else {
	    var classes = e.className.split(' ');
	    var existingIndex = -1;
	    for (var j = classes.length; j--;) {
	    	if (classes[j] === className) {
	    		existingIndex = j;
	    	}
	    }

	    if (existingIndex >= 0) {
	    	classes.splice(existingIndex, 1);
	    } else {
	    	classes.push(className);
	    }

		e.className = classes.join(' ');
	}
}

navButton.addEventListener("click", () => {
	toggle(navButton);
	toggleClass("#nav-aside", "width");
	toggleClass("#header", "slide");
	toggleClass(".header-image", "invis");
	toggleClass("body", "lock-scroll");
});


//COLORS//

function colorApp(e) {
	var first = window.getComputedStyle(e).backgroundColor;
	var second = window.getComputedStyle(center).backgroundColor;

	center.style.backgroundColor = first;
	e.style.backgroundColor = second;
	border.style.borderColor = first;

	for (let i = 0; i < geometryList.length; i++) {
		geometryList[i].style.borderColor = first;
	}

}

left.addEventListener("click", () => {
	colorApp(left);
});

right.addEventListener("click", () => {
	colorApp(right);
});


//COLLAPSE//

coll.addEventListener("click", function() {
	var content = document.querySelector(".mission");
	if (content.style.display === "block") {
		content.style.display = "none";
	} else {
		content.style.display = "block";
	}
});


//FROG LEAPS//

function solution(x, y, d) {
	var jumps;
	if (x < 1 || y < 1 || d < 1) {
		alert('Above 1, please.');
	}
	if (x > 1000000000 || y > 1000000000 || d > 1000000000) {
		alert('Way too damn high!');
	}

	if ( (y-x) < d ) {
		jumps = 1;
	} else {
		if ( (y-x) % d === 0) {
			jumps = parseInt((y-x)/d);
		} else {
			jumps = parseInt(((y-x)/d)+1);
		}
	}

	return jumps.toString();
}


//ONLY NUMBERS//

function isNumber(e) {
    e = (e) ? e : window.event;
    var charCode = (e.which) ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}


//CALC NUMB JUMPS//


document.querySelector('#total').addEventListener("click", (e) => {
	var x = document.querySelector('#x').value;
	var y = document.querySelector('#y').value;
	var d = document.querySelector('#d').value;

	e.preventDefault();
	if (x.length < 1 || y.length < 1 || d.length < 1) {
		alert("Please provide all numbers")
	} else {
		document.querySelector("#number").innerHTML = "deu " + solution(x, y, d) + " saltos";
	}
	
}, false);