var navButton = document.querySelector("#btnOpen");

document.querySelector("#right").addEventListener("click", () => {
	for (let i = 0; i < geometryList.length; i++) {
		geometryList[i].classList.add("teal");
	}
});



function toggle(e) {
	e.classList.toggle("switch");
}

function toggleClass(el, className) {
	var el = document.querySelector(el);

	if (el.classList) {
		el.classList.toggle(className);
	} else {
	    var classes = el.className.split(' ');
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

		el.className = classes.join(' ');
	}
}

navButton.addEventListener("click", () => {
	toggle(navButton);
	toggleClass("#header-offset", "width");
	toggleClass("#header", "slide");
	toggleClass(".header-image", "invis");
});