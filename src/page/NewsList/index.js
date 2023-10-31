import { useState } from 'react';

import {calculateTime} from "./utils";

import { query_news_list } from '../../api/queries';

import { useLazyQuery } from '@apollo/client';
import { useInView } from 'react-intersection-observer';

import {BigLoader} from "../../ui";

import {
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
} from './components'

const NewsList = () => {
    const take = 30;
    const [skip, setSkip] = useState(0);
    const [newsData, setNewsData] = useState([]);

    const [getNewsData, { loading: queryLoading, error }] = useLazyQuery(
        query_news_list,
        {
            onCompleted: (newData) => {
                if (newData.contents) {
                    setNewsData((prevState) => [...prevState, ...newData.contents]);
                }
            },
        }
    );

    const [ref] = useInView({
        threshold: 0,
        onChange: (inView) => {
            if (inView) {
                setSkip(prevSkip => prevSkip + take);
                getNewsData({
                    variables: { skip: skip, take }
                });
            }
        },
    });

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

                <BodyList error={error} skip={skip} queryLoading={queryLoading} newsData={newsData}/>
            </List>
            <div ref={ref}/>
        </ListWallpaper>
    )
}

const BodyList = ({newsData, error, queryLoading, skip}) => {

    if (queryLoading && skip === 0) return <BigLoader>{'Идет загрузка'}</BigLoader>


    if (error) return <p>Error</p>

    if (!newsData || (!newsData?.length && !queryLoading))
        return <p>Список пуст</p>

    return newsData?.map((news, index)=>{
        const {
            id,
            title,
            url,
            description,
            thumbnail,
            dates,
            parents,
        } = news
        const {attachment, id: parentId} = parents[1]

        return(
            <NewsItem key={index} id={id}>
                <Url to={`/news-details/${id}`} state={{ id, url }}>
                    <Image
                        src={`https://i.simpalsmedia.com/point.md/news/370x194/${thumbnail}`}
                        alt={description.intro}
                    />
                </Url>
                <div>
                    <Url to={`/news-details/${id}`} state={{ id, url }}>
                        <TitleNews>{title.short}</TitleNews>
                    </Url>
                    <Intro>
                        {description.intro?.slice(0, 140) + '...'}
                    </Intro>
                    <DatesPosted>
                        {attachment && (
                            <Attachment
                                src={`https://i.simpalsmedia.com/point.md/logo/${attachment}`}
                                alt={parentId}
                            />
                        )}
                        <TimeCreateAgo>{calculateTime(dates?.posted)}</TimeCreateAgo>
                    </DatesPosted>
                </div>
            </NewsItem>
        )
    })
}

export default NewsList
