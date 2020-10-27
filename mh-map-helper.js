
var snipeTotalCost = 0;
var sbEarned = 0;
var profit = 0;
var leechSpots = 4;
var leechPrice = 0;
var dustCost = 210;

window.onload=function() {
	document.querySelector("#copy-discord-locations").onclick = function() {
		copyToClipboard("discordLocations");
	}
	
	document.querySelector("#copy-discord-no-locations").onclick = function() {
		copyToClipboard("discordNoLocations");
	}
	
	
	// when user presses "enter" in text area, it calls createResults()
	document.getElementById("input")
	.addEventListener("keyup", function(event) {
		event.preventDefault();
		if (event.keyCode === 13) {
			createResults();
		}
	});
	
	document.getElementById("leech-price")
	.addEventListener("keyup", function(event) {
		event.preventDefault();
		if (event.keyCode === 13) {
			leechPriceChange();
		}
	});
	
	document.getElementById("leech-spots")
	.addEventListener("keyup", function(event) {
		event.preventDefault();
		if (event.keyCode === 13) {
			leechSpotsChange();
		}
	});
		
	document.getElementById("snipe-cost")
	.addEventListener("keyup", function(event) {
		event.preventDefault();
		if (event.keyCode === 13) {
			snipeCostChange();
		}
	});
	
	document.getElementById("dust-cost")
	.addEventListener("keyup", function(event) {
		event.preventDefault();
		if (event.keyCode === 13) {
			dustCostChange();
		}
	});
	
}


function UndoScavWarning() {
	document.getElementById("scav-warning").innerHTML = "";
}

function ScavWarning() {
	document.getElementById("scav-warning").innerHTML = 
	"Waiting on MHCT tools to publish Elite loot.";
}

function createMiceList(option) {
	var miceList = "__LF Snipers:__";
	
	var textArea = document.getElementById("input");
  var lines = textArea.value.split("\n");
	var zones = [];
	var list = [];
	
	for (var i = 0; i < lines.length; i++) {
		zones[i] = miceCategory.get(lines[i]);
		if (zones[i] === undefined) zones[i] = "";
		list.push({
			'category': zones[i],
			'value': miceCategoryValues.get(zones[i]),
			'mouse': lines[i]
		});
	}
	
	list.sort(function(a,b) {
		return ((a.value < b.value) ? -1 : ((a.value == b.value) ? 0 : 1));
	});
	
	// console.log(list);
	
	if (option == "discordLocations") {
		miceList = createMiceListDiscord(miceList, list);
	}
	else if (option == "discordNoLocations") {
		miceList = createMiceListNoLocationsDiscord(miceList, list);
	}
	
	// Future: add option for shortened names

	return miceList;
}

function createMiceListNoLocationsDiscord(miceList, list) {
	for (var i = 0; i < list.length; i++) {
		if (list[i].category != "")
			miceList += "\n" + shortenMouseName(list[i].mouse) + " " + miceValues.get(list[i].mouse);
	}
	return miceList;
}

function createMiceListDiscord(miceList, list) {

	for (var i = 0; i < list.length; i++) {
		if (i == 0) {
			miceList += "\n**" + list[i].category + ":**";
		}
		else if (list[i].category != list[i-1].category && list[i].category != "") {
			miceList += "\n**" + list[i].category + ":**";
		}
		
		if (i == 0)
			miceList += " " + shortenMouseName(list[i].mouse) + " " + miceValues.get(list[i].mouse);
		else if (i > 0 && list[i].category != "") {
			if (list[i].category == list[i-1].category)
				miceList += ", " + shortenMouseName(list[i].mouse) + " " + miceValues.get(list[i].mouse);
			else 
				miceList += " " + shortenMouseName(list[i].mouse) + " " + miceValues.get(list[i].mouse);
		}
	}
	
	return miceList;
}

function shortenMouseName(mouseName) {
	switch (mouseName) {
		case "Mousevina von Vermin":
			mouseName = "Mousevina";
			break;
		case "Balack the Banished":
			mouseName = "Balack";
			break;
		case "Zurreal the Eternal":
			mouseName = "Zurreal";
			break;
		case "Inferna, The Engulfed":
			mouseName = "Inferna";
			break;
		case "Nachous, The Molten":
			mouseName = "Nachous";
			break;
		case "Corky, the Collector":
			mouseName = "Corky";
			break;
		case "Bruticus, the Blazing":
			mouseName = "Bruticus";
			break;
		case "Stormsurge, the Vile Tempest":
			mouseName = "Stormsurge";
			break;
		case "Kalor'ignis of the Geyser":
			mouseName = "Kalor";
			break;
		case "Ful'Mina, The Mountain Queen":
			mouseName = "Ful'Mina";
			break;

		default:
			break;
	}
	return mouseName;
}

