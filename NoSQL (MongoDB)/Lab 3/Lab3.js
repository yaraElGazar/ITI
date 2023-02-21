use FacultySystemV2
db.createCollection("student", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                firstName: {bsonType: "string"},
                lastName: {bsonType: "string"},
                isFired: {bsonType: "bool"},
                facultyID: {bsonType: "number"},
                courses: {bsonType: "array"},
                grade: {bsonType: "number"}
            }
        }
    }
})

db.createCollection("faculty", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                facultyName: {bsonType: "string"},
                address: {bsonType: "string"},
            }
        }
    }
})

db.createCollection("course", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                courseID: {bsonType: "number"},
                courseName: {bsonType: "string"},
                finalMark: {bsonType: "number"}
            }
        }
    }
})

db.student.insertMany([
{
    firstName: "ali",
    lastName: "ahmed",
    isFired: false,
    facultyID: 1,
    courses: [{courseID: 1, grade: 100}, {courseID: 2, grade: 90}, {courseID: 3, grade: 80}]
    
},
{
    firstName: "ola",
    lastName: "mohamed",
    isFired: false,
    facultyID: 2,
    courses: [{courseID: 1, grade: 90}, {courseID: 2, grade: 99}, {courseID: 3, grade: 95}]
    
},
{
    firstName: "hesham",
    lastName: "ahmed",
    isFired: true,
    facultyID: 3,
    courses: [{courseID: 1, grade: 50}, {courseID: 2, grade: 40}, {courseID: 3, grade: 40}]
    
}
])

db.faculty.insertMany([
{
    facultyName: "Engineering",
    facultyID: 1,
    address: "cairo"   
},
{
    facultyName: "MassCom",
    facultyID: 2,
    address: "alex"
    
},
{
    facultyName: "Medicine",
    facultyID: 3,
    address: "mansoura"
    
}
])


db.course.insertMany([
{
    courseName: "JS",
    courseID: 1,
    finalMark: 100   
},
{
    courseName: "React",
    courseID: 2,
    finalMark: 100
    
},
{
    courseName: "Node",
    courseID: 3,
    finalMark: 100
    
}
])

//2. Display each student Full Name along with his average grade in all courses. $concat
db.student.aggregate ([
    {
        $project: {
            FullName: {$concat: ["$firstName", " ", "$lastName"]},
            AverageGrade: {$avg: "$courses.grade"}
        }
    }
])

//3. Using aggregation display the sum of final mark for all courses in Course collection.
db.course.aggregate ([
    {
    $group: {
       _id: null,
       SumFinalMark: { $sum: "$finalMark" }
    }
  }
])

//4. Implement (one to many) relation between Student and Course, by adding array of Courses IDs in the student object. 
//• Select specific student with his name, and then display his courses.
db.student.aggregate([
      {
        $match: {firstName: "ola"}
      },
    {
    $lookup:{
       from:"course" ,
       localField:"courses.courseID",
       foreignField:"courseID",
       as:"Course_ID"
    }
}

])

//4.Implement relation between Student and faculty by adding 
//the faculty object in the student using _id Relation using 
//$Lookup. 
//• Select specific student with his name, and then display 
//his faculty

db.student.aggregate([
      {
        $match: {firstName: "ola"}
      },
    {
    $lookup:{
       from:"faculty" ,
       localField:"facultyID",
       foreignField:"facultyID",
       as:"Faculty_ID"
    }
},
{
    $project: {"First_Name":"$firstName","facultyName":"$Faculty_ID.facultyName"}
}

])




