function courseInfo(obj) {
  let defaultObj = {
    courseName: "ES6",
    courseDuration: "3 days",
    courseOwner: "JavaScript",
  };

  // Check if the input parameter contains invalid properties
  if (typeof obj !== "undefined") {
    for (key of Object.keys(obj)) {
      if (defaultObj.hasOwnProperty(key) === false) {
        let error = new Error(`invalid property of ${key}`);
        throw error;
      }
    }
  }

  let result = Object.assign({}, defaultObj, obj);
  return `Course name is: ${result.courseName}, course duration is: ${result.courseDuration} and course owner is: ${result.courseOwner}`;
}

// Test cases
let course1 = {
  courseName: "Sass",
  courseDuration: "4 days",
  courseOwner: "CSS",
};

let course2 = {
  courseName: "Node.js",
};

let course3 = {
  name: "React",
};

console.log(courseInfo());
console.log(courseInfo(course1));
console.log(courseInfo(course2));
console.log(courseInfo(course3));
