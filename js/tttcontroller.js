angular
	.module('ticTacToeApp')
	.controller('TicTacToeController', TicTacToeController);

TicTacToeController.$inject = ['$firebaseObject'];

function TicTacToeController($firebaseObject){
	self = this; //capture keyword this with self for controller to avoid confusion
	self.gameObject = syncGameWithFirebase();      //makes these functions properties of the controller
	self.addMore = addMore; //self .add more can actually be anything , it is just saying it is a property of the controller
	
	
	self.winningMessage
	
// 	//self.xWinner = false;
// 	//self.oWinner = false;

  	 self.game =syncGameWithFirebase();
  	 // self.gameObject.boxes;


	function syncGameWithFirebase(){
 		var ref = new Firebase('https://abetictactoe.firebaseIO.com');
 		var gameObject = $firebaseObject(ref);

 		gameObject.$loaded(function(){ //load the game object and when you finish run the call back
	 		//loading a firebase  object
	 		gameObject.boxes = [];   
	 		gameObject.counter=0;
	 		
	 		







	 		for (var i=0; i<9; i++) {
	 			gameObject.boxes.push({hasMole: false, hasCircle: false});
	 			


			};

			gameObject.$save();


			console.log(gameObject);
		} )  ;

 		return gameObject;   //get the updaded local game object

  	};
  		

	function addMore (i) {
		console.log('its working!');
		console.log(self.gameObject.boxes[i].hasMole);

		
		
	     		//self.boxes[i].hasMole = true;
		 if ((self.gameObject.boxes[i].hasMole == false) && (self.gameObject.boxes[i].hasCircle == false)) {
		     	if (self.gameObject.counter%2 === 0) {
	   			self.gameObject.boxes[i].hasMole = true;
	   			
	   			self.gameObject.counter ++;

		   		self.gameObject.$save();

		   	}
			   			
			   		else if (self.gameObject.counter%1 === 0){
			   			self.gameObject.boxes[i].hasCircle = true;
			   				
			   				self.gameObject.counter++;


			   				self.gameObject.$save();
			   		}
		}

		//else { console.log('occupied')}
	evaluate();	 		
	  }
		


	function evaluate () {

		if ((self.gameObject.boxes[0].hasMole === true) && (self.gameObject.boxes[1].hasMole === true) && (self.gameObject.boxes[2].hasMole === true))
	 	{
	  		 self.winningMessage= "x is the winner";
	  	}

		else if ((self.gameObject.boxes[3].hasMole === true) && (self.gameObject.boxes[4].hasMole === true) && (self.gameObject.boxes[5].hasMole === true))
	 	{
	  		//self.winner.xWinner = true;
	  		//winner = "x wins";
	  		//xWinner= true;
	  		
	  		self.winningMessage= "x is the winner";

	  	}

	  	else if ((self.gameObject.boxes[6].hasMole === true) && (self.gameObject.boxes[7].hasMole === true) && (self.gameObject.boxes[8].hasMole === true))
	 	{
	  		//self.winner.xWinner = true;
	  		//winner = "x wins"
	  		//xWinner= true;
	  		self.winningMessage= "x is the winner";
	  	}

	  	else if ((self.gameObject.boxes[0].hasMole === true) && (self.gameObject.boxes[3].hasMole === true) && (self.gameObject.boxes[6].hasMole === true))
	 	{
	  		//self.winner.xWinner = true;
	  		//winner = "x wins"
	  		//xWinner= true;
	  		self.winningMessage= "x is the winner";
	  	}

	  	else if ((self.gameObject.boxes[1].hasMole === true) && (self.gameObject.boxes[4].hasMole === true) && (self.gameObject.boxes[7].hasMole === true))
	 	{
	  		//self.winner.xWinner = true;
	  		//winner = "x wins"
	  		//xWinner= true;
	  		self.winningMessage= "x is the winner";
	  	}

	  	else if ((self.gameObject.boxes[2].hasMole === true) && (self.gameObject.boxes[5].hasMole === true) && (self.gameObject.boxes[8].hasMole === true))
	 	{
	  		//self.winner.xWinner = true;
	  		//winner = "x wins"
	  		self.winningMessage= "x is the winner";
	  	}

	  	else if ((self.gameObject.boxes[0].hasMole === true) && (self.gameObject.boxes[4].hasMole === true) && (self.gameObject.boxes[8].hasMole === true))
	 	{
	  		//self.winner.xWinner = true;
	  		//winner = "x wins"
	  		self.winningMessage= "x is the winner";
	  	}

	  	else if ((self.gameObject.boxes[2].hasMole === true) && (self.gameObject.boxes[4].hasMole === true) && (self.gameObject.boxes[6].hasMole === true))
	 	{
	  		//self.winner.xWinner = true;
	  		//winner = "x wins"
	  		self.winningMessage= "x is the winner";
	  	}

	  	else if ((self.gameObject.boxes[0].hasCircle === true) && (self.gameObject.boxes[1].hasCircle === true) && (self.gameObject.boxes[2].hasCircle === true))
	 	{
	  		
	  		//winner = "0 wins"
	  		//self.winner.oWinner = true;
	  		self.winningMessage= "O is the winner";
	  	}

	  	else if ((self.gameObject.boxes[3].hasCircle === true) && (self.gameObject.boxes[4].hasCircle === true) && (self.gameObject.boxes[5].hasCircle === true))
	 	{
	  		//self.winner.oWinner = true;
	  		self.winningMessage= "O is the winner";
	  		
	  	}

	  	else if ((self.gameObject.boxes[6].hasCircle === true) && (self.gameObject.boxes[7].hasCircle === true) && (self.gameObject.boxes[8].hasCircle === true))
	 	{
	  		
	  		//self.winner.oWinner = true;
	  		self.winningMessage= "O is the winner";
	  	}

	  	else if ((self.gameObject.boxes[0].hasCircle === true) && (self.gameObject.boxes[3].hasCircle === true) && (self.gameObject.boxes[6].hasCircle === true))
	 	{
	  		
	  		//self.winner.oWinner = true;
	  		self.winningMessage= "O is the winner";
	  	}

	  	else if ((self.gameObject.boxes[1].hasCircle === true) && (self.gameObject.boxes[4].hasCircle === true) && (self.gameObject.boxes[7].hasCircle === true))
	 	{
	  		
	  		//self.winner.oWinner = true;
	  		self.winningMessage= "O is the winner";
	  	}

	  	else if ((self.gameObject.boxes[2].hasCircle === true) && (self.gameObject.boxes[5].hasCircle === true) && (self.gameObject.boxes[8].hasCircle === true))
	 	{
	  		
	  		//self.winner.oWinner = true;
	  		self.winningMessage= "O is the winner";
	  	}

	  	else if ((self.gameObject.boxes[0].hasCircle === true) && (self.gameObject.boxes[4].hasCircle === true) && (self.gameObject.boxes[8].hasCircle === true))
	 	{
	  		
	  		//self.winner.oWinner = true;
	  		self.winningMessage= "O is the winner";
	  	}
	  	else if ((self.gameObject.boxes[2].hasCircle === true) && (self.gameObject.boxes[4].hasCircle === true) && (self.gameObject.boxes[6].hasCircle === true))
	 	{	
	  		//self.winner.oWinner = true;
	  		self.winningMessage= "O is the winner";
	  	}

	  	

	  	
	  	 else if ((self.clickCounter ===9) && (self.winningMessage !== "O is the winner") && (self.winningMessage !== "x is the winner") ) {
  			console.log("tie");
  			self.winningMessage = "It's a tie";
	  	}

		//console.log("are you working")
	  	
	}

  }	

			
    		







