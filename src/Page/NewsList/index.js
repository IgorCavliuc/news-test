import  { useLazyQuery } from "@apollo/client";
import { query_news_list } from "../../server";
import { useEffect, useState } from "react";
import styled from 'styled-components'
import { Link } from "react-router-dom";
import {calculateTime} from "./utils";
import {BigLoader} from "../../ui";
import { useInView } from 'react-intersection-observer';


const ListWallpaper = styled.div`
  max-width: 984px;
  width: 100%;
  margin: 0 auto;
  padding: 24px;
  border-radius: 8px;
`
const List = styled.div`
  border-radius: 15px;
  padding: 25px 20px;
  background-color: rgb(255, 255, 255);
`
const Image = styled.img`
  margin-right: 20px;
  width: 240px;
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
const NewsList = () => {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);



    const [getNewsData, { loading: queryLoading, error }] = useLazyQuery(
        query_news_list,
        {
            variables: { skip:0, take: 30 },
            onCompleted: (newData) => {
                    setLoading(false);
                if ( newData.contents) {
                    setNewsData(prevState => [...prevState, ...newData.contents]);
                    setLoading(true);
                }
            },
        },
    );

    const [ref] = useInView({
        threshold: 0,
        onChange:(inView)=>{
            if (inView && loading) {
                getNewsData();
            }
        }
    });

    useEffect(() => {
        if (loading) {
            getNewsData();
        }
    }, [loading, getNewsData]);

    return(
        <ListWallpaper>
            <LogoBlock>
                <Url to={'/'}>
                    <LogoImage
                        src="https://point.md/static/svg/new-point-logo.svg"
                        alt="point-logo"
                    />
                </Url>
                <Slogan>Думай и решай свободно</Slogan>
            </LogoBlock>

            <List >
                <Prefix>Сегодня</Prefix>
                {queryLoading  && (
                    <BigLoader>{'Идет загрузка'}</BigLoader>
                )}
                {error && <p>Error</p>}
            {newsData?.length ? newsData?.map((news, index)=>{
                const {
                    id,
                    title,
                    url,
                    description,
                    thumbnail,
                    dates,
                    parents,
                } = news
                return(
                    <NewsItem key={index} id={id}>
                        <Url to={`/news-detale/${id}`} state={{ id, url }}>
                            <Image
                                src={`https://i.simpalsmedia.com/point.md/news/370x194/${thumbnail}`}
                                alt={description.intro}
                            />
                        </Url>
                        <div>
                            <Url to={`/news-detale/${id}`} state={{ id, url }}>
                                <TitleNews>{title.short}</TitleNews>
                            </Url>
                            <Intro>
                                {description.intro?.slice(0, 140) + '...'}
                            </Intro>
                            <DatesPosted>
                                {parents[1].attachment && (
                                    <Attachment
                                        src={`https://i.simpalsmedia.com/point.md/logo/${parents[1].attachment}`}
                                        alt={parents[1].id}
                                    />
                                )}
                                <TimeCreateAgo>{calculateTime(dates.posted)}</TimeCreateAgo>
                            </DatesPosted>
                        </div>
                    </NewsItem>
                )
            }) : !loading ? <p>Список пуст</p> : null}
            </List>
                <div ref={ref}/>
        </ListWallpaper>
    )
}
export default NewsList

