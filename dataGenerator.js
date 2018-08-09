const fs = require('fs');
const faker = require('faker');

const stream = fs.createWriteStream('projects.csv', { flag: 'a'});

stream.once('open', () => {
    const projects = []
    for(let i = 9000001; i < 10000000; i++){
        stream.write(
            `${i},
            ${faker.date.past()},
            ending_date: faker.date.future(),
            backers:faker.random.number(),
            money_raised: faker.finance.amount(),
            goal: faker.finance.amount(2000,60000,2,'$')'
        );
    }

    stream.write(JSON.stringify(projects));


    stream.end(() => console.log('saved 10'));
});