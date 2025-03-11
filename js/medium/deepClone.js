// 7. Make a deep clone function in JavaScript that makes an array or a nested object without any original reference
function deepClone(obj) {
    // If the given object is a primitive value or null, simply return the value
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }
    // Create a clone object, either an array or an object,
    // depending on whether the given object is an array or not
    const clone = Array.isArray(obj) ? [] : {};
    // Iterate over each key-value pair in the given object
    for (const key in obj) {
        // If the key is not inherited from the prototype (i.e., it belongs to the object itself)
        if (obj.hasOwnProperty(key)) {
            // Recursively call deepClone on the value of each key-value pair and assign it to the clone
            clone[key] = deepClone(obj[key]);
        }
    }
    // Return the fully cloned object
    return clone;
}
// Example usage:
const originalObject = {
    name: "Alice",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown"
    },
    numbers: [1, 2, 3]
};
const clonedObject = deepClone(originalObject);
// Modify the cloned object
clonedObject.age = 31;
clonedObject.address.city = "Newtown";
clonedObject.numbers.push(4);
console.log("Original object:", originalObject);
console.log("Cloned object:", clonedObject);