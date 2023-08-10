//For CSC669 Project
function doRemoveSpace() {
	var input = document.getElementById('input').value;
	var newInput = input.split(" ").join("");
	newInput = newInput.replace(/[^a-zA-Z]/g, '').toUpperCase();
	document.getElementById('input').value = newInput;
}

function countSingle() {
	var string = document.getElementById('input').value;
	let single = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	
	//Count frequencies of single character
	for (let i=0; i<string.length; i++) {
		let cha = string.charAt(i);
		if (cha == "A") 
			single[0] =single[0]+1; 
		else if (cha == "B") 
			single[1] = single[1]+1;
		else if (cha == "C") 
			single[2] = single[2]+1;
		else if (cha == "D") 
			single[3] = single[3]+1;
		else if (cha == "E") 
			single[4] = single[4]+1;
		else if (cha == "F") 
			single[5] = single[5]+1;
		else if (cha == "G") 
			single[6] = single[6]+1;
		else if (cha == "H") 
			single[7] = single[7]+1;
		else if (cha == "I") 
			single[8] = single[8]+1;
		else if (cha == "J") 
			single[9] = single[9]+1;
		else if (cha == "K") 
			single[10] = single[10]+1;
		else if (cha == "L") 
			single[11] = single[11]+1;
		else if (cha == "M") 
			single[12] = single[12]+1;
		else if (cha == "N") 
			single[13] = single[13]+1;
		else if (cha == "O") 
			single[14] = single[14]+1;
		else if (cha == "P") 
			single[15] = single[15]+1;
		else if (cha == "Q") 
			single[16] = single[16]+1;
		else if (cha == "R") 
			single[17] = single[17]+1;
		else if (cha == "S") 
			single[18] = single[18]+1;
		else if (cha == "T") 
			single[19] = single[19]+1;
		else if (cha == "U") 
			single[20] = single[20]+1;
		else if (cha == "V") 
			single[21] = single[21]+1;
		else if (cha == "W") 
			single[22] = single[22]+1;
		else if (cha == "X") 
			single[23] = single[23]+1;
		else if (cha == "Y") 
			single[24] = single[24]+1;
		else if (cha == "Z") 
			single[25] = single[25]+1;
	}
		
	let length = string.length;
	//put into table
	document.getElementById('value0').innerHTML = single[0];
	document.getElementById('f0').innerHTML = (single[0]/length).toFixed(2);
	document.getElementById('value1').innerHTML = single[1];
	document.getElementById('f1').innerHTML = (single[1]/length).toFixed(2);
	document.getElementById('value2').innerHTML = single[2];
	document.getElementById('f2').innerHTML = (single[2]/length).toFixed(2);
	document.getElementById('value3').innerHTML = single[3];
	document.getElementById('f3').innerHTML = (single[3]/length).toFixed(2);
	document.getElementById('value4').innerHTML = single[4];
	document.getElementById('f4').innerHTML = (single[4]/length).toFixed(2);
	document.getElementById('value5').innerHTML = single[5];
	document.getElementById('f5').innerHTML = (single[5]/length).toFixed(2);
	document.getElementById('value6').innerHTML = single[6];
	document.getElementById('f6').innerHTML = (single[6]/length).toFixed(2);
	document.getElementById('value7').innerHTML = single[7];
	document.getElementById('f7').innerHTML = (single[7]/length).toFixed(2);
	document.getElementById('value8').innerHTML = single[8];
	document.getElementById('f8').innerHTML = (single[8]/length).toFixed(2);
	document.getElementById('value9').innerHTML = single[9];
	document.getElementById('f9').innerHTML = (single[9]/length).toFixed(2);
	document.getElementById('value10').innerHTML = single[10];
	document.getElementById('f10').innerHTML = (single[10]/length).toFixed(2);
	document.getElementById('value11').innerHTML = single[11];
	document.getElementById('f11').innerHTML = (single[11]/length).toFixed(2);
	document.getElementById('value12').innerHTML = single[12];
	document.getElementById('f12').innerHTML = (single[12]/length).toFixed(2);
	document.getElementById('value13').innerHTML = single[13];
	document.getElementById('f13').innerHTML = (single[13]/length).toFixed(2);
	document.getElementById('value14').innerHTML = single[14];
	document.getElementById('f14').innerHTML = (single[14]/length).toFixed(2);
	document.getElementById('value15').innerHTML = single[15];
	document.getElementById('f15').innerHTML = (single[15]/length).toFixed(2);
	document.getElementById('value16').innerHTML = single[16];
	document.getElementById('f16').innerHTML = (single[16]/length).toFixed(2);
	document.getElementById('value17').innerHTML = single[17];
	document.getElementById('f17').innerHTML = (single[17]/length).toFixed(2);
	document.getElementById('value18').innerHTML = single[18];
	document.getElementById('f18').innerHTML = (single[18]/length).toFixed(2);
	document.getElementById('value19').innerHTML = single[19];
	document.getElementById('f19').innerHTML = (single[19]/length).toFixed(2);
	document.getElementById('value20').innerHTML = single[20];
	document.getElementById('f20').innerHTML = (single[20]/length).toFixed(2);
	document.getElementById('value21').innerHTML = single[21];
	document.getElementById('f21').innerHTML = (single[21]/length).toFixed(2);
	document.getElementById('value22').innerHTML = single[22];
	document.getElementById('f22').innerHTML = (single[22]/length).toFixed(2);
	document.getElementById('value23').innerHTML = single[23];
	document.getElementById('f23').innerHTML = (single[23]/length).toFixed(2);
	document.getElementById('value24').innerHTML = single[24];
	document.getElementById('f24').innerHTML = (single[24]/length).toFixed(2);
	document.getElementById('value25').innerHTML = single[25];
	document.getElementById('f25').innerHTML = (single[25]/length).toFixed(2);
}

