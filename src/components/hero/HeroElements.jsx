import styled from 'styled-components'

import theme from '../../styles/Theme'
import {AiOutlineArrowRight} from 'react-icons/ai'
// import {Link} from 'react-router-dom'

export const Section = styled.section`
  position: relative;
  height: auto;
  width: 100%;
  overflow: hidden;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  height: 45rem;
  line-height: initial;
`

export const Content = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;

  .typedText {
    font-family: 'Inter';
    font-size: 4em;
  }
`

export const ArrowIcon = styled(AiOutlineArrowRight)`
  transform: translateY(2px);
`
