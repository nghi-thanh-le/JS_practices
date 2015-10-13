// task 1 function
function calculateAge(birthYear, currentYear){
	var birth = birthYear.value;
    var current = currentYear.value;
    if(isEmpty(current)){
    	current = new Date().getFullYear();
    }
    if(birth > current){
	    document.getElementById('warning1').textContent = 'Birth Year cannot be greater than Current Year!';
	} else if(validate(1, birth) && validate(1, current)){
    	empty(1);
        var age1 = current - birth;
    	var age2 = age1 + 1;
    	document.getElementById('result1').textContent = "You'r either " + age1 + " or " + age2;
    }
}

// task 2 function
function calculateSupply(age, amount){
    // amount = amount per day
    var maxAge = 100;
    var _age = age.value;
    var _amount = amount.value;
    if(_age > maxAge){
    	document.getElementById('warning2').textContent = "You're immortal!! It's impossible!"
    }
    if(validate(2, _age) && validate(2, _amount)){
    	empty(2);
    	var remainDate = (maxAge - _age) * 365;
        var totalAmount = remainDate * _amount;
        document.getElementById('result2').textContent = "You will need " + Math.round(totalAmount) + " to last you until the ripe old age of " + maxAge;
    }
}

// task 3 function
function calcCircumfrence(radius){
	var rad = radius.value;
	if(validate(3, rad)){
		empty(3);
	    var cir = 2 * rad * Math.PI.toFixed(2);
	    document.getElementById('cir').textContent = "The Circumfrence is " + cir.toFixed(2);
	}
}

function calcArea(radius){
	var rad = radius.value;
	if(validate(3, rad)){
		empty(3);
	    var area = Math.PI.toFixed(2) * Math.PI.toFixed(2) * rad;
	    document.getElementById('area').textContent = "The Area is " + area.toFixed(2);	
	}
}

// task 4 function
function celsiusToFahrenheit(cel){
	var celsius = cel.value;
	if(validate(4, celsius)){
		empty(4);
	    var fah = (celsius * 9 / 5) + 32;
	    document.getElementById('convert1').textContent = celsius + " °C is " + fah.toFixed(2) + "°F";
	}
}

function fahrenheitToCelsius(fah){
	var fahren = fah.value;
	if(validate(4, fahren)){
		empty(4);
		var celsius = (fahren - 32) * 5 / 9;
		document.getElementById('convert2').textContent = fahren + "°F is " + celsius.toFixed(2) + "°C";
	}
}


// utility function area

// check empty 
function isEmpty(str) {
    return (!str || 0 === str.length);
}

// empty warning
function empty(num){
	document.getElementById('warning' + num).textContent = "";
}

function validate(num, val){
	switch(num){
		case 1:
		if(isEmpty(val)){
	      	document.getElementById('warning1').textContent = 'Birth Year or Current Year cannot be blank!';
	      	return false;
	    } else if (isNaN(val)){
	      	document.getElementById('warning1').textContent = 'Birth Year or Current Year must be number!';
	      	return false;
	    } else if(val < 0){
	    	document.getElementById('warning1').textContent = 'Birth Year or Current Year must be greater than 0!';
	    	return false;
	    } else {
	    	return true;	
	    }
		break;
		case 2:
		if(isEmpty(val)){
	      	document.getElementById('warning2').textContent = 'Age or Amount cannot be blank!';
	      	return false;
	    } else if (isNaN(val)){
	      	document.getElementById('warning2').textContent = 'Age or Amount must be number!';
	      	return false;
	    } else if(val < 0){
	    	document.getElementById('warning22').textContent = 'Age or Amount must be greater than 0!';
	    	return false;
	    } else {
	    	return true;	
	    }
		break;
		case 3:
			empty(3);
			if(isEmpty(val)){
				document.getElementById('warning3').textContent = 'Radius cannot be blank!';
				return false;
			} else if(isNaN(val)){
				document.getElementById('warning3').textContent = 'Radius must be number!';
				return false;
			} else if(val < 0){
				document.getElementById('warning3').textContent = 'Radius must be greater than 0!';
				return false;
			} else {
				return true;
			}
		break;
		case 4:
			empty(4);
			if(isEmpty(val)){
				document.getElementById('warning4').textContent = 'Degree cannot be blank!';
				return false;
			} else if(isNaN(val)){
				document.getElementById('warning4').textContent = 'Degree must be number!';
				return false;
			} else {
				return true;
			}
		break;
	}
}