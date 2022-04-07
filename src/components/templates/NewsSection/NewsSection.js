import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Wrapper, NewsSectionHeader, ArticleWrapper, TitleWrapper, ContentWrapper } from './NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';

const API_TOKEN = process.env.REACT_APP_DATOCMS_TOKEN;
const API_ENDPOINT = 'https://graphql.datocms.com/';
export const query = `
         {
          allArticles {
            id
            title
            category
            content
            image {
              url
            }
          }
        }
      `;

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .post(
        API_ENDPOINT,
        {
          query,
        },
        {
          headers: {
            authorization: `Bearer ${API_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch(() => {
        setError('Sorry we could not load requested data :(');
      });
  }, []);

  return (
    <Wrapper>
      <NewsSectionHeader>News feed section</NewsSectionHeader>
      {articles.length > 0 ? (
        articles.map(({ id, title, category, content, image = null }) => {
          return (
            <ArticleWrapper key={id}>
              <TitleWrapper>
                <h3>{title}</h3>
                <p>{category}</p>
              </TitleWrapper>
              <ContentWrapper>
                <p>{content}</p>
                {image ? <img src={image.url} alt="article image" /> : null}
              </ContentWrapper>
              <Button isBig>Click me</Button>
            </ArticleWrapper>
          );
        })
      ) : (
        <NewsSectionHeader>{error ? error : 'Loading...'}</NewsSectionHeader>
      )}
    </Wrapper>
  );
};

NewsSection.propTypes = {};

export default NewsSection;
