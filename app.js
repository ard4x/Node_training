const fs = require('fs');
const spawn = require('child_process').spawn;

var name = process.argv[2],
    command = process.argv[3];

fs.watch(name, function () {
    switch (command){
        case 'copy':
            var newName = (new Date()).getTime() + name;
            spawn('cmd', [
                '/S',
                '/C',
                'copy',
                name, newName]
            ).stdout.pipe(process.stdout);
            console.log('Copy name is', newName);

            break;
        case 'del':
            spawn('cmd', [
                    '/S',
                    '/C',
                    'del',
                    name]
            ).stdout.pipe(process.stdout);
            break;
    }
});
