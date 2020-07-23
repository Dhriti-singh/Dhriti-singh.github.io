function call_BestFirstSearch(){
	updateCanvas();
	
	//to store all the nodes
	let nodes = [[]];

	//information of each node
	function Node(i,j){
		this.i =i;
		this.j = j;
		this.h = 0;
		//Math.abs(i - goalState.i) + Math.abs(j - goalState.j);
		this.cost = Math.max(1,weight[i][j]);
		this.visited = false;
		this.closed = false;
		this.parentX = i;
		this.parentY = j;
		this. walk = board[i][j];
	}

	//initila and final state
	let start = new Node(initialState.i, initialState.j);
	let end = new Node(goalState.i , goalState.j);

	for(let i=0 ; i<rows; i++){
		nodes[i] = [];
		for(let j=0; j<cols ; j++){
			nodes[i][j] = new Node(i,j);
			nodes[i][j].h = heuristic(nodes[i][j] , goalState);
		}
	}

	//the frontier will be implemented as a heap
	function heap() {
        return new BinaryHeap(function(node) {
            return node.h;
        });
    }

    //toc check if the current node is the goal state
	function check(currNode){
		if(currNode.i == goalState.i && currNode.j== goalState.j){
			return true;
		}
		else{
			return false;
		}
	}
	 // a variable to check if this goal is achieved
	let BestFirstSearchFinish = false;

	//stores all the visited nodes
    let visitedNodes = [];

    //stores the optimal path to goal
    let shortestPath = [];

	function BestFirstSearch(){

		//initializing the frontier as a binary heap
		let frontier = heap();
		frontier.push(start);

		start.h = heuristic(start,end);

		while(frontier.size()>0){
			//poping the lowest h(x) value node;
			let front = frontier.pop();

			//console.log(front);
			
			//if the current node is the goal state
			if(check(front)){
				BestFirstSearch = true;
				return;
			}

			//closing the current node
			front.closed = true;

			//expanding the node
			let neighbours = Neighbours(front, nodes);

			for(let i=0;i<neighbours.length;i++){
				let neighbour = neighbours[i];
				visitedNodes.push(neighbour);

				//if the nodes is already expaned, then continue
				if(neighbour.closed==true){
					continue;
				}

				let beenVisited = neighbour.visited;
				neighbour.visited = 1;
				neighbour.parentY = front.j;
				neighbour.parentX = front.i;

				//adding the cost of movement to each node
				neighbour.h = neighbour.h + neighbour.cost;
				
				//adding the node to the frontier
				if(beenVisited==0){
					frontier.push(neighbour);
				}

				//node is already in the frontier, rescoring the node
				else{
					frontier.rescoreElement(neighbour);
				}
			}
		}
	}

	BestFirstSearch();

	//if the node is unreachable
	if(BestFirstSearch==false){
		console.log("no solution is avaiable");
	}
	else{
		let currX = goalState.i;
		let currY = goalState.j;

		//backtracking the path from the goal state

		while(1){
			if(currX==initialState.i && currY==initialState.j){
				break;
			}
			else{
				let parent_x = nodes[currX][currY].parentX;
				let parent_y = nodes[currX][currY].parentY;
				//console.log(parent_x, parent_y);
				currX = parent_x
				currY = parent_y;
				let curr = new selectedNode(currX, currY);
				shortestPath.push(curr);
			}
		}
	}
	
	//visualizing the optimal path
	drawArrayBlue(visitedNodes);
	drawArrayYellow(shortestPath);
	singleCellDraw(initialState.i, initialState.j,"green");
	singleCellDraw(goalState.i,goalState.j,"red");
}