import { useState } from "react";
import "./App.css";
import { Box, Button } from "@mui/material";

function App() {
  const [box, setBox] = useState(Array(9).fill(null));
  const [isArun, setIsArun] = useState(true);

  function Boxes({ value, onClick }) {
    return (
      <Button
        sx={{ backgroundColor: "white", height: "50px", m: 1 }}
        onClick={onClick}
      >
        {value}
      </Button>
    );
  }

  const handleClick = (i) => {

    if (winner(box)) {
      return
    }
    box[i] = isArun ? "Arun" : "kumar";
    setBox(box);
    setIsArun(!isArun);
  };

  const winner = (box) => {
    const possibilities = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];

    for (let i = 0; i < possibilities.length; i++) {
      const [a, b, c] = possibilities[i];
      if (box[a] && box[a] === box[b] && box[a] === box[c]) {
        return box[a];
      }
    }
    return null;
  };

  const victory = winner(box);
  let status;

  if (victory) {
    status = `winner : ${victory}`;
  } else {
    status = `play: ${isArun ? "Arun" : "Kumar"}`;
  }

  const handleRestart = () => {
    setIsArun(true);
    setBox(Array(9).fill(null));
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{mb:4}}>{status}</Box>
        <Box>
          <Boxes value={box[0]} onClick={() => handleClick(0)} />
          <Boxes value={box[1]} onClick={() => handleClick(1)} />
          <Boxes value={box[2]} onClick={() => handleClick(2)} />
        </Box>
        <Box>
          <Boxes value={box[3]} onClick={() => handleClick(3)} />
          <Boxes value={box[4]} onClick={() => handleClick(4)} />
          <Boxes value={box[5]} onClick={() => handleClick(5)} />
        </Box>
        <Box>
          <Boxes value={box[6]} onClick={() => handleClick(6)} />
          <Boxes value={box[7]} onClick={() => handleClick(7)} />
          <Boxes value={box[8]} onClick={() => handleClick(8)} />
        </Box>

        <Box>
          <Button
            sx={{
              backgroundColor: "white",
              mt: 4,
              color: "black",
              "&:hover": {
                backgroundColor: "white", // or any color you want
                boxShadow: "none", // removes shadow
              },
            }}
            onClick={handleRestart}
          >
            Restart game
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default App;
