var str = require('fs').readFileSync('crushed.js', 'utf-8');

var rawStrings = '';
str.replace(/('|")(\\\1|.)*\1/g, function(s){rawStrings += s;});


var usedCharCodes = rawStrings.split('').reduce(function(acc, v){acc[v.charCodeAt()] = v;return acc;}, []);
usedCharCodes[92] = '\\'; // Very bad replacement char

function getUnusedCharCode(){
	for (var i=0x20; i<0x7F; i++){
		if (!usedCharCodes[i]) return i;
	}
}

[
	0x00, // Zero
	0x09, // Tab
	0x0d, // \r
	0x0a, // \n
	0x01,
	0x02,
	0x03,
	0x04,
	0x05,
	0x06,
	0x07,
	0x08,
	0x0b,
	0x0c,
	0x0e,
	0x0f,
	0x10,
	0x11,
	0x12,
	0x13,
	0x14,
	0x15,
	0x16,
	0x17,
	0x18,
	0x19,
	0x1a,
	0x1b,
	0x1c,
	0x1d,
	0x1e,
	0x1f
].forEach(function(dropCode){
	if (!usedCharCodes[dropCode]) return;
	var newCharCode = getUnusedCharCode();
	if (newCharCode == null) return;
	usedCharCodes[newCharCode] = true;
	str = str.replace(new RegExp('\\u00' + ('0' + dropCode.toString(16)).slice(-2), 'g'), String.fromCharCode(newCharCode));
});

require('fs').createWriteStream('crushed_clean.js').write(str);