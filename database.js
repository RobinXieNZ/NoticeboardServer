/**
*	This is a simple data base, just for Node.js practice.
*/
var fs = require('fs');
const filepath = __dirname + '/data.json';
var list;

try{
	list = JSON.parse(fs.readFileSync(filepath));
}catch(e){
	list = [];
}

module.exports = {
	// add post
	add(post){
		list.push(post);
		this.store();
	},
	// delet post by index
	del(index){
		list.splice(index,1);
		this.store();
	},
	// update the post by index and new post
	update(index, newPost){
		list.splice(index,1,newPost);
		this.store();
	},
	get list(){
		return list;
	},
	store(callback){
		callback = callback || function(){};
		fs.writeFile(filepath,JSON.stringify(list),callback);
	}
};