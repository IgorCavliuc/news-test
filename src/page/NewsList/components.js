import { Link } from 'react-router-dom';
import styled from 'styled-components';
const ListWallpaper = styled.div`
  max-width: 984px;
  width: calc(100% - 30px);
  margin: 0 auto;
  //padding: 24px;
  border-radius: 8px;
`
const List = styled.div`
  border-radius: 15px;
  padding: 25px 20px;
  background-color: rgb(255, 255, 255);
`
const Image = styled.img`
  margin-right: 20px;
  max-width: 240px;
  border-radius: 4px;
`
const LogoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;
`
const Url = styled(Link)`
  text-decoration: none;
`
const LogoImage = styled.img`
  width: 170px;
  height: 48px;
`

const Slogan = styled.p`
  color: rgb(128, 128, 128);
  font-size: 12.1px;
  margin-right: 25px;
`

const Prefix = styled.h1`
  color: rgb(15, 23, 42);
  position: relative;
  font-weight: 700;
  text-align: left;
  font-size: 28px;
  margin-bottom: 30px;
`

const NewsItem = styled.div`
  display: flex;
  align-items: start;
  margin-bottom: 30px;
`

const TitleNews = styled.h3`
  font-size: 24px;
  line-height: 26px;
  position: relative;
  color: rgb(15, 23, 42);
  letter-spacing: 0px;
  margin: -2.5px 0px 8px;
  font-weight: 500;
  transition: .3s;
  &:hover {
    color: tomato;
  }
`
const Intro = styled.p`
  line-height: 20px;
  font-size: 16px;
  font-weight: 400;
  margin: 0px 0px 10px;
  color: rgb(15, 23, 42);
`
const TimeCreateAgo = styled.time`
  font-size: 14px;
  color: rgb(128, 128, 128);
  line-height: 0;
  width: max-content;
`
const DatesPosted = styled.div`
  margin: 0px;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
`
const Attachment = styled.img`
  width: 16px;
  height: 16px;
  border-radius: 2px;
  margin-right: 8px;
`

export {
    ListWallpaper,
    List,
    Image,
    LogoBlock,
    Url,
    LogoImage,
    Slogan,
    Prefix,
    NewsItem,
    TitleNews,
    Intro,
    TimeCreateAgo,
    DatesPosted,
    Attachment
}