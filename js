//Resources:
//https://www.youtube.com/watch?v=Mb4LIoxqIns (parts 1-3) used to create this code

var myButton = document.getElementById("name-button");
var p1 = "X";
var p2 = "O";

// pressed = false;

function welcome(){
 	var name1 = document.getElementById("name1").value;
 	var name2 = document.getElementById("name2").value;

	
	if(name1 != "Player1" && name2 != "Player2" && name1 != "" && name2 != ""){
		p1 = name1;
		p2 = name2;
	}


	// if(pressed == false){
	// 	myButton.innerHTML = "Pressed";
	// 	pressed = true;
	// }else{
	// 	myButton.innerHTML = "Not Pressed";
	// 	pressed = false;
	// }
}

var player1 = 'X';
var player2 = 'O';
var currentTurn = 1;
var movesMade = 0;
var winnerContainer = $('.winner');
var reset = $('.reset');
var sqr = $('.square');

	
sqr.on('click', (e) => {
	movesMade++;

	if(currentTurn == 1){
		event.target.innerHTML = player1;
		event.target.style.color = "rgb(255,255,255)";
		currentTurn++;
	}
	else{
		event.target.innerHTML = player2;
		event.target.style.color = "rgb(255,255,255)";
		currentTurn--;
	}

	// if(checkForWinner()){
	// 	if(currentTurn == 1){
	// 		theWinner = player2;
	// 	}
	// 	else{
	// 		theWinner = player1;
	// 	}

	// 	declareWinner(theWinner);
	// }
	if(checkForWinner()){
		if(currentTurn == 1){
			theWinner = p2;
		}
		else{
			theWinner = p1;
		}

		declareWinner(theWinner);
	}

});

reset.on('click', (e) => {
	var moves = Array.prototype.slice.call($(".square"));
	moves.map((m) => {
	m.innerHTML = "";
	});
	winnerContainer.html('');
	winnerConatiner.css('display',"none");
	currentTurn = 1;
	//movesMade = 0;
});

function declareWinner(winner){
	winnerContainer.css('display','block');
	reset.css('display','block');
		
	winnerContainer.html(winner + " wins!");
}


function checkForWinner(){
	if(movesMade > 4){
	var sqr = $('.square');
	var moves = Array.prototype.slice.call($(".square"));
	var results = moves.map(function(square){
			return square.innerHTML;
	});

	var winningCombos = [

				[0,1,2],
				[3,4,5],
				[6,7,8],
				[0,3,6],
				[1,4,7],
				[2,5,8],
				[0,4,8],
				[2,4,6]

		];

	return winningCombos.find(function(combo){
		if(results[combo[0]] != "" && results[combo[1]] != "" && results[combo[2]] != "" && results[combo[0]] == results[combo[1]] && results[combo[1]] == results[combo[2]]){
			return true;
		}
		else{
			return false;
		}

		});

	}
}


function cssSwapper(){
	 document.body.style.backgroundColor = "rgb(249, 182, 249)";
	 document.body.style.color = "rgb(249, 182, 249)";
	 document.body.style.fontFamily = "'Pacifico', cursive";
	 document.getElementById("header1").style.fontFamily = "'Pacifico', cursive";
	 document.getElementById("names").style.fontFamily = "'Pacifico', cursive";
	 
}

function cssSwapper2(){
	 document.body.style.backgroundColor = "rgb(182, 241, 249)";
	 document.body.style.color = "rgb(182, 241, 249)";
	 document.body.style.fontFamily = "'Dancing Script', cursive";
	 document.getElementById("header1").style.fontFamily = "'Dancing Script', cursive";
	document.getElementById("names").style.fontFamily = "'Dancing Script', cursive";
}

function cssSwapper3(){
	 document.body.style.backgroundColor = "rgb(163, 247, 218)";
	 document.body.style.color = "rgb(163, 247, 218)";
	 document.body.style.fontFamily = "'Satisfy', cursive";
	 document.getElementById("header1").style.fontFamily = "'Satisfy', cursive";
	 document.getElementById("names").style.fontFamily = "'Satisfy', cursive";
}

function cssSwapper4(){
	 document.body.style.backgroundColor = "rgb(214, 193, 255)";
	 document.body.style.color = "rgb(214, 193, 255)";
	 document.body.style.fontFamily = "'Caveat', cursive";
	 document.getElementById("header1").style.fontFamily = "'Caveat', cursive";
	 document.getElementById("names").style.fontFamily = "'Caveat', cursive";
}

	

