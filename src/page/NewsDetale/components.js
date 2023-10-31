import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  img {
    max-width: 100%;
    border-radius: 5px;
    overflow-wrap: break-word;
  }
`;
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 825px;
  background-color: rgb(255, 255, 255);
  padding: 25px;
  margin: 0 auto;
`
const SourceWrapper = styled.div`
  display: flex;
  align-items: center;
`
const CounterWrapper = styled.div`
  display: flex;
  padding-left: 22px;
  position: relative;
  margin-left: 16px;
  &:before {
    width: 18px;
    height: 18px;
    position: absolute;
    top: 3px;
    left: 0px;
    content: '';
    background: url('https://point.md/static/svg/new-icons/eye.svg') center top /
      contain no-repeat;
  }
`
const Counter = styled.span`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  white-space: nowrap;
  color: rgb(128, 128, 128);
  font-weight: 400;
  font-size: 16px;
`
const SourceImage = styled.img`
  height: 16px;
  border-radius: 2px;
`
const FullTop = styled.div`
  display: flex;
  align-items: center;
`
const Title = styled.h1`
  color: rgb(15, 23, 42);
  font-size: 40px;
  letter-spacing: -1px;
  line-height: 44px;
  font-weight: 700;
  margin: 12px 0px 0px;
`
const Intro = styled.h2`
  color: rgb(15, 23, 42);
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  margin-top: 16px;
  margin-bottom: 24px;
  line-height: 28px;
`
const Thumbnail = styled.figcaption`
  width: 100%;
  color: rgb(128, 128, 128);
  font-size: 14px;
  letter-spacing: 0px;
  line-height: 16px;
  padding-top: 8px;
  word-break: break-word;
  margin-bottom: 24px;
`
const AdditionalContent = styled.div`
  p {
    margin: 0px 0px 15px;
    color: rgb(15, 23, 42);
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 0px;
    line-height: 27px;
    a {
      color: rgb(51, 121, 191);
    }
  }
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 418px;
  object-fit: cover;
  border-radius: 8px;
`
const TimeCreatingPost = styled.div`
  color: rgb(128, 128, 128);
  font-size: 16px;
  line-height: 0;
  white-space: nowrap;
  letter-spacing: 0px;
  margin-left: 16px;
  text-transform: lowercase;
`
const CustomLink = styled(Link)`
  text-decoration: none;
  color: rgb(51, 121, 191);
  font-size: 16px;
  font-weight: 400;
  margin-left: 8px;
  white-space: nowrap;
  &:hover {
    color: tomato;
  }
`

export {
    GlobalStyle,
    Wrapper,
    SourceWrapper,
    CounterWrapper,
    Counter,
    SourceImage,
    FullTop,
    Title,
    Intro,
    Thumbnail,
    AdditionalContent,
    Image,
    TimeCreatingPost,
    CustomLink
}