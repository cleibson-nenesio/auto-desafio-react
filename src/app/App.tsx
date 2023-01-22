import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import DivFullScreen from "./shared/components/full-screen/div-full-screen";
import RedSquare from "./shared/components/red-square/red-square";

function App() {
  const [coordinates, setCoordinates] = useState<
    { coordX: number; coordY: number }[]
  >([]);

  const [deletedSquares, setDeletedSquares] = useState<
    { coordX: number; coordY: number }[]
  >([]);

  const createSquare = (e: React.MouseEvent) => {
    const coordX = e.clientX;
    const coordY = e.clientY;

    setCoordinates([
      ...coordinates,
      {
        coordX: coordX,
        coordY: coordY,
      },
    ]);
  };

  const undoSquares = () => {
    if (coordinates.length === 0) return;

    const lastSquare = coordinates.pop();

    if (lastSquare) {
      setDeletedSquares([...deletedSquares, lastSquare]);
    }

    setCoordinates([...coordinates]);
  };

  const redoSquares = () => {
    if (deletedSquares.length === 0) return;

    const lastSquare = deletedSquares.length - 1;
    setCoordinates([...coordinates, deletedSquares[lastSquare]]);
    deletedSquares.pop();
  };

  return (
    <>
      <GlobalStyles />
      <button onClick={() => undoSquares()}>Undo</button>
      <button onClick={() => redoSquares()}>Redo</button>
      <hr />
      <DivFullScreen createSquare={createSquare}>
        <RedSquare coordinates={coordinates} />
      </DivFullScreen>
    </>
  );
}

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }
`;

export default App;
