import * as fs from 'fs-extra';
import * as path from 'path';
import * as Handlebars from 'handlebars';

const gitbook: any = require('gitbook');

export class GitbookEngine {
    constructor() {

    }
    generate(sourcePath: string, destinationPath:String) {
        return new Promise(function(resolve, reject) {
            gitbook.commands[0].exec([sourcePath, destinationPath], {
                log: 'info',
                format: 'website',
                timing: false
            }).then(function() {
                resolve();
            }, function() {
                reject('Error during additional doc generation');
            });
        });
    }
};