function countDigraphs() {
	let string = document.getElementById('input').value;
	let digraphs = {};
	
	for (let i=0; i<string.length-1; i++) {
		let digraph = string.substr(i,2);
		if (digraphs[digraph] === undefined) {
			digraphs[digraph] =1;
		} else {
			digraphs[digraph] = digraphs[digraph]+1;
		}
	}
	//filter digraph with more than 1 occurences
	let filteredDigraphs = Object.entries(digraphs).filter(([digraph, count]) => count>1);
	
	//sort the digraphs by occurrence count in descending order
    filteredDigraphs.sort((a, b) => b[1] - a[1]);
	
	let output="The digraph with more than 1 occurrences: ";
	for (let [digraph, count] of filteredDigraphs) {
		output = output.concat(digraph,": ", count,", ")
	}
	
	document.getElementById('result').value = output;
}

function countTrigraphs() {
	let string = document.getElementById('input').value;
	let trigraphs = {};
	
	for (let i=0; i<string.length-2; i++) {
		let trigraph = string.substr(i,3);
		if (trigraphs[trigraph] === undefined) {
			trigraphs[trigraph] =1;
		} else {
			trigraphs[trigraph] = trigraphs[trigraph]+1;
		}
	}
	//filter trigraph with more than 1 occurences
	let filteredTrigraphs = Object.entries(trigraphs).filter(([trigraph, count]) => count>1);
	
	//sort the trigraphs by occurrence count in descending order
    filteredTrigraphs.sort((a, b) => b[1] - a[1]);
	
	let output="The trigraph with more than 1 occurrences: ";
	for (let [trigraph, count] of filteredTrigraphs) {
		output = output.concat(trigraph,": ", count,", ")
	}
	
	document.getElementById('result').value = output;
}

function doSubstitute() {
	let input = document.getElementById('input').value;
	let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let plaintext = input;
	
	for (let i=0; i<alphabet.length; i++) {
		if (document.getElementById('c'+i).value != "" && document.getElementById('c'+i).value != " ") {
			plaintext = plaintext.replace(RegExp(alphabet.charAt(i),'g'), 
			document.getElementById('c'+i).value.toLowerCase());
		}
	}
	document.getElementById('result').value = plaintext;
}