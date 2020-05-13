import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const ImgWrapper = styled.div`
  border-radius: 20px;
  display: block;
  height: 0;
  overflow:hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`
export const ImgWrapperSynopsis = styled.div`
  border-radius: 20px;
  display: block;
  height: 100%;
  overflow:hidden;
  padding: 100% 0 0 0;
  position: relative;
`

export const Img = styled.img`
  ${fadeIn()}
  box-shadow: 0, 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`
export const Article = styled.article`
  min-height: 200px;
  padding: 5px;
  background-color: white;
`

export const MovieTickets = styled.div`
  display:inline-block;
  justify-items: center;
`

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border-bottom: 1px outset rgba(0,0,0,0.78);
  border-left: 1px outset rgba(0,0,0,0.78);
  border-right: 1px outset rgba(0,0,0,0.78);
  border-top: 1px outset rgba(0,0,0,0.78);
`

export const Item = styled.li`
  display: inline-table;
  color: black;
  text-align: center;
  padding: 6px;
  margin-left: 15%;
  text-decoration: none;
`

export const SchedulesText = styled.div`
  color: black;
  margin-top: 10px;
  padding-left:10px;
`

export const SynopsisP = styled.p`
  padding: 5px;
  font-size: medium;
`