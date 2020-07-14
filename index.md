<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Maze</title>

    <script src="https://cdn.jsdelivr.net/npm/p5@1.0.0/lib/p5.js"></script>
    <script src="https://unpkg.com/konva@7.0.2/konva.min.js"></script>
   
    <link rel= "stylesheet" type= "text/css" href= "CSS/style.css" >
    <script type="text/javascript" src="getValue.js">                 </script>

</head>
<body>
  <h1>Path Finding Visualizer</h1>

  <span class="dropdown_algorithm">
    <button class="dropdown_button">ALGORITHMS</button>
    <div class="dropdown_algorithm_content">
      <div id="dropdown_algorithms">
        <input type="radio" name="algo" value="dfs" id="dfs" >
        <label for="dfs">DFS</label>
        <br>
        <input type="radio" name="algo" value="bfs"  id="bfs">
        <label for="bfs">BFS</label>
        <br>
        <input type="radio" name="algo" value="dijkstra"  id="dijkstra">
        <label for="dijkstra">Dijkstra</label>
        <br>
        <input type="radio" name="algo" value="Astar" id="Astar">
        <label for="Astar">Astar</label>
        <br>
        <input type="radio" name="algo" value="IDDFS" id="IDDFS">
        <label for="IDDFS">IDDFS</label>
        <br>
        <input type="radio" name="algo" value="IDAstar" id="IDAstar">
        <label for="IDAstar">IDAstar</label>
      </div>
    </div>
  </span>

  <span class="dropdown_heuristic">
    <button class="dropdown_button">HEURISTIC</button>
    <div class="dropdown_heuristic_content">
      <div id="dropdown_heuristic">
        <input type="radio" name="heuristic" id="manhattan" >
        <label for="manhattan">Manhattan</label>
        <br>
        <input type="radio" name="heuristic"  id="euclidean">
        <label for="euclidean">Euclidean</label>
        <br>
        <input type="radio" name="heuristic"  id="chebyshev">
        <label for="chebyshev">Chebyshev</label>
        <br>
        <input type="radio" name="heuristic" id="octile">
        <label for="octile">Octile</label>
      </div>
    </div>
  </span>

  <span class="dropdown_maze">
    <button class="dropdown_button">MAZE PATTERN</button>
    <div class="dropdown_maze_content">
      <button type = "button" onclick = "recursiveWall()">
        Recursive Wall 
      </button>

      <button type = "button" onclick = "randomWallSparse()">
        Random Wall Sparse
      </button>

       <button type = "button" onclick = "randomWallDense()">
        Random Wall Dense
      </button>

      <button type = "button" onclick = "randomWeightSparse()">
        Random Weight Sparse
      </button>

      <button type = "button" onclick = "randomWeightDense()">
        Random Weight Dense
      </button>
    </div>
  </span>
  
  <span class="dropdown_block">
    <button class="dropdown_button">CREATE BLOCK</button>
    <div class="dropdown_block_content">
      <div id="dropdown_block">
        <input type="radio"  name="block" value=1 id="wall"  >
        <label for = "wall"  >Wall       </label>
        <br>
        <input type="radio"  name="block" value=2 id="weight">
        <label for = "weight">Weight   </label>
      </div>
    </div>
  </span>

  <br><br>
  <span id = "block">
    <input type="checkbox"  name="Diagonal Movement" value=1 id="diagonal"  >
    <label for = "diagonal"  >Diagonal Movement       </label>
  </span>

  <button type = "button" onclick = "cleanBoard()">
        Clean Board
  </button>

  <button type = "button" onclick = "cleanResult()">
        Clean Search Results
  </button>

  <button type = "button" onclick = "onStart()">
    Start
  </button>


    

  <br><br>
  <!-- adding the start box, and making it dragable -->
  <div id="container"></div>
  <canvas id="canvas_trigger" width="1250px" height="500px"></canvas>

   <!-- //needed to add the javascript file after adding the canvas -->

  <script type="text/javascript" src="Grid/DrawCells.js">           </script>
  <script type="text/javascript" src="Node.js">                     </script>
  <script type="text/javascript" src="Grid/board.js">               </script>
  <script type="text/javascript" src="Grid/drawStart.js">           </script>
  <script type="text/javascript" src="Grid/drawEnd.js">             </script> 
  <script type="text/javascript" src="Algorithms/DFS.js">           </script>
  <script type="text/javascript" src="Algorithms/DFS2.js">          </script>
  <script type="text/javascript" src="Algorithms/BFS.js">           </script>
  <script type="text/javascript" src="Algorithms/Astar.js">         </script>
  <script type="text/javascript" src="Algorithms/dijkstra.js">      </script>
  <script type="text/javascript" src="heapFunction.js">             </script>
  <script type="text/javascript" src="Algorithms/IDDFS.js">         </script>
  <script type="text/javascript" src="Algorithms/IDAstar.js">       </script>
  <script type="text/javascript" src="Algorithms/heuristics.js">     </script>

  <footer>
    <span>project hosted on</span>
    <a href="https://github.com/Dhriti-singh/path_finding">GitHub</a>
  </footer>
 
</body>
</html>