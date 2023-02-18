// Create database with name ITI
use ITI;

// Start create new collection named instructors following with inserts
db.createCollection("instructors");

// Insert your own data
db.instructors.insertOne({_id: 1, firstName: "Sara", lastName: "Hamada", age: 24, salary: 2500, address:{city:"cairo",street:10,building:8}, courses:["js","mvc","signalR","expressjs"]});

// Insert instructor without firstName and LastName (mongo will raise an error or not ?)
db.instructors.insertOne({_id: 2, age: 25, salary: 4000, address:{city:"cairo",street:10,building:8}, courses:["js","mvc","signalR","expressjs"]});

// Using array contained with lab folder instructors.txt file.
let instructorsArray = [{_id:6,firstName:"noha",lastName:"hesham",
                age:21,salary:3500,
                address:{city:"cairo",street:10,building:8},
                courses:["js","mvc","signalR","expressjs"]},
                
                {_id:7,firstName:"mona",lastName:"ahmed",
                age:21,salary:3600,
                address:{city:"cairo",street:20,building:8},
                courses:["es6","mvc","signalR","expressjs"]},
                
                {_id:8,firstName:"mazen",lastName:"mohammed",
                age:21,salary:7040,
                address:{city:"Ismailia",street:10,building:8},
                courses:["asp.net","mvc","EF"]},
                
                {_id:9,firstName:"ebtesam",lastName:"hesham",
                age:21,salary:7500,
                address:{city:"mansoura",street:14,building:3},
                courses:["js","html5","signalR","expressjs","bootstrap"]}
               
		
		];
		
db.instructors.insertMany(instructorsArray);


//7- Try the following queries: (all queries should be run using find or findOne)

//a- Display all documents for instructors collection
db.instructors.find();

//b- Display all instructors with fields firstName, lastName and address 
db.instructors.find({}, {_id: 0, firstName: 1, lastName: 1, address: 1});

//c- Display firstName and city(not full address) for instructors with age 21.
db.instructors.find({age: 21}, {firstName: 1, "address.city": 1});

//d- Display firstName and age for instructors live in Mansoura city.
db.instructors.find({"address.city": "mansoura"}, {firstName: 1, age: 1});


//e- Try to run these commands
//1- 
db.instructors.find({firstName:"mona"},{lastName:"ahmed"},{firstName:1,lastName:1});
//Explain the output!!
//The condition is to display instructors with first name of mon and the projection will display last name
//as ahmed, the 3rd argument will be neglected

//2- 
db.instructors.find({courses:"mvc"},{firstName:1,courses:1})
//Explain the output
// The query will display instructors who hava mvc in their courses and will display firstName and courses only




