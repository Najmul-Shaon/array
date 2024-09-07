let friends = ["Alice", "Bob", "Charlie", "David", "Emma"];
// friends.reverse();
// console.log(friends)
const rev_friends = [];
for (const friend of friends) {
  //   console.log(friend);
  rev_friends.unshift(friend);
}
// console.log(rev_friends);
const rev_friends_v2 = [];
for (let i = 0; i < friends.length; i++) {
  const friend = friends[i];
  rev_friends_v2.unshift(friend);
}
// console.log(rev_friends_v2)

// by reverse loop
const rev_friends_v3 = [];
for (let i = friends.length - 1; i >= 0; i--) {
  const friend = friends[i];
  //   console.log(friend);
  rev_friends_v3.push(friend);
}
// console.log(rev_friends_v3);

const statement = "I am a hard working person";
const rev_statement = statement.split(" ").reverse().join(' ');
console.log(statement);
console.log(rev_statement);
