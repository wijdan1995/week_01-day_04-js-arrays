// Arrays
const person = ['Wijdan', 'Kuddah', 2, 'black', ['Jeddah', 'KSA']]
person.length // give me how many items are there
person[0] // give me the item in this positionn
person[2] = 1 // change what inside 
person.push("cat") // add to the last place return the new length
person.unshift("<3") // add to the first place
person.indexOf("black") // where is this item
person.pop()// delete the last item return the deleted item
person.shift() // delet the first one
person.reverse() // change the order
person.join(" and ") // make them into one item seperted with " and  " won't afficted the original you can save it in another string 


// Loop through array 
const developers = ['Ahmad', 'Mike', 'Sami']
for (let i = 0; i < developers.length; i++) {
    console.log('Hello ' + developers[i])
}

// 1
const arr = [2, 3, 4];
arr.unshift(0)
arr.unshift(1)
arr.push(5)
arr.push(6)
arr.push(7)

//2
return the new length

//3
const numbers = [4, 9, 7, 2, 1, 8];
for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * 2)
}

//4
const numbers = [4, 9, 7, 2, 1, 8];
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
        console.log(numbers[i] * 2)
    } else {
        console.log(numbers[i])
    }
}

//5
const colors = ['Blue', 'Red', 'Green', 'Gray', 'Black'];
for (i = 0; i < colors.length; i++) {
    console.log("My #" + (i + 1) + " choice is " + colors[i]);
}

//6
const ages = [12, 24, 54, 23, 45, 13, 54, 34, 26, 18, 15, 34, 23, 28];
for (i = 0; i < ages.length; i++) {
    if (ages[i] > 21) {
        console.log(ages[i]);
    }
}