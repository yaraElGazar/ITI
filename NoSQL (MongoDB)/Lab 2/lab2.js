db.instructors.insertOne({_id:10,firstName:"ahmed",lastName:"hesham",
                age:26,salary:3500,
                address:{city:"cairo",street:10,building:8},
                courses:["js","mvc","signalR","expressjs"]});
                
db.instructors.insertOne({_id:11,firstName:"ali",lastName:"hesham",
                age:26,salary:3500,
                address:{city:"cairo",street:10,building:8},
                courses:["js","mvc","jQuery","expressjs"]});
                
db.instructors.insertOne({_id:12,firstName:"mohamed",lastName:"hesham",
                age:26,salary:3500,
                address:{city:"cairo",street:10,building:8},
                courses:["js","mvc","signalR","jQuery"]});

//a- Display all documents in instructors collection
db.instructors.find();

//b- Display all instructors with salaries greater than 4000 (only show firstName and salary)
db.instructors.find({salary: {$gt: 4000}}, {firstName: 1, salary: 1});

//c- Display all instructors with ages less than or equal 25.
db.instructors.find({age: {$lte: 25}});

//d- Display all instructors with city mansoura and sreet number 10 or 14 only display (firstname,address,salary).
db.instructors.find({"address.city":"mansoura", "address.street":{$in:[10, 14]}}, {firstName:1, address: 1, salary: 1});

//e- Display all instructors who have js and jquery in their courses (both of them not one of them).
db.instructors.find({$and:[{courses:"js"}, {courses: "jQuery"}]});

//f- Display number of courses for each instructor and display first name with number of courses.
db.instructors.find({courses: {$exists: true}, firstName: {$exists: true}}).forEach((instructor) => {
    print(`Instructor ${instructor.firstName} has ${instructor.courses.length} courses`)
});

//g- Write mongodb query to get all instructors that have firstName and 
//lastName properties , sort them by firstName ascending then by 
//lastName descending and finally display their data FullName and age 
//Note: use mongoDb sort method not javascript array method
db.instructors.find({firstName: {$exists: true}, lastName: {$exists: true}}).sort({firstName : 1, lastName: -1}).forEach((instructor) => {
    print(`Fullname: ${instructor.firstName} ${instructor.lastName}, Age: ${instructor.age}`)
});

//BONUS: create new collection with step g values data and name it 
//instructorsData
db.createCollection("instructorsData");
db.instructors.find({firstName: {$exists: true}, lastName: {$exists: true}}).sort({firstName : 1, lastName: -1}).forEach((instructor) => {
    db.instructorsData.insertOne(instructor)
});

db.instructorsData.find();

//h- Find all instructors that have fullName that contains “mohammed”.
db.instructors.find({$or:[{firstName: "mohamed"}, {lastName: "mohamed"}]});

//i- Delete instructor with first name “ebtesam” and has only 5 courses in 
//courses array
db.instructors.deleteOne({firstName: "ebtesam", courses: {$size: 5}});

//j- Add active property to all instructors and set its value to true.
db.instructors.updateMany({}, {$set: {active: "true"}});

//k- Change “EF” course to “jquery” for “mazen mohammed” instructor (without knowing EF Index)
db.instructors.updateMany({firstName: "mazen", courses: "EF"}, {$set: {"courses.$": "jQuery"}});

//l- Add jquery course for “noha hesham”.
db.instructors.updateMany({firstName: "noha", lastName: "hesham"}, {$push: {courses: "jQuery"}});

//m- Remove courses property for “ahmed hesham ” instructor
db.instructors.updateOne({firstName: "ahmed", lastName: "hesham"}, {$unset: {courses: "dummy"}});

//n- Decrease salary by 500 for all instructors that has only 3 courses in their 
//list ($inc)
db.instructors.updateMany({courses: {$size: 3}}, { $inc: {salary: -500} });

//o- Rename address field for all instructors to fullAddress
db.instructors.updateMany({}, {$rename: {address: "fullAddress"}});

//p- Change street number for noha hesham to 20
db.instructors.updateOne({firstName: "noha", lastName: "hesham"}, {$set: {"fullAddress.street": 20}});



