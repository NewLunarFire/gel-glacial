var addons = {
	"marks" : {
		"contentScriptFile" : ["jquery.js", "marks.js"],
		"contentStyleFile" : ["style.css"],
	}
}

//paths is relative to data/ folder
var paths = {
	"jquery.js" : "./lib/external/jquery-2.1.4.min.js",
	"marks.js" : "./addons/marks.js",
	"style.css" : "./style.css",	
}

function get_addons(){
	var new_addons = {};
	
	Object.keys(addons).forEach(function(key){
		var addon = addons[key];
		new_addons[key] =  {};
		new_addons[key].contentScriptFile = addon.contentScriptFile.map(function(script){
			return paths[script];
		})
		new_addons[key].contentStyleFile = addon.contentStyleFile.map(function(style){
			return paths[style];
		})
	})
	
	return new_addons;
}

module.exports = get_addons();