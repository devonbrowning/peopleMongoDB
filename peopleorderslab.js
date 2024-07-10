// 1 
db.people.aggregate([{$group: {_id: null, avgAge: { $avg: "$age"}}}])

// 2
db.people.aggregate([{$group: {_id: "$gender", avgAge: {$avg: "$age"}}}])

//3
db.people.aggregate([{$group: {_id: "$gender", genderCount: {$count: {}}}}])

//4
db.people.aggregate([{$sort: {age: -1}},{$limit: 3}])

//5
db.people.aggregate([{$sort: {age: 1}}, {$limit: 5}, {$project: {name: {$concat: ["$first_name", " ", "$last_name"]}, age: true, _id: false}}])

// 6 
db.people.aggregate([{$group: {_id: null, avgNumChildren: {$avg: {$size: '$children'}}}}])

// 7
db.people.aggregate([{$unwind: '$children'}, {$match: {state: 'Michigan', 'children.age': {$lt: 10}}}, {$project: {'children.name': true, 'children.age': true}}])

// 8
db.people.aggregate([{$unwind: "$children"}, {$group: {_id: "$state", avgChildAge: {$avg: "$children.age"}}}, {$sort: {avgChildAge: -1}}])

// orders collection
// 9
db.orders.aggregate([{$group: {_id: null, totalSales: {$sum: "$total"}}}]);

// 10
db.orders.aggregate([{$match: {date: '2017-05-22'}}, {$group: {_id: null, totalSales: {$sum: '$total'}}}])

// 11
db.orders.aggregate([{$group: {_id: "$date", numOrders: {$count: {}}}}, {$sort: {numOrders: -1}}, {$limit: 1}])

// 12
db.orders.aggregate([{$group: {_id: "$date", sumTotal: {$sum: "$total" }}}, {$sort: {total: -1 }}, {$limit: 1}, {$project: {date: true, sumTotal: true, _id: false}}]);

//13
db.orders.aggregate([{$project: {items: true}}, {$unwind: "$items"}, {$group: {_id: "$items.product", totalQuantity: {$sum: "$items.count" }}}, {$sort: {totalQuantity: -1}}, {$limit: 3}])

//14
db.orders.aggregate([{$unwind: "$items"}, {$group: {_id: "$items.product", totalRevenue: {$sum: {$multiply: ["$items.price", "$items.count"]}}}}, {$sort: {totalRevenue: -1 }}, {$limit: 1}])









