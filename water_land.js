// Terrain, Water, Land

/*
[ 0, 1, 1, 0 ]
[ 1, 0, 0, 0 ]
[ 0, 0, 1, 1 ]
[ 1, 0, 0, 1 ]
*/

// Iterate through each square
  // Check if current Square isPond == true
    // increment pondCount;
    // if so, check adjacent squares for water-ism

    // isCurrentSquarePond(currentSquareX, currentSquareY, isFirstSq) {
      // isPond = false

      // Starts Recursion/Base Case
      // if currentSquare is Water (1) 
        // toggle currentSquare to 0
        // isCurrentSquarePond (currentSquare X + 1, currentSquare Y, false) 
        // isCurrentSquarePond (currentSquare X - 1, currentSquare Y, false) 
        // isCurrentSquarePond (currentSquare X, currentSquare Y + 1, false) 
        // isCurrentSquarePond (currentSquare X , currentSquare Y - 1, false) 

      // if (!isFirstSq)
        // isPond = true

      // return isPond
   // }