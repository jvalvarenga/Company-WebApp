import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100px;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  width: 100%;
  height: auto;
  padding: 8em 0;
  line-height: initial;
  background-color: #020202;
`

export const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  height: 100%;
`
export const Grid = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  align-items: start;
  justify-items: start;
  grid-column-gap: 7rem;
  grid-row-gap: 4.5rem;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
`

export const GridContent = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  /* width: 60%; */
  height: 100%;
  padding: 2em;
  color: ${({theme}) => theme.colors.white};
  gap: 1.2em;

  h2 {
    font-size: 3.2em;
    font-family: Inter;
    font-weight: 800;
  }

  p {
    font-size: 1.6em;
  }
`

export const IconWrap = styled.div`
  color: ${({theme}) => theme.colors.white};
  font-size: 5em;
`
