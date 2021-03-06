function onStart(){
	//radio button reading
	document.getElementById("status_select").innerHTML = "running";
	if(document.getElementById("dfs").checked){
		document.getElementById("algorithm_select").innerHTML = "DFS";
		console.log(" starting DFS ");
		call_DFS();
	}
	if(document.getElementById("bfs").checked){
		console.log("starting BFS ");
		document.getElementById("algorithm_select").innerHTML = "BFS";
		call_BFS();
	}
	if(document.getElementById("Astar").checked){
		console.log("starting a star");
		document.getElementById("algorithm_select").innerHTML = "A Star";
		call_Astar();
	}
	if(document.getElementById("dijkstra").checked){
		console.log("starting dijkstra");
		document.getElementById("algorithm_select").innerHTML = "dijkstra";
		call_dijkstra();
	}
	if(document.getElementById("IDDFS").checked){
		document.getElementById("algorithm_select").innerHTML = "IDDFS";
		console.log("starting IDDFS");
		call_IDDFS();
	}
	if(document.getElementById("IDAstar").checked){
		document.getElementById("algorithm_select").innerHTML = "IDAstar";
		console.log("starting IDAstar");
		call_IDAstar();
	}
	if(document.getElementById("bestfs").checked){
		console.log("starting best first finder");
		document.getElementById("algorithm_select").innerHTML = "Best FS";
		call_BestFirstSearch();
	}
	console.log("finished");
}


 function shuffle(array) {
    // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
    
 }
  
function randomWallSparse(){
	let w = 100;
	a = [];
	for(let i = 0 ; i < w ; i ++){
		a.push(1);
	}
	for(let i=w;i<=rows*cols;i++)
		a.push(0);
	shuffle(a);
	let count = 0 ;
	for(let i = 0; i < rows; i++){
		for(let j =0; j < cols; j++){
			board[i][j] = a[count];
			count = count + 1;
		}
	}
	board[goalState.i][goalState.j] = 0;
	board[initialState.i][initialState.j] = 0;
	updateCanvas();
}

function randomWallDense(){
	let w = 250;
	a = [];
	for(let i = 0 ; i < w ; i ++){
		a.push(1);
	}
	for(let i=w;i<=rows*cols;i++)
		a.push(0);
	shuffle(a);
	let count = 0 ;
	for(let i = 0; i < rows; i++){
		for(let j =0; j < cols; j++){
			board[i][j] = a[count];
			count = count + 1;
		}
	}
	board[goalState.i][goalState.j] = 0;
	board[initialState.i][initialState.j] = 0;
	updateCanvas();
}

function randomWeightSparse(){
	let w = 90 ;
	a = [];
	console.log("here");
	for(let i = 0 ; i < 30 ; i ++){
		a.push(10);
	}
	for(let i=0;i<30;i++){
		a.push(20);
	}
	for(let i=0;i<30;i++){
		a.push(50);
	}
	for(let i=w;i<=rows*cols;i++)
		a.push(0);
	shuffle(a);
	let count = 0 ;
	for(let i = 0; i < rows; i++){
		for(let j =0; j < cols; j++){
			weight[i][j] = a[count];
			count = count + 1;
		}
	}
	weight[goalState.i][goalState.j] = 0;
	weight[initialState.i][initialState.j] = 0;
	updateCanvas();
}

function randomWeightDense(){
	let w = 240 ;
	a = [];
	for(let i = 0 ; i < 60 ; i ++){
		a.push(10);
	}
	for(let i = 0 ; i < 60 ; i ++){
		a.push(20);
	}
	for(let i = 0 ; i < 60 ; i ++){
		a.push(50);
	}
	for(let i=w;i<=rows*cols;i++)
		a.push(0);
	shuffle(a);
	let count = 0 ;
	for(let i = 0; i < rows; i++){
		for(let j =0; j < cols; j++){
			weight[i][j] = a[count];
			count = count + 1;
		}
	}
	weight[goalState.i][goalState.j] = 0;
	weight[initialState.i][initialState.j] = 0;
	updateCanvas();
}

function recursiveWall(){
	console.log("generating walls recursively");
	for(let i=0;i<rows;i++){
		for(let j=0;j<cols;j++){
			board[i][j]=0;
		}
	}
	for(let i=0;i<rows;i++){
		board[i][0] = 1;
		board[i][cols-1] = 1;
	}
	for(let i=0;i<cols;i++){
		board[rows-1][i] = 1;
		board[0][i] = 1;
	}

	function RecWall([x1 , y1] , [x2 , y2]){
		let width =  x2-x1;
		let height = y2-y1;
		if(width>=height){
			//vertical bisection 
			if(x2-x1>3){
				let bisection = Math.ceil((x1+x2)/2);
				let max = y2-1;
				let min = y1+1;
				let randomPassage = Math.floor(Math.random()*(max-min+1)) + min;
				let first = false;
				let second = false;
				if(board[bisection][y2]==0){
					randomPassage = max;
					first = true;
				}
				if(board[bisection][y1]==0){
					randomPassage = min;
					second = true;
				}
				for(let i=y1+1;i<y2;i++){
					if(first && second){
						if(i==max || i==min)
							continue;
					}
					else if(i == randomPassage){
						continue;
					}
					board[bisection][i] = 1;
				}
				RecWall([x1,y1],[bisection,y2]);
				RecWall([bisection,y1],[x2,y2]);
			}
		}
		else{
			//horizontal bisection 
			if(y2-y1>3){
				let bisection = Math.ceil((y1+y2)/2);
				let max = x2-1;
				let min = x1+1;
				let randomPassage = Math.floor(Math.random()*(max-min+1)) + min;
				let first = false;
				let second = false;
				if(board[x2][bisection]==0){
					randomPassage = max;
					first = true;
				}
				if(board[x1][bisection] ==0){
					randomPassage = min;
					second = true;
				}
				for(let i=x1+1;i<x2;i++){
					if(first && second){
						if(i==max || i==min)
							continue;
					}
					else if(i == randomPassage){
						continue;
					}
					
					board[i][bisection] = 1;
				}
				RecWall([x1,y1], [x2, bisection]);
				RecWall([x1 ,bisection],[x2,y2]);
			}
		}
	}
	RecWall([0,0] , [rows-1, cols-1]);
	initialState.i = 1;
	initialState.j = 1;
	goalState.i = rows-2;
	goalState.j = cols-2;
	updateCanvas();
}

function cleanBoard(){
	for(let i=0;i<rows;i++){
		for(let j=0;j<cols;j++){
			board[i][j]=0;
			weight[i][j]=0;
		}
	}
	updateCanvas();
}

function cleanResult(){
	updateCanvas();
}
