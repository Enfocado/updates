const fs = require('fs');
const faker = require('faker');

const stream = fs.createWriteStream('/Users/Dilsher/Desktop/SDC/updates/updates10.txt');


stream.once('open', () => {
    const updates = []
    for (let i = 4500000; i < 5000000; i++) {
        updates.push({
            id : i,
            title: faker.lorem.word(),
            description: faker.lorem.sentence(),
            update_date: faker.date.between('2018-06-01', '2018-08-06'),
            comments: faker.lorem.sentence(),
            likes: faker.random.number(250),
            project_id: faker.random.number(10),
            backers_only: faker.random.boolean()
        });
    }

    stream.write(JSON.stringify(updates));


    stream.end(() => console.log('saved updates 10'));
});