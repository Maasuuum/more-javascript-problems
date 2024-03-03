const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {id: 121, class: 11, name: 'Agun'};
const friends = [13, 12, 18, 21, 10, 21, 22];
function aa(num1, num2){
    return num1 + num2;
}
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
// check array using Array.isArray
console.log(Array.isArray(friends));
console.log(typeof aa);

// to know some specific words or numbers that is available or not in array we use array name.includes()
console.log(friends.includes(19)); 
console.log(friends.includes(21)); 

// concat use for add together with two ore more more arrays
const newFriends = [12, 13, 18, 20, 22];
const allFriends = newFriends.concat(friends);
console.log(allFriends);