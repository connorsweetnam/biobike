var processed_sequence = new String();
var gene_list = new Array();
var lay_out = new String();

function processSequence(msg)
{
alert("Code is in processSequence now");
	/*//var seq = "ATGTATCGTTGCTTCTCCGTGTCAGTCGGTGAGTGTTAGGATCTTGCCTACTGGGTATGTCCCAAAATGATTACAACTTAAAAGCTTATTCTAGGTCTAGCGTGTCTGGATGCTAAATTGATGCTTTATCTTCTATTGTGACGATTAGCAGCAAAGGTGGTGGATAATGGAAATTCCCATAGAAAGTCTGTGGAGTCAGGTACTAGAGCGCCTACAGGTTGAACTATCCCGACCGACCTTTGAAACTTGGATAAAAACTGCTAGTGCGGAGCGATTAGAAAATAATTGCTTAGTAATCCGCACTCCTAACCCTTTTGCTCGTAATTGGTTACAGAAGTATTACATCAATACCATTGCTCATGCAGTACAAGATATTCTCGGTCATCCCGTAGGAATTTACATTACTGTTGCTCAAGGTGATGAAGTTTCTCATTTTAGTGAACGGGAGGTTTCTTGGGAATCAACAAATCCTAGCAGTATTCCAGAATCCTTACCTCATCACAATCATAAAACTACTGAATTAAATTCTAAATATGTCTTTTCACGATTTGTAGTTGGTGCCAACAATCGGATGGCTCACGCTGCTTCTTTGGCAGTTGCAGAATCTCCCGGTAAAGAATTTAATCCTTTATTTTTATGCGGTGGGGTAGGTTTAGGGAAAACTCATCTGATGCAAGCTATTGGTCATTATCGCTGGAAAATTTGTCCTGATTGTAAAATATTTTATGTTTCTACTGAACAGTTTACTAATGATTTAATTACAGCGATTCGTAAAGATAGTATGCAAAGTTTTCGAGAACATTATCGAGCTGCTGATGTTTTATTAGTTGATGATATTCAGTTTCTTGAAGGTAAGGAATACACTCAAGAAGAATTTTTTTATACTTTTAATACTTTACATGAAGCTGGGAAACAAGTTGTGATTGCTTCCGATCGTCCTCCTAACCAGATTCCTAGCTTACAAGAACGTCTTTGTTCTCGGTTTTCTATGGGGTTAATCGCAGATATCCAAAAGCCAGATTTAGAAACTAGGATGGCAATTTTGCAAAAAAAAGCCGAGGATGAAAATATTCGTCTTCCCCGCGATGTGATTGAATATATTGCTTCTAACTATACTTCTAATATTCGAGAATTAGAAGGAGCTTTAATTCGGGCGGTGGCTTATATTTCTATTTGGGGCTTACCGATGACGGTGGAAAATATTACACCTGTTTTAGAACCGCCTAACGAAAAAATGGCAGCTAGCCCAGAAGCAATTTTAAAGGTCGTAGCGGATAATTTTGATGTTTCAATAGACGATCTCAAAGGTAACTCACGACGAAGAGAGATTAGCTGGGCGCGTCAAATTGGAATGTATCTCATGCGTCAACACACATCTCTGAGTTTGCCGAGAATTGGCGAGGAGTTTGGTGGTAAAGACCATACAACGGTAATCTATAGTTGCGATAAAATTACCCAACTCCACCAGGGCGATCGCACTTTAGCACAAACTCTCCGCCAACTGAGCGATCGCATCAACATGACTAGCCGTTCTCAAAAATCATAGGAAAAATATGCTGATGGGGTGATTGTTTCCCCGTCAGCGCTGCGCGAACAGACCTCAAAGGGAAGCGACACGAGCGATTTAAAGACGCTCGGATGATTTATTCCGTGGTGGTAAACCTCGCGCAACAGAAGCTTTAAAGGATGATGAGCGCGATTACCACTTTATAAATGGTCTCTAAATATATTTTCTATATTTTCGAAAATAAAATCGGAGTTTTATATGTCGAGTAAAAAGAAAGAACCAATTGGATGTGGATGCTCAAATATTCCGATTTCTATAATCCTAATTATCTTAGGAGGTGGTTATTGGTGGTTTAGCCAGAAAGGATATCCAGAAATTAGCAAGTTTTTAGATAATAGCAAAAATATAAACATACATATTCCTAAGCCTACTAAAACTAGTTTTTCAACTATTAATACAACTCCTTATATAACACCAATTCCTTCTTTAGCAAGCACTCCAACTTTTACTGATAATCCGAAAATAATCCCAGATAAAAAAATACTATTGCTTCAAACAGCTTGGGAGAAGAAAGTAATTAGAGGAATTTATTTAACTCGCTACCAAATTACCAATAATGCCAACGAACAAACGATTCGTGAAAGAGTTCGTTACTATCACTCTCAAGGAATTAATACAATTATTCATGGCGTTTGGGGTAATGGTTGTACTATGTACAATAGCGAAGTAATGCAGCAAACTTTCGGGTATAAAAGTTGTCCAAATCAATTTCAAGAGCAATGGTTAAATTGGTTGATTGATGAAGCACATAAGCAAGGAATGCAAGTTCATGCTTACTTCGAGAAGGGAATTAAAATAGATAAGAATAGCCCAATTTTTGATTTAGCAATTTTCCGGAAATGGATTGTTCCAGGAGTGGATAAAACCTACTCTGGAATCGATCATTATGTACTTGATGTAGAAATTCCTGAAGTTGCTAATCTTTTTCAAAATATCTTAGTAGAGTTTGTCAAAAAATATCCTGATATTGATGCAGTTCAATGGGATGATTATCTGGGTTATTATGCTGAATTATCTGGAAAAGTTGACCGCACTGCAAATTTAACTAAATTTGTACAACAAATGGTAACTTCTATGAAAAAAGCTAATCCATCAGTAAGTTTTGATATTTGCCATCATAACCCCTATTGGGCTAAAAAATATTTTGCAGCTGACTGGGAAAAATGGGGTGCAGATCGTATATTTATTCAAGCTTATAATGATAGTAATTTTGTTGAAGAGTTAAATTATGCTCAAAAATATGCTGGAGTTGCGATTACAGATCGGCAACTGGGTCGGTTAAAAGAATTAGTTGATAACCCAAAAATTAAAAGCATCTTAGTTTTTCCATTTTCGGGAAACCCAGAAGAAACAGCTTCTAGCTTAAAAAACTCACTGTGATGTGGGAGCAAATATTCTGAGTGAGGAAACAAAAGATAATGAAGTAAGCGTGATTTAAAAGAGTTTTTAAGAGTGCGGAAGAGTAAGTAAGTTGGCACAATAAAATCAAACTATGTAAAGAGAAATGAACTAGCTAAAACCCTTATACCTATTGACTGTTGCCTATTGCCTTATCCCAACGACAATTATTTACGTCCACTTACTTAGTAAATCTGGTTTATTAAAAGAGGTATAAACCCAACTCAACTTAAAACAATTCAAAATATTCTCTTTGCTCCCAATTAGTCACCTGCTTTAAATACTCTTCTGGTGGCTGATCGGCGACGGACTGCAAAAAGCGATTAATTTCACTCTCTTTCATCTTAATGATGAAGTTTATGAACTGCTGCCCCATTTTTTGAGGAAAAAGTTCGCTTTGGCTCAAATATGAAATCGCCTCTGACAAACTTTTGGGTAAGATCGGATTTTCTGTAGTATAAGGTTCCTCTGTTGGAGAGCCAGGATCAAGTTTACAATCTACACCATCTAAACCAGAAATCAATTGCGATGCCATATAGAGATAGGGATTGGCTGCTGGTTCTCCAACTCGGTTTTCAATGTGGGTACTGGGGTCATCAAAACCGCCTTGTAATCTAATCATTGCCCCTCGGTTTTCCAATCCCCACCCCGCACGGTCAGGGGCTAGGGAATAAGGTCTAAATCTTTTGTAGCCGTTAATTGTTGGGGTTGTGAATACAGAAGCAGCATTGGCGTGTTTAAGAAGACCACCAACGAAGTGTTTAGCTAAATCTGACGTGAGGGTTTGGGAGTTTGCAGACATAAAAGCGTTCTCGCCTGTGGTAAGGTCTACAAGGGATTGGTGCAAATGCCAGCCATTAGAAGAAGAACCTTGCAATCCTGGACGACACATAAATGATGCGATGTAACCTTGTTGACGACAGATTTGCTTGGTTGCCATTCGAAATATCATCATTGTATCGGCAGCTTGCAATGCAGGAATCGGGTCAAAAGTAAATTCAAATTGACCAACACCCCCTTCGTTTTCTACACTCCTTAAAGGCAATTTCATTTCAACTAAATTCTCTGCCAGAAGGCCCAGCAAATCTTGAATCTCTGGATTGTGTGATTCTAAAAGGTATTGGAAGCTATGGTCTACAGCGCTAACTTTAGCAGGTTCACCGGGTTTTCCAGAACTACCAACATTAGCGATCGCTAACATCGGATCTTCCAACTTTGCTAGATACCACTCAACTTCTAAGCCGACAATATGCTCCAATCCTCTTTGATGTAAATCTATCAATGATTGGCGCAAAATACCGCGACTAGAAAAGGGCATTGGCTGACCATTCTGAAAGTACTCATCACAGAGAATAAAGCCAGTACGTTTTGCCCAAGGCACAATTTTGAATGTATCAGGATCAGGAACAGCCACAAGATTTGGCGCACCTGTCATCAAAGGCATATCTAAACTACCACCGGGAACAAATGGGTTAAATACTATTGCACCACCAGTATCTAACAGGAATGTCCCTGTGCTGATTTGCATACCGTTTTCCAGGGCGCTGAAAAAAGCTTGGGGTAAGAGTGACTTACTGCGAACAATGCCATGCTGGTCTGACCAAGCGGTACGAATCAACAATAAATCCTGTTCTTTAACAATAGTCTTAATTTTTTCAGATGCTTCTTTTTGGATTTCTGTCCACAGGTGATGACGCTCAATAAATCCAGGTCTTTTCATTGGGATTGTCTAATCATGTTCAACTGCTTGTGTGGTTAGTTTGACACTTATTTCGCCAGTTTCGTGAATAATATGGAACTAGTAGTCTGTCCCAAAAGTTTTGATAGGTGAATCACTTTTAAATTTCTCTTCTTTACCTCTTCTACTTTGCGCTCTTTGCGCCCTTTGCGGTTCGTTCTTTTATCCCTCAGAATTAATGGGACAGACCACTAGTCTTCAAGCGTGGCGTAAAGTAAATCACAGAGGGTACGGTAAACCTATATCTAACCTATTTCCAAGAGCAATGTGATTTTGTTAGTAGTTTTGTAGGTTGGGTGGAGTGAAACGCAACCCAACATTACCACCTTATTTATGTTGGGTTACACTATCGCTGCACCCAGCCTTGTATCTTACATAAATATATCTTTTAAAAAACTCTTGGTTTCAACATAGATGAGGTTTATTTCATATTTCCTATTGCCTATTGCCTATTTTCTATTGCCTTATCCCAACGACAATTATTTACGCCTACTTACTTAGTTTGAGTAAACGATCGCTCGCTGCTTGTAATGTCTCAGGTGTCTTGCTAAAGCAGAATCTGATCAATGAATGGCCTTTTTCTGGTTGGCTGAAAAAGCTGGAACCAGGAACTACGGCAACACCAATATTTTTAATTAGATGGTAAGTGAATTCAATATCTGTTTTGTAGCCAAATTTAGAAATATCTGCAAGAACATAATAGGCTCCTTGGGGAAGGAAGTAAGGAATGCCAACTCCATCAAGTATCTGTAAGATCGAGTCTCGCTTCTGGTGATAAAGTTTGCCTAGTTCTTCATAATAGGATGGTGGTAGTTGCATCGCGGTAACTCCGGCTCGTTGCAATGGTGCAGGAGCGCCAACGGTAAGAAAATCATGGACTTTGCGAATGGCTCCCGTTAATGCGGGGTTTGCCAAAATGTAACCAACTCGCCATCCGGTGACACTATAAGTTTTGGATAGACCGTTAATGGTAATGGTGCGTTCTTCCATACCGGGAAGGGTCGCTAGGGCAATATGTTGAGTGCCATCATAGAGAATATGTTCGTAGATTTCATCTGTGAAGGCTAACACATCCCATTTTTGACAAAGTTCAGCAATTAAGGTGAGTTCTTCACGGGTAAAAACTTTGCCGGTGGGGTTATGGGGTGTGTTGATAATAATAGCTTTGGTATTAGCATTGAAAGCTTGATGCAACTGTGCTTCATCAAATGTCCAATGGGGAGGATGCAGTGTTACGTATCGGGGTGTAGCACCAGCTAAAATCGCATCGGGGCCGTAGTTTTCGTAATAAGGCTCAAATACAATTACTTCGTCACCAGGATCGACTGTCGCCAGCATTACAGATGCCATTGCTTCTGTGGAACCACAGGTGACGGTGATTTGGGTTTCAGGGTCGATATCTAAGCCGAGATACCAACGAACTTTGCTAGCGATCGCATGACGAAATGCGCGTAGACGTGAAGCGGCTTGTCGTCAGACATCGCCCCAAGTAATGGCATACTGGTTGACATCTGCCTCTATTGCTTCATTTGCTGCCTGTTTCAACTCCAAGGGACATGGAAAATCAGGGAACCCTTGAGCCAGATTTACTGCACTATATTGCAGTGCCACCCTTGTCATTTCCCTAATTACCGACTCTCTAAACTGGTCTGCCTTCGCTGATATTTTTTTACGCCCAATCTCACTCCCCTACCTCCGTTAATCTCGATTACAGTTATGCAGGAATTTTTCTAAAACCCATAATACCGATAGCTTTATCGTAGTATACTCAAATTCGAGATTCAGAGGGAATGCAACCTTATAATCTATATACTTAATTATTGATATTAATAGTCAATTACTGAAGTACCAGTCCAGAATTATCATGAAATCTTTGCACCGTCCCGATCTTTATAGCTGGTCTAATTTCAATCCGGCAAGAAATATTGATTTCAATGGGATTGCCTGGATTCGCCCAGATGGAAACATCTTGATTGACCCAGTAGCCCTATCAAACCATGATTGGAATCATTTGAAATCCCTCGGTGGTGTAGTCTGGATTGTGCTGACGAATTCTGAGCATGTCAGGGCAAGTAAAGATATTGCCGATCAAACTTATGCTAAGATAGCTGGTCCAGTGGCAGAAAAAGACACTTTTCCCATACCTTGCGATCGCTGGCTGTCTGATGGTGAAGAATTTGTACCAGGGCTGGAGGTGATTGAACTCCACGGCTCGAAAACTCCCGGTGAATTGGCTCTGTTACTGGAAGAGACAACTTTAATTACAGGGGATTTAGTCAGGGCACGTAAAGCAGGTAGCTTAACTATATTGCCAGATGACAAGCTACTGAATCGAGAGGAGGCTGTTGCTTCTGTTCGCAGGTTAGCAGAACTGAGTCGAGTTGAAGCAGTGTTGGTGGGGGATGGTTGGCCCGTCTTCCGCGATGGACGCGATCGCTTAGAGGAACTTGTAGCGACGCTGTAAATGGGTGGGGCGATGCCTATGTTCAGGGCTAGCCCTACGCTCAATTTTTACTGAGTGTTAATATCATCGCAGAGGGTGCGATCGTTTTTCATATTAGGGTTATTTTTCAGATAACCAGATGCCAATTTACAGGCACGCTTGAGTAAATCATCTAAATTATTATTAAGATATATTTTTCCCTCATTGCTATTAAGCTCAATTGTCTTATTGGTATTAAGGTTAAATCGCTCGCCTAAGAAAGAACTGATGGGATAGAGTAAGTAAGGATCTTTCGTAAACCAACTATTGAGAAAATATAGACCTGTATTATAATCAGAACCAACAGCTAGCATTTTGTTGTCATTATCAAAACTTAAAGTATTACTGCTATAATCGGTTTTTAAGGGTTCAATTTTTCCATTATCTAAATTCCCCAATTTAGCAGAAGAACCACTAATAAAGGCAATTTTCTTATCATCAGCTTGGAAGCGTATATTTGTAATTTTATCAGGATCGCGGATGGTTGGTTTTTGTAATTTACCATCAAGATTCCAGAGTCTTATAATTTGATCGTCACTAGCAGAAGCAATAATTTTCCCATCATGAGTGAAACTCACACTATTGACTTTATCACCGTGTTTTATAATCGGTTTAAGCAATTTACCATTTCTATTCCAAAACCTTACTGTTTTGTCGTCACTAGCAGAAGCGATGATTTTTTTATTAGGGCTGAACGCAACACTATTAACCCAATCAGTATGACCCCATAAGGTTGCTAGCGGCTTGCCTTTTAAATCCCAAAGTTTTAAACTATCATCTTTACTAACGGAAGCAACTGTTTTTTTATTAAGACTAAACCTAATAAAAGAATCTATATTATTACATGAAAAATTTGCGTGACCTTTAATAGATTTTAACTCTTGAAACTTGGCACTATCTTCAATACTCCAAAACTTCATAACATACTTAGAGCGATAAATCTCATTCGACCAATAAGTTTTGCAGCTAGTAGCACCAATGATTTTTCCATCAGAACTAAAGCTAACCTTATCAATGCTAATATCATCATTTATTCCATTACTAAATCCTGAAAGTTGTTTGATAAAATTACCGTTACCGTTATAGATGTTCACAGTGTTATCAGCACTTGCAGAAGCAATATATTTATTATCAAAACTAAACGCAACATCATTAACACCTTTAATGTGTTTTTGTAAAGTTAGAGGTTCATAGTTATATTTTTTAAGCAAAAGCTGATTTATATCCCAAATTTTTATAGTATTATCAGCACTGCTAGTTACAATTTTTGTACCATCATGGCTAAAATCTACTTTTGTGATTGTGTCATTATGTCCTTTGAGTGTTGCGCGTGGTTCTCCTTCAACAGTCCATAGCTTGACAGTATAATTCTGGTTAATAGAAGTAATGTACTTGCCATTAGGATTAAATTTTGCGCTGATCATGCCATAGTTATCAATAGATTGAAGCGGTTCGCTATTGCTGATATCCCAAATTTTTATCTCACCACTATTAGCGCTAACTGACATGAGCTTTTTGTCATCTGGACTAAACTCTACGCTTTGTACCTTGGCATTATGTCCAATCAATGGCTTAACGGGAGTACCATCACTTTTATAGAGTTTAACTAAATTGTCATCACAGATAGCAAGCATCTTGCTATCATGACTAAATATAACAGTTGTAACTTTATCACTATCTGTTTTCAAGGCTTGAATTAAGCTGCGATCGCGGCTATTCCAAAGTTGCACTTTATTGTCATCACTGATAGTAGCTATTATCTGACTATTAGGGCTAAAGCTCACATTGGTAACTTGTTTTGTGTTTCCCTTTAAATGTCCTATAAATGTTCCGTCACTACTGCGCCAGAGTCTAACAAAATTATCTGCACTGGCAGCAGCAACCAAATTACCATCAGGGCTAAAGTCAATGGTTGTGATCTTATTGGTGCTACCTTTTAAAGTAATTTCCTTGTTGGTATCTAGTTTCCAGAGCTTTAAGATATCGTCAGGGCTTCCAGTTGCAAGTGTTTGATTATCTGGACTAAAGCTAAGAATTGAACTATCTCCTCGGATAGTTTTAATGTGAGTGCCATCACGGTTTTGAAGTTCTATACTATTGTCAGAACTGCCAAGAGCGACTGTTTGACCATCAAAACTAAACCTTATTTTCCTATTTATATCTTCATCTCTATCGGTTCTCTGGAACGAAGGTAATTTATTGTCGTCAATATCCCAAATCTTCACAACTCCATCTTTACTAGCTGATGCAAGTAGCTTGCTATCAGGACTGAAGCTTGTATAAGTAATGCTATCATCATGTTTAAAAATATTGTAATTAGAACATTGACCTTGAAATATTATAGTTTCAAAGAAAGTTTTCTTATCTTCACTATCCTGGAATATGCTTAATTGATTATCAAGACTATTATTTAAAAAATCTTTCAATCCAAATGAATTCTTACAAACATTTTCAGCACTTTTGATGAGGTGTGGTTTATCATCAGTAGACCAAACTCTTAGGTTTCCCTGTTTATTAAACAAGCTAATAGCATCACCACTGTTGTTGAAATTCATGGTAAATGTGCCAGAATCATAAATCTCAGTAGGCTTATTTTCAAGTTTTTTTGGTGTCAGTTTCCAAAGTTTAACAGTGTCATACCGTCCCCCTGTAGCAACTGTCTTGTTGTCAGGACTAAAATTTACAATTATGTTTTTGTCATTAAATCTTTGTGGTAAGCTCTTAAGCTTACCATCTTCCCAACTCCAGATTTTAACTGTTTTATTCTTAGTAGTAGTAGCTAGTAGTTTATCGTTAGGACTAAATGTAATGAAGC";
	//var seq = "ACGTTTACCGGGT";
	var seq = msg.textContent;
	var i = 0	;
	const ADD_VALUE = 70;
	var done = false;
	while(!done)
	{
		if((i + ADD_VALUE) > seq.length)
		{
			processed_sequence += "<span style = 'font-size: 20px'>" + "<tt>" + seq.substr(i,(seq.length - i)) + "</tt>" + "</span>";
			processed_sequence += "<br>";
			done = true;
		}
		else
		{
			if(i + ADD_VALUE >= 167 && i + ADD_VALUE <= 1546)
			{
				processed_sequence +=  "<span style = 'color:red;font-size: 20px'>" + "<tt>" + seq.substr(i,ADD_VALUE) + "</tt>" + "</span>";
				processed_sequence += "<br>";
				i = i + ADD_VALUE;
			}
			else if(i + ADD_VALUE >= 1766 && i + ADD_VALUE <= 2947)
			{
				processed_sequence += "<span style = 'color:orange;font-size: 20px'>" + "<tt>" + seq.substr(i,ADD_VALUE) + "</tt>" + "</span>";
				processed_sequence += "<br>";
				i = i + ADD_VALUE;
			}
			else if(i + ADD_VALUE >= 3195 && i + ADD_VALUE <= 4685)
			{
				processed_sequence +=  "<span style = 'color:blue;font-size: 20px'>" + "<tt>" +  seq.substr(i,ADD_VALUE) + "</tt>" + "</span>";
				processed_sequence += "<br>";
				i = i + ADD_VALUE;
			}
			else if(i + ADD_VALUE >= 5193 && i + ADD_VALUE <= 6053)
			{
				processed_sequence += "<span style = 'color:red;font-size: 20px'>" + "<tt>" + seq.substr(i,ADD_VALUE) + "</tt>" + "</span>";
				processed_sequence += "<br>";
				i = i + ADD_VALUE;
			}
			else if(i + ADD_VALUE >= 6568 && i + ADD_VALUE <= 7167)
			{
				processed_sequence +=  "<span style = 'color:orange;font-size: 20px'>" + "<tt>" + seq.substr(i,ADD_VALUE) + "</tt>" + "</span>";
				processed_sequence += "<br>";
				i = i + ADD_VALUE;
			}
			else if(i + ADD_VALUE >= 7215 && i + ADD_VALUE <= 13253)
			{
				processed_sequence += "<span style = 'color:blue;font-size: 20px'>" + "<tt>" + seq.substr(i,ADD_VALUE) + "</tt>" + "</span>";
				processed_sequence += "<br>";
				i = i + ADD_VALUE;
			}
			else
			{
				processed_sequence += "<span style = 'font-size: 20px'>" + "<tt>" + seq.substr(i,ADD_VALUE) + "</tt>" + "</span>";
				processed_sequence += "<br>";
				i = i + ADD_VALUE;
			}
		}
	}
	pageLayout();
*/
}


