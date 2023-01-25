// 3) create your own object that has [Symbol.replace] method so
// that if any long string (e.g. its length exceed 15 characters )called
// replace and pass your object as replace method parameter it will
// display only 15 character of string with terminating “…”

let myObj = {
  [Symbol.replace]: function (str, index) {
    if (str.length > 15) {
      return str.substring(0, index) + "...";
    } else {
      return str;
    }
  },
};
let word1 = "abc";
let words =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsa, fugiat quia repudiandae quis iste, similique distinctio doloremque consequatur neque dolorem perspiciatis minus aperiam ipsum nam animi. Atque, praesentium perferendis?";
console.log(words.replace(myObj, 15));
console.log(word1.replace(myObj, 15));
