'use strict';

class Hey {
    constructor(name){
        this.name = name;
    }
    say(){
        console.log('Hello,', name);
    }
}

module.exports = Hey;

var parser = new require('xml2js').Parser(); // scripts to parse XML