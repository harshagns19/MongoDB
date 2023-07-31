//To run mongodb as a MacOs service
brew services start <Mongodb-installed-version>

//To connect and use mongodb shell in local
mongosh

//To connect mongo on a remote shell
mongosh "mongodb://mongodb0.example.com:28015"
mongosh --host mongodb0.example.com --port 28015

//To connect mongo on a remote shell with authentication
mongosh "mongodb://mongodb0.example.com:28015" --username <username> --authenticationDatabase admin

//To see the list of databases available
show dbs;

//To identift which database we are connected to
db;

//To Switch database to another
use <database>;

//To access another db with switching the current db contect
db.getSiblingDB()

//to create a new databse
use <database name>;

//to create a new collection and inser one record
db.myCollection.insertOne( { x: 1 } );

//show collections
show collections;

//Insert multiple documents/records in a collection
db.employees.insertMany( [{"employeeId":1,"first_name":"Coralyn","last_name":"Raden","email":"craden0@multiply.com","gender":"Female","company":"Oyope","age":1,"address":"77 Summerview Plaza"},
{"employeeId":2,"first_name":"Millicent","last_name":"Woodrooffe","email":"mwoodrooffe1@abc.net.au","age":2,"address":"99128 Johnson Circle"},
{"employeeId":3,"first_name":"Zaria","last_name":"Soar","email":"zsoar2@newsvine.com","gender":"Female","company":"Gigaclub","age":3,"address":"0 Claremont Plaza"},
{"employeeId":4,"email":"gbantick3@usnews.com","gender":"Female","company":"Meezzy","age":4,"address":"78280 Glendale Circle"},
{"employeeId":5,"first_name":"Vida","last_name":"Byres","email":"vbyres4@sbwire.com","gender":"Female","company":"Edgeblab","address":"4635 Nobel Center"},
{"employeeId":6,"first_name":"Nerti","last_name":"Beckerleg","email":"nbeckerleg5@ask.com","gender":"Female","company":"Skyvu","age":6},
{"employeeId":7,"first_name":"Durand","last_name":"Alderman","email":"dalderman6@hostgator.com","gender":"Male","company":"Meembee","age":7,"address":"0345 Norway Maple Pass"},
{"employeeId":8,"first_name":"Adan","last_name":"Schohier","email":"aschohier7@pbs.org","gender":"Male","company":"Browsedrive","age":8,"address":"1483 Del Sol Lane"},
{"employeeId":9,"first_name":"Valentino","gender":"Male","company":"Kimia","age":9,"address":"0 North Avenue"},
{"employeeId":10,"first_name":"Helyn","last_name":"Billes","email":"hbilles9@elegantthemes.com","gender":"Female","company":"Myworks"}]
 );

//show all documents in a collection
db.employees.find();

//show documents based on a where filter
db.employees.find({age:{ $lt: 5 }})
db.employees.find( {employeeId :5} )

//filter with and condition
db.employees.find( {employeeId :5, first_name:'Vida'} )

//in condition with filter
db.employees.find( { company: { $in: [ "Gigaclub", "Meezzy" ] } } )

//or in filter condition
db.employees.find( { $or: [ { company: "Meezzy" }, { age: { $gt: 5 } } ] } )

//like filter condition
db.employees.find( {
     company: "Skyvu",
     $or: [ { qty: { $gt: 30 } }, { last_name: /^B/ } ] //Last name starts with B
} )

db.employees.find({})

//delete collection
db.collection_name.drop()