function pageLayout()
{
	lay_out = '<div style="width:100%; border:solid 0px black"><center><h1><font color = "green">NOSTOC SEQUENCE FROM 1 TO 10000</font></h1></center></div>';
	lay_out += '<div style="width:7%; display:inline; float:left; border:solid 0px black">';
	var num = 1;
	while(num <= 10000)
	{		
		lay_out += "<right>" + "<span style = 'font-size: 20px'>" + "<tt>" + num + "</tt>" + "</span>" + "</right> </br>";
		num += 70;
	}
	
	lay_out += '</div>';
	lay_out += '<div style = "width:22%; display:inline; float:right; border:solid 0px black">';
	lay_out += "<center><a href = 'gene.html'>Gene1</a></center>";
	lay_out += "<br/><br/><br/><br/><br/><br/><br/><br/>";
	lay_out += "<br/><br/><br/><br/><br/><br/><br/><br/>";
	lay_out += "<br/><br/><br/><br/><br/><br/><br/><br/>";
	lay_out += "<br/><br/><br/><br/><br/><br/><br/><br/>";
	lay_out += "<br/><br/><br/><br/><br/><br/><br/><br/>";
	lay_out += "<br/><br/><br/><br/><br/><br/><br/><br/>";
	lay_out += "<br/><br/><br/><br/><br/><br/><br/><br/>";
	lay_out += "<br/><br/><br/><br/><br/><br/><br/><br/>";
	lay_out += "<br/><br/><br/><br/><br/><br/><br/><br/>";
	lay_out += "<br/><br/><br/><br/><br/><br/><br/><br/>";
	lay_out += "<br/><br/><br/><br/><br/><br/><br/><br/>";
	lay_out += "<br/><br/><br/><br/><br/><br/><br/><br/>";
	lay_out += "<br/><br/><br/><br/><br/><br/><br/><br/>";
	lay_out += "<br/><br/><br/><br/><br/><br/><br/><br/>";
	lay_out += "<br/><br/><br/><br/><br/><br/><br/><br/>";
	lay_out += "<br/><br/><br/><br/><br/><br/><br/><br/>";
	lay_out += "<br/><br/><br/><br/><br/><br/><br/><br/>";
	lay_out += "<br/><br/><br/><br/><br/><br/><br/><br/>";
	lay_out += "<br/><br/><br/><br/><br/><br/><br/><br/>";
	lay_out += "<br/><br/><br/><br/><br/><br/><br/><br/>";
	lay_out += '</div>';
	lay_out += '<div style="width:70%; display:inline; float:center; border:solid 0px black">' + processed_sequence;
	lay_out += '</div>';
	printProcessedSequence();
	
}


function printProcessedSequence()
{
	
	document.write(lay_out);
}

function setGeneInfo()
{
		//NpF0001" 167 1546 "DnaA; Bacterial chromosomal re
		//NpF0002" 1766 2947 "Uncharacterized protein conser
		//NpR0003" 3195 4685 "glnAGlutamine synthetase, P"
		//NpR0004" 5193 6053 "Aminotransferase, class I and
		//"NpF0005" 6568 7167 "conserved hypothetical protein
		//"NpR0006" 7215 13253 "G-protein beta WD-40 repeat"
}
