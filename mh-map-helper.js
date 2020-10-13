
var snipeTotalCost = 0;
var sbEarned = 0;
var profit = 0;

window.onload=function() {
		// when user presses "enter" in text area, it calls createResults()
    document.getElementById("input")
		.addEventListener("keyup", function(event) {
			event.preventDefault();
			if (event.keyCode === 13) {
				createResults();
			}
		});
		
}

function createResults() {
		var snipeTotalCostOutput = document.getElementById("snipe-cost");
    var list = document.getElementById("result");
    list.innerHTML = "<tr></tr>";
    var textArea = document.getElementById("input");
    var lines = textArea.value.split("\n");
    var value;
		snipeTotalCost = 0;

    for (var i = 0; i < lines.length; i++) {
        if (lines[i] != "") {
            value = miceValues.get(lines[i]);
						snipeTotalCost += value;
            list.innerHTML += `<tr><td>${lines[i]}</td><td>${value}</td></tr>`;
        }

    }
		snipeTotalCostOutput.value = snipeTotalCost;
		calcPrices();
		
		// console.log(snipeTotalCost);
}

function isRareChange() {
	var isRare = document.getElementById("is-rare").checked;
	var other1 = document.getElementById("map-diff").selectedIndex;
	var other2 = document.getElementById("map-type").selectedIndex;
	var dustCostOutput = document.getElementById("dust-cost");
	
	if (isRare) dustCostOutput.value = 210;
	else dustCostOutput.value = 0;
	//if (other1 != 0 && other2 != 0) calcPrices();
	calcPrices();
}

function mapDiffChange() {
	//var e = document.getElementById("map-diff");
	//var strUser = e.options[e.selectedIndex].text;
	var other = document.getElementById("map-type").selectedIndex;
	if (other != 0) calcPrices();

	//var changeTest = document.getElementById("test");
	//changeTest.innerHTML = strUser;
}

function mapTypeChange() {
	//var e = document.getElementById("map-type");
	//var strUser = e.options[e.selectedIndex].text;
	var other = document.getElementById("map-diff").selectedIndex;
	
	if (other != 0 || e.selectedIndex == 4) calcPrices();
	
	//var changeTest = document.getElementById("test");
	//changeTest.innerHTML = strUser;
}

function calcPrices() {
	var leechPriceOutput = document.getElementById("leech-price");
	var leechSpotsOutput = document.getElementById("leech-spots");
	var snipeTotalCostOutput = document.getElementById("snipe-cost");
	var dustCostOutput = document.getElementById("dust-cost");
	var profitOutput = document.getElementById("profit");
	var isRare = document.getElementById("is-rare").checked;
	var diff = document.getElementById("map-diff").selectedIndex;
	var type = document.getElementById("map-type").selectedIndex;
	var leechSpots = leechSpotsOutput.value;
	var leechPrice = 0;
	if (!isRare) leechPrice = -40;
	sbEarned = 0;
	
	//{ Changing the Leech Price value (should this be a different function?
	if (type == 4) { //lightning
		leechPrice += 1050;
		if (isRare) leechPriceOutput.value = leechPrice; 
		else leechPriceOutput.value = 0;
	}
	else if (diff == 0 || type == 0) { // default
		leechPrice = 0;
		leechPriceOutput.value = leechPrice;
	}
	else if (diff == 1 && type == 1) { // easy rh
		leechPrice += 75;
		if (isRare) leechPriceOutput.value = leechPrice;
		else leechPriceOutput.value = leechPrice;
	} 
	else if (diff == 2 && type == 1) { // med rh
		leechPrice += 85;
		if (isRare) leechPriceOutput.value = leechPrice;
		else leechPriceOutput.value = leechPrice;
	}
	else if (diff == 3 && type == 1) { // hard rh
		leechPrice += 105;
		if (isRare) leechPriceOutput.value = leechPrice;
		else leechPriceOutput.value = leechPrice;
	}
	else if (diff == 4 && type == 1) { // elab rh
		leechPrice += 160;
		if (isRare) leechPriceOutput.value = leechPrice;
		else leechPriceOutput.value = leechPrice;
	}
	else if (diff == 5 && type == 1) { // ard rh
		leechPrice += 220;
		if (isRare) leechPriceOutput.value = leechPrice;
		else leechPriceOutput.value = leechPrice;
	}
	else if (diff == 6 && type == 1) { // elite rh
		leechPrice += 380;
		if (isRare) leechPriceOutput.value = leechPrice;
		else leechPriceOutput.value = leechPrice;
	}
	
	else if (diff == 1 && type == 2) { // easy chrome
		leechPrice = 0;
		leechPriceOutput.value = leechPrice;
	} 
	else if (diff == 2 && type == 2) { // med chrome
		leechPrice = 0;
		leechPriceOutput.value = leechPrice;
	}
	else if (diff == 3 && type == 2) { // hard chrome
		leechPrice += 250;
		if (isRare) leechPriceOutput.value = leechPrice;
		else leechPriceOutput.value = leechPrice;
	}
	else if (diff == 4 && type == 2) { // elab chrome
		leechPrice += 375;
		if (isRare) leechPriceOutput.value = leechPrice;
		else leechPriceOutput.value = leechPrice;
	}
	else if (diff == 5 && type == 2) { // ard chrome
		leechPrice += 380;
		if (isRare) leechPriceOutput.value = leechPrice;
		else leechPriceOutput.value = leechPrice;
	}
	else if (diff == 6 && type == 2) { // elite chrome
		leechPrice = 0;
		leechPriceOutput.value = leechPrice;
	}
	
	else if (diff == 1 && type == 3) { // easy slayer
		leechPrice += 320;
		if (isRare) leechPriceOutput.value = leechPrice;
		else leechPriceOutput.value = leechPrice;
	} 
	else if (diff == 2 && type == 3) { // med slayer
		leechPrice += 400;
		if (isRare) leechPriceOutput.value = leechPrice;
		else leechPriceOutput.value = leechPrice;
	}
	else if (diff == 3 && type == 3) { // hard slayer
		leechPrice += 620;
		if (isRare) leechPriceOutput.value = leechPrice;
		else leechPriceOutput.value = leechPrice;
	}
	else if (diff == 4 && type == 3) { // elab slayer
		leechPrice += 950;
		if (isRare) leechPriceOutput.value = leechPrice;
		else leechPriceOutput.value = leechPrice;
	}
	else if (diff == 5 && type == 3) { // ard slayer
		leechPrice += 1600;
		if (isRare) leechPriceOutput.value = leechPrice;
		else leechPriceOutput.value = leechPrice;
	}
	else if (diff == 6 && type == 3) { // elite slayer
		leechPrice += 2030;
		if (isRare) leechPriceOutput.value = leechPrice;
		else leechPriceOutput.value = leechPrice;
	}
	
//}
	
	sbEarned = leechSpots * leechPrice;
	// console.log("sbEarned: " + sbEarned);
	profit = sbEarned - snipeTotalCostOutput.value - dustCostOutput.value;
	profitOutput.innerHTML = `Profit: ${profit}`;
}
