#!/usr/bin/env node
 
// Dependencies
// var program = require('commander');
const dirTree = require('directory-tree');
var fs = require('fs');

// Command parameter parser
// program
//   .version('0.0.1')
//   .option('-d, --dir [value]', 'Set target directory')
//   .parse(process.argv);



// Recursively parse all the directories
function recurisvePrintChildren(root, depth, url) {
    if (root.type === "directory") {
        // console.log("Dir",root.name,depth);
        records.push({"type":"dir", "name":root.name, "depth":depth, "url":url+root.name+"/"})
        if (root.children.length <= 0) { return } // empty directory

        for (var i = 0; i < root.children.length; i++) {
            recurisvePrintChildren(root.children[i], depth + 1, url+root.name+"/") // depth increment
        }
    } else {
        // console.log("Child",root.name,depth);
        records.push({"type":"file", "name":root.name, "depth":depth, "url":url+root.name})
    }
}


// The module to output
var fileTree = function(dir) {

    // Get the directory tree
    const tree = dirTree(dir);

    // Initialization
    records = []    

    // Main execution
    recurisvePrintChildren(tree, 0, "")
    console.log(records);

    // Writing to FILE
    // Creates file output stream
    var logger = fs.createWriteStream('./out.md', { flags: 'a' }) // Appendable

    logger.write('# File Directory of ' + dir + "\n")   // Write the title

    for (var j=0;j<records.length;j++){                         // Write all the records
        var tabs = "\t".repeat(records[j].depth)
        if (records[j].type === "dir") {    // directory
            logger.write(tabs + "- " + "**[" + records[j].name + "]("+ records[j].url +")**" + "\n")
        } else {                            // file
            logger.write(tabs + "- " + "[" + records[j].name + "]("+ records[j].url +")" + "\n")
        }
    }

    // Ends file output stream
    logger.end()
}


exports.fileTree = fileTree;