function copyToClipboard(option) {
	var tempInput = document.createElement("textarea");
	tempInput.value = createMiceList(option);
	document.body.appendChild(tempInput);
	tempInput.select();
	document.execCommand("copy");
	document.body.removeChild(tempInput);
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
			if (isNaN(value)) {
				snipeTotalCost += 0;
				value = "Error: Could Not Find!";
			}
			else snipeTotalCost += value;
            list.innerHTML += `<tr><td>${lines[i]}</td><td>${value}</td></tr>`;
        }
    }
	snipeTotalCostOutput.value = snipeTotalCost;
	calcPrices(0);
	
	// console.log(snipeTotalCost);
}

function isRareChange() {
	var isRare = document.getElementById("is-rare").checked;
	//var other1 = document.getElementById("map-diff").selectedIndex;
	//var other2 = document.getElementById("map-type").selectedIndex;
	var dustCostOutput = document.getElementById("dust-cost");
	
	if (isRare) dustCost = 210;
	else dustCost = 0;
	
	dustCostOutput.value = dustCost;
	//if (other1 != 0 && other2 != 0) calcPrices();
	calcPrices(0);
}

function mapDiffChange() {
	//var e = document.getElementById("map-diff");
	//var strUser = e.options[e.selectedIndex].text;
	var other = document.getElementById("map-type").selectedIndex;
	if (other != 0) calcPrices(0);

	//var changeTest = document.getElementById("test");
	//changeTest.innerHTML = strUser;
}

function mapTypeChange() {
	var e = document.getElementById("map-type");
	//var strUser = e.options[e.selectedIndex].text;
	var other = document.getElementById("map-diff").selectedIndex;
	var leechSpotsOutput = document.getElementById("leech-spots");
	
	if (e.selectedIndex == 5) {
		ScavWarning();
		leechSpots = 5;
		leechSpotsOutput.value = 5;
	}
	else {
		UndoScavWarning();
		leechSpots = 4;
		leechSpotsOutput.value = 4;
	}
	
	console.log("leech spots: " + leechSpots);
	
	if (other != 0 || e.selectedIndex == 4) calcPrices(0);
	
	//var changeTest = document.getElementById("test");
	//changeTest.innerHTML = strUser;
}

function calcPrices(lp) {
	var isRare = document.getElementById("is-rare").checked;

	if (lp == 0) {
		leechPrice = 0;
		if (!isRare) leechPrice -= 40;
		calcLeechPrice();
	}

	calcProfit();
}

function calcLeechPrice() {
	var leechPriceOutput = document.getElementById("leech-price");
	var diff = document.getElementById("map-diff").selectedIndex;
	var type = document.getElementById("map-type").selectedIndex;
	
	if (type == 4) { // lightning
		leechPrice += 1050;
		leechPriceOutput.value = leechPrice; 
	}
	
	else if (diff == 0 || type == 0) { // default
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
	
	else if (type == 5) { // scavenger
		if (diff == 1) leechPrice += 75;
		else if (diff == 2) leechPrice += 85;
		else if (diff == 3) leechPrice += 105;
		else if (diff == 4) leechPrice += 160;
		else if (diff == 5) leechPrice += 220;
		else if (diff == 6) leechPrice += 380;
		
		leechPriceOutput.value = leechPrice;
	}
}

function calcProfit() {
	var profitOutput = document.getElementById("profit");
	sbEarned = leechSpots * leechPrice;
	
	// console.log("dustCost: " + dustCost);
	
	profit = sbEarned - snipeTotalCost - dustCost;
	profitOutput.innerHTML = `Profit: ${profit}`;
}

function leechPriceChange() {
	var leechPriceOutput = document.getElementById("leech-price");
	leechPrice = leechPriceOutput.value;
	
	calcPrices(leechPrice);
}

function leechSpotsChange() {
	var leechSpotsOutput = document.getElementById("leech-spots");
	leechSpots = leechSpotsOutput.value;
	
	calcPrices(leechPrice);
}

function snipeCostChange() {
	var snipeCostOutput = document.getElementById("snipe-cost");
	snipeTotalCost = snipeCostOutput.value;
	
	calcPrices(leechPrice);
}

function dustCostChange() {
	var dustCostOutput = document.getElementById("dust-cost");
	dustCost = dustCostOutput.value;
	
	calcPrices(leechPrice);
}

