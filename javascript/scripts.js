var navButton = document.getElementById("btnOpen");
var coll = document.querySelector(".collapse");



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
	toggleClass("#header-offset", "width");
	toggleClass("#header", "slide");
	toggleClass(".header-image", "invis");
});


//COLORS//

document.getElementById("right").addEventListener("click", () => {
	for (let i = 0; i < geometryList.length; i++) {
		geometryList[i].classList.add("teal");
	}
});


//COLLAPSE//

coll.addEventListener("click", function() {
	this.classList.toggle("active");
	var content = this.previousElementSibling;
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
	var x = parseInt(document.querySelector('#x').value);
	var y = parseInt(document.querySelector('#y').value);
	var d = parseInt(document.querySelector('#d').value);

	e.preventDefault();
	document.querySelector("#number").innerHTML = "deu " + solution(x, y, d) + " saltos";
}, false);