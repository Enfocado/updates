const fs = require('fs');
const faker = require('faker');
const stream = fs.createWriteStream('updates2.csv');


stream.once('open', () => {
	stream.write('id,title,description,update_date,comments,likes,project_id,backers_only \n', 'utf-8')
	function randomDate(start, end) {
		return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
	}

	function formatDate(date) {
		var d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;

		return [year, month, day].join('-');
	}
	for (let i = 10000001; i < 20000000; i++) {
		stream.write(`${i},${faker.lorem.word()},${faker.lorem.sentence()},${formatDate(randomDate(new Date(2012, 0, 1), new Date()))},${faker.lorem.sentence()},${faker.random.number(250)},${faker.random.number(10000000)},${faker.random.boolean()}\n`
			);
	}

	
	stream.end(() => console.log('saved updates2.csv'));
});

