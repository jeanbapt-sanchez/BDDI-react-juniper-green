import styled, { keyframes } from "styled-components";

const pulse = keyframes`
    0% {
    fill:#10aded;
    stroke-width:10px
    }
    50% {
    fill:#bada55;
    stroke-width:2px
    }
    100%{
    fill:#10aded;
    stroke-width:10px
    }
`;

const ContainerSVG = styled.svg`
  height: 100px;
  width: 100px;
`;

const CirAnimate = styled.circle`
  animation: ${pulse} infinite 4s linear;
  fill: blue;
`;

const Cir = styled.circle`
  fill: blue;
`;

const Rect = styled.rect`
  animation: ${pulse} infinite ${props => props.second ?? '4'}s linear;
  fill: blue;
`;

const Circle = ({ w, h, cx, cy, r, number,easter_eggs, stop  }) => {

  if (easter_eggs.includes(number))
    return (
      <ContainerSVG height={h} width={w}>
          <Rect 
            x={Math.floor( cx / 2)} 
            y={Math.floor(cy/ 2)} 
            width={Math.floor(w / 2)}
            height={Math.floor(h / 2)}
            stroke="black" 
            stroke-width="3" 
            />
        <text
          x={Math.floor(w / 2)}
          y={Math.floor(h / 2)}
        >{number}</text>
      </ContainerSVG>
    )

    // stop est pp dans l'objet circle qui hydrate mes Cercles
  return (
    <ContainerSVG height={h} width={w}>
      { stop === true ?
        <Cir cx={cx} cy={cy} r={r} stroke="black" stroke-width="3" />
        :
        <CirAnimate cx={cx} cy={cy} r={r} stroke="black" stroke-width="3" />
      }
      <text
        x={Math.floor(w / 2)}
        y={Math.floor(h / 2)}
      >{number}</text>
    </ContainerSVG>
  )
}

export default Circle;