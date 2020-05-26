let AWS = require("aws-sdk");
let fs = require('fs');

AWS.config.update({region: "us-east-1"});
let docClient = new AWS.DynamoDB.DocumentClient();

async function pushDir ( dir, id ) {
    let options = fs.readFileSync( dir + "\\options.json", 'utf8')
    let process = fs.readFileSync( dir + "\\process.js", 'utf8')
    let params = {
        TableName: 'fragments',
        Item:{ id, options, process }
    }
    docClient.put( params, (err, data ) => {
        if ( err ) console.log('Failed putting ' + id )
        else console.log('Successfully put ' + id )
    })
}

fs.readdir( __dirname + "/fragments", (e,files) => {
    files.forEach( name => { 
        if ( name == 'types.ts' ) return;
        pushDir( __dirname + '\\fragments\\' + name, name )
    })
})
