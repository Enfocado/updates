const fs = require('fs');
const faker = require('faker');

const stream = fs.createWriteStream('projects.csv', { flag: 'a'});

stream.once('open', () => {
    stream.write('id,name \n', 'utf-8')
    for(let i = 1; i <= 10000000; i++){
        stream.write(i+',Project '+ i + '\n' , 'utf-8');

    }

    stream.end(() => console.log('saved !'));
});
