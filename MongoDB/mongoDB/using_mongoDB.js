

// Create a database called 'my_first_db'.
use my_first_db


// Create students collection.
db.createCollection("students")


// Create 5 students with the appropriate info.
db.students.insertOne({name: 'Tod', home_state: 'Iowa', lucky_number: 13, birthday: {month: 5, day: 19, year: 1975}})
// _id: ObjectId('645be90f1549b32fb685fdaa')

db.students.insertOne({name: 'Ryan', home_state: 'Kansas', lucky_number: 27, birthday: {month: 2, day: 25, year: 2002}})
// _id: ObjectId('645be95a1549b32fb685fdab')

db.students.insertOne({name: 'Ben', home_state: 'Florida', lucky_number: 85, birthday: {month: 7, day: 27, year: 1854}})
// _id: ObjectId('645be9991549b32fb685fdac')

db.students.insertOne({name: 'Walter', home_state: 'New Mexico', lucky_number: 7, birthday: {month: 5, day: 13, year: 1973}})
// _id: ObjectId('645bea011549b32fb685fdad')

db.students.insertOne({name: 'Jerry', home_state: 'California', lucky_number: 1, birthday: {month: 1, day: 1, year: 2001}})
// _id: ObjectId('645bea3f1549b32fb685fdae')


// Get all students
db.students.find()


// Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).
db.students.findOne({home_state: "California"})


// Get all students whose lucky number is greater than 3
db.students.find({lucky_number: {$gt: 3}})


// Add a field to each student collection called 'interests' that is an ARRAY. It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.
db.students.updateMany({}, {$set: {interests: ['coding', 'brunch', 'MongoBD']}})


// Add some unique interests for each particular student into each of their interest arrays.
db.students.updateOne({_id: ObjectId('645be90f1549b32fb685fdaa')}, {$push: {interests: 'reading'}})

db.students.updateOne({_id: ObjectId('645be95a1549b32fb685fdab')}, {$push: {interests: 'hiking'}})

db.students.updateOne({_id: ObjectId('645be9991549b32fb685fdac')}, {$push: {interests: 'singing'}})

db.students.updateOne({_id: ObjectId('645bea011549b32fb685fdad')}, {$push: {interests: 'cooking'}})

db.students.updateOne({_id: ObjectId('645bea3f1549b32fb685fdae')}, {$push: {interests: 'chillin'}})


// Add the interest 'taxes' into someone's interest array.
db.students.updateOne({_id: ObjectId('645be90f1549b32fb685fdaa')}, {$push: {interests: 'taxes'}})


// Remove the 'taxes' interest you just added.
db.students.updateOne({_id: ObjectId('645be90f1549b32fb685fdaa')}, {$pull: {interests: 'taxes'}})


// Remove all students who are from California.
db.students.findOneAndDelete({home_state: "California"})


// Remove a student by name.
db.students.findOneAndDelete({name: "Ben"})


// Remove a student whose lucky number is greater than 5 (JUST ONE)
db.students.findOneAndDelete({lucky_number: {$gt: 5}})


// Add a field to each student collection called 'number_of_belts' and set it to 0.
db.students.updateMany({}, {$set: {number_of_belts: 0}})


// Increment this field by 1 for all students in Washington (Seattle Dojo).
db.students.updateMany({location: "Washington"}, {$inc: {number_of_belts:1}})


// Add a 'updated_on' field, and set the value as the current date.
db.students.updateMany({},  {$currentDate: {updated_on: true}})