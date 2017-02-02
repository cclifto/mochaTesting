var assert = require('assert')



// Example

// The purpose of this first exercise is just to show how 
// assertions work and how the homework should be carried out. 
// We'll do it together in class.

// Part EXAMPLE

// Write a function called addOne() that returns the input number, plus one. 

var addOne = function(input){
	var output = input + 1
	return output
}

// Part 0

// Fix the following code so that the assertion passes. 

var doubleNum = function(num) {
	var newNum = num * 2
	return newNum
}

/**
 * PART 1
 *
 * Write a function called sum that takes two numbers as
 * inputs and computes the sum of those two numbers.
 */

var sum = function (num1, num2){
	if (typeof num2 !== 'number'){
		return null;
	}
	else if (typeof num1 !== 'number'){
		return null;
	}
	else if (isNegative(num1) || isNegative(num2)){
		return null
	}
	else{
	return num1 + num2
	}
}

// PART 2

// Write a function called average that takes two numbers
// as inputs and returns the average of the two. To avoid
// repeating yourself, use your sum function inside 
// of your average function.

var average = function (num1, num2){
	return sum(num1, num2) / 2
}

/**
 * PART 3
 *
 * Modify your sum function so that if either of its 
 inputs is not a number, it will return "null."
 */

 // Part 4

// Write a function called isNegative that will tell 
// whether a number is negative or not.

var isNegative = function (number){
    if (number <= -1){
        return true;
    } 
    else{
        return false;
    }
} 

// Now, modify your sum function again, so that it 
// will return null if any of the inputs is negative.
// To avoid repeating yourself, use your isNegative 
// function inside your sum funciton ***

// Part 5

// Write a function that will find the minimum of four 
// input numbers. You can do it using nested if statements,
// boolean operators, or both (but not neither).

var minimum = function(num1, num2, num3, num4){
	if (num1 < num2 && num1 < num3 && num1 < num4){
		return num1
	}
	else if (num2 < num3 && num2 < num4){
		return num2
	}
	else if (num3 < num4){
		return num3
	}
	else{
		return num4
	}
}

// Part 7

// Using logical operators, write a function that will
// return true if either input is a string, but not 
// both or neither.

var justOneString = function(num1, num2){
    if (typeof num1 === 'string' && typeof num2 === 'string') {
        return false
    }

    else if (typeof num1 === 'string' || typeof num2 === 'string') {
    	return true
    }

    else if (typeof num1 !== 'string' && typeof num2 !== 'string') {
    	return false
    }
}

// Part 8

// Write a function called doTwice that takes as input a 
// function and invokes that function twice. 

// For testing purposes, I've included some functions that
// modify global variables, although that's not a good
// pattern for production code.

var NUMBER = 10

var incrementGlobalNumber = function(){
	NUMBER = NUMBER + 1
}

var doubleGlobalNumber = function() {
	NUMBER = NUMBER * 2
}

var doTwice = function(function1){
	function1()
	function1()
}



doTwice(incrementGlobalNumber)
assert.equal(12, NUMBER)
doTwice(doubleGlobalNumber)
assert.equal(48, NUMBER)


// Part 9

// Write a function called conditionallyInvoke that takes a function
// as input. It should invoke that input function only if 
// the value of a certain global variable, called ORACLE, is 
// "YES." Otherwise, it will does nothing.

var ORACLE = 'NO'

var conditionallyInvoke = function(function1){
	if (ORACLE === 'YES'){
		function1()
	}
}

conditionallyInvoke(doubleGlobalNumber)
assert.equal(48, NUMBER)

ORACLE = 'YES'
conditionallyInvoke(doubleGlobalNumber)
assert.equal(96, NUMBER)

// Part 10

// Make the following assertion work:
	var factory = function(){
		var factory1 = function(){
		return 'hello world'
		}
		return factory1
	}

// Part 11

// Want more?

	var factory2 = function(){
		var factory2b = function(x){
			return x
		}
		return factory2b
	} 

// Part 12

// This can't be healthy...

	var factory3 = function(x){
		var factory3b = function(){
			return x
		}
		return factory3b
	}

var assert = require('assert')
describe('Function', function() {
	describe('#addOne()', function(){
		it('should return input + 1', function(){
			assert.equal(2, addOne(1))
		})
	})
	describe('#doubleNum()', function(){
		it('should return a doubled input', function(){
			assert.equal(10, doubleNum(5))
		})
	})
	describe('#sum()', function(){
		it('should return the sum of two inputs', function(){
			assert.equal(19, sum(8, 11))
			assert.equal(104, sum(4, 100))
			assert.equal(6176, sum(867, 5309))
			assert.equal(null, sum('867', 5309))
			assert.equal(null, sum(true, 5))
			assert.equal(null, sum(5,-5))
		})
	})
	describe('#average()', function(){
		it('should return the average of two inputs', function(){
			assert.equal(10, average(8, 12))
			assert.equal(150, average(100, 200))
		})
	})
	describe('#isNegative', function(){
		it('should tell whether a number is negative or not', function(){
			assert.equal(false, isNegative(10))
			assert.equal(false, isNegative(0))
			assert.equal(true, isNegative(-999))
		})
	})
	describe('#minimum', function(){
		it('find the minimum of four input numbers', function(){
			assert.equal(0, minimum(1,2,4,0))
			assert.equal(-99, minimum(1000,-2,-99,50))
			assert.equal(-1000, minimum(-1000,-2,-99,50))
			assert.equal(-2, minimum(1000,-2,99,50))
		})
	})
	describe('#justOneString', function(){
		it('return true if one input is a string', function(){
			assert.equal(true, justOneString('a',5))
			assert.equal(true, justOneString(6,'dotron'))
			assert.equal(false, justOneString('peanut','butter'))
			assert.equal(false, justOneString(8,null))
		})
	})
	describe('#doTwice', function(){
		it('takes function as input and invokes function twice', function(){
		})
	})
	describe('#conditionallyInvoke', function(){
		it('invoke input function if ORACLE is "YES"', function(){
		})
	})
	describe('#factory', function(){
		it('should work', function(){
			assert.equal('hello world', factory()())
		})
	})
	describe('#factory2', function(){
		it('should work, too', function(){
			assert.equal('you sly dog', factory2()('you sly dog'))
			assert.equal(999, factory2()(999))
		})
	})
	describe('#factory3', function(){
		it('ok, this one also shouuld work', function(){
			assert.equal('i have reached function nirvana', factory3('i have reached function nirvana')())
			assert.equal(100, factory3(100)())
		})
	})

})