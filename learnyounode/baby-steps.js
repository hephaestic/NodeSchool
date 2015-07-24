var args = process.argv;
var total = 0.0;
for(num in args){
	if(num > 1){
		total += Number(args[num]);
	}
}
console.log(total);