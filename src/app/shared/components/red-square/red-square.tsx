import styled from "styled-components";

type RedSquareTypes = {
  coordinates: {
    coordX: number;
    coordY: number;
  }[];
};

type PositionProps = {
  coord: {
    coordX: number;
    coordY: number;
  };
};

const RedSquare = ({ coordinates }: RedSquareTypes) => {
  return(
    <>
      {coordinates.map((coord, index) => {
          return <RedSquareStyled coord={coord} key={index} />;
        })
      }
    </>
  )
};

const RedSquareStyled = styled.div`
  width: 10px;
  height: 10px;
  background-color: red;

  position: absolute;
  top: ${(props: PositionProps) => `${props.coord.coordY}px`};
  left: ${(props: PositionProps) => `${props.coord.coordX}px`};
`;

export default RedSquare;
