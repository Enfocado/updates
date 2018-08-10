const fs = require('fs');
const faker = require('faker');

const stream = fs.createWriteStream('updates.csv');


stream.once('open', () => {
    stream.write('id,title,description,update_date,comments,likes,project_id,backers_only \n', 'utf-8')
    for (let i = 0; i < 10000000; i++) {
        stream.write(`${i},${faker.lorem.word()},${faker.lorem.sentence()},${faker.date.recent()},${faker.lorem.sentence()},${faker.random.number(250)},${faker.random.number(10000000)},${faker.random.boolean()}\n`
        );
    }

    


    stream.end(() => console.log('saved updates.csv'));
});