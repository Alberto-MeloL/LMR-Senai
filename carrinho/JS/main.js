function getTotal(list){
	var total = 0;
	for(var key in list){
		total += list[key].value * list[key].amount;
	}
	document.getElementById("totalValue").innerHTML = formatValue(total);
}

var count = 0;
function quantidade() {
    count--;
    if ("-") {
        document.getElementById('quant').disabled=true;        
    }
}