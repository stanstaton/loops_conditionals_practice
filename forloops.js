for (var i = 0; i <= 100; i++) {
	console.log(i);
}

for (var j = 7; j <= 635; j++) {
	console.log(j);
}

var LIMIT = 100

for (var start = 0; start <= LIMIT; start++) {
	console.log(start);
}

var busRouteEnds = 24

for (var busroutes = 5; busroutes <= busRouteEnds; busroutes++) {
	console.log(`This bus started at ${busroutes}:00`);
}

for (var i = 1; i <= 100; i++) {
	if (i % 3 == 0 && i % 5 == 0) {
		console.log("fizzbuzz");
	} else if (i % 3 == 0) {
		console.log("fizz");
	} else if (i % 5 == 0) {
		console.log("buzz");
	} else {
		console.log(i);
	}
}