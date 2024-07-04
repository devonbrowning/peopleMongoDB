db.people.find();
db.people.count();
db.people.find({state: "Arizona”});
db.people.find({ state: "Arizona", gender: "Male" });
db.people.find({state: {$in: ["Arizona", "New Mexico”]}});
db.people.find({age: {$lt: 40}});
db.people.find({ state: "Florida", gender: "Female", age: {$gte: 40, $lte: 45}});
db.people.find({first_name: /^H/i});
db.people.find({state: "Michigan"}).sort({ first_name: 1});
db.people.find({$or: [{state: "Virginia"}, {first_name: "Virginia”}]});
db.people.find({age: {$lt: 30}}, {first_name: 1, last_name: 1, _id: 0 });
db.people.find({state: "Montana"}, {age: 0});
db.people.find({email: /.edu$/}, {email: 1, _id: 0});

db.people.count({children: {$elemMatch: {age: {$lt: 4}}}});
db.people.find({$or: [{children: {$exists: false}}, {children: {$size: 0}}]});
db.people.find({children: {$exists: true, $not: {$size: 0}}});
