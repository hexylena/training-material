var lunr = require("lunr"),
	fs = require("fs");


const data = fs.readFileSync('index.json', "utf8");
var idx = lunr.Index.load(JSON.parse(data));

idx.search(process.argv.slice(2).join(' ')).slice(0, 20).forEach(x => {
	console.log(`${x.score}\t${x.ref}\t${Object.keys(x.matchData.metadata).join(' ')}`)
})
