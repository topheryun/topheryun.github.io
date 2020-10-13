
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
	// var other1 = document.getElementById("map-diff").selectedIndex;
	// var other2 = document.getElementById("map-type").selectedIndex;
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
	

	
	if (diff == 0 || type == 0) { // default
		leechPrice = 0;
		leechPriceOutput.value = leechPrice;
	}
	
	else if (type == 1) { // RH
		if (diff == 1) leechPrice += 75;
		else if (diff == 2) leechPrice += 85;
		else if (diff == 3) leechPrice += 105;
		else if (diff == 4) leechPrice += 160;
		else if (diff == 5) leechPrice += 220;
		else if (diff == 6) leechPrice += 380;
		
		leechPriceOutput.value = leechPrice;
	}
	
	else if (type == 2) { // chrome
		if (diff == 1 || diff == 2 || diff == 6) leechPrice = 0;
		else if (diff == 3) leechPrice += 250;
		else if (diff == 4) leechPrice += 375;
		else if (diff == 5) leechPrice += 380;
		
		leechPriceOutput.value = leechPrice;
	}
	
	else if (type == 3) { // slayer
		if (diff == 1) leechPrice += 320;
		else if (diff == 2) leechPrice += 400;
		else if (diff == 3) leechPrice += 620;
		else if (diff == 4) leechPrice += 950;
		else if (diff == 5) leechPrice += 1600;
		else if (diff == 6) leechPrice += 2030;
		
		leechPriceOutput.value = leechPrice;
	}
	
	else if (type == 4) { // lightning
		leechPrice += 1050;
		if (isRare) leechPriceOutput.value = leechPrice; 
		else leechPriceOutput.value = 0;
	}
	
	sbEarned = leechSpots * leechPrice;
	profit = sbEarned - snipeTotalCostOutput.value - dustCostOutput.value;
	profitOutput.innerHTML = `Profit: ${profit}`;
}
