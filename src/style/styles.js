import styled from 'styled-components'

export const Container = styled.div`
  font-family: 'Inter';
  font-size: 16px;
  & h3 {
    margin: 0;
    padding: 0;
    line-height: 0.85em;
    font-family: 'Ayer Poster', serif;
    font-weight: 700;
    font-size: min(14vw, 8em);
  }
`

export const TopLeftSide = styled.div`
  position: absolute;
  top: 5vw;
  left: 10vw;
`

export const BottomRow = styled.div`
  position: absolute;
  bottom: 5vw;
  left: 10vw;
  right: 5vw;        
  display: flex;
  justify-content: space-between; 
  align-items: center;
`

export const BottomLeftSide = styled.div`
  width: 30ch;
  max-width: 40%;
  & a {
    color: inherit;
    text-decoration: none;
  }
`

export const BottomRightSide = styled.div`
  width: 35ch;
  max-width: 40%;
  line-height: 1em;
  letter-spacing: -0.01em;
  text-align: right;
`