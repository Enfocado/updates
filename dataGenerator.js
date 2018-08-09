const fs = require('fs');
const faker = require('faker');

const stream = fs.createWriteStream('/Users/Dilsher/Desktop/SDC/updates/projects10.txt');

stream.once('open', () => {
    const projects = []
    for(let i = 9000001; i < 10000000; i++){
        projects.push({
            id : i,
            date_created: faker.date.past(),
            ending_date: faker.date.future(),
            backers:faker.random.number(),
            money_raised: faker.finance.amount(),
            goal: faker.finance.amount(2000,60000,2,'$'),
        });
    }

    stream.write(JSON.stringify(projects));


    stream.end(() => console.log('saved 10'));
});