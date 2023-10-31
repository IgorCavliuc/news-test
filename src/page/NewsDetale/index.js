import {useLocation} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {query_news} from "../../api/queries";
import {useEffect} from "react";
import {BigLoader} from "../../ui";
import {formatTime} from "./utils";
import {
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
} from './components'

const NewsDetale =()=>{
    const { state: { id, url } } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { loading, error, data } = useQuery(query_news, {
        variables: { id, url },
    })

    const content = data?.content;

    const {
        thumbnail,
        title,
        description,
        parents,
        dates,
        counters,
    } = content || {};

    if (loading) return <BigLoader>{'Идет загрузка'}</BigLoader>;
    if (error) return <p>Error: {error.message}</p>;
    if (!content) return null;

    let { attachment, id: parentId, title: parentTitle } = parents[1]

    return(
        <Wrapper>
            <FullTop>
                <SourceWrapper>
                    {attachment && (
                        <SourceImage
                            src={`https://i.simpalsmedia.com/point.md/logo/${attachment}`}
                            alt={parentId}
                        />
                    )}
                    <CustomLink to={`https://www.${parentTitle.nu}/`}>
                        {parentTitle.nu}
                    </CustomLink>
                </SourceWrapper>
                <TimeCreatingPost>{formatTime(dates.posted)}</TimeCreatingPost>
                <CounterWrapper>
                    <Counter>{counters.view}</Counter>
                </CounterWrapper>
            </FullTop>
            <Title>{title.short}</Title>
            <Intro>{description.intro}</Intro>
            <Image
                src={`https://i.simpalsmedia.com/point.md/news/600x315/${thumbnail}`}
                alt="Full-photo"
            />
            <Thumbnail>{description.thumbnail}</Thumbnail>
            <AdditionalContent
                dangerouslySetInnerHTML={{ __html: description.long }}
            />
        </Wrapper>
    )
}
export default NewsDetale
