/**
 * When a child function refers to variables used in its parent scope, closure occurs.
 * Closure is like a memory box which stores all the items of the parent scope that are referred to from the child scope.
*/

function sally () {
	let age = 64;
    
    return function joe () {
        const data = {
        	name: "Joe",
            parentName: "Sally",
            parentAge: age
        }
		return data
    }
}

/**
 * sally is the parent function and it declares a scope
 * age is a variable declared within the sally scope
 * joe is a function which lives in the sally scope and is returned by the sally function. You should also note that:
 * - joe defines its own scope which is a child scope of the sally scope
 * -  within the joe scope, we make reference to the variable age which belongs to sally scope (this is where 
 * closure happens because joe is referring or holding on to a resource/variable which belongs to sally).
 */

const joe = sally() // sally is invoked and returns the joe function
const joeyData = joe() // joe function is invoked and returns an object

console.log(joeyData) // we log the object returned.
