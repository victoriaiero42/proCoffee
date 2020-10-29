import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MediaCard from '../Guides/Guides';
import { startArticlesSaga } from '../../redux/actions/articleActions';
import CenteredGrid from '../ArticleTitle/ArticleTitles';

function GuideList() {
  const dispatch = useDispatch();

  const articles = useSelector((state) => state.articles.articles);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     dispatch(startArticlesSaga());

  //   };

  //   fetchData();
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(startArticlesSaga());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(startGoogleAuthenticateSaga());
  // }, [dispatch]);

  return (
    <>
      <CenteredGrid />
      {articles ? articles.map((el) => (
        <Link key={el._id} to={`/guides/${el._id}`}>
          <MediaCard key={el.id} id={el._id} />
          {' '}
        </Link>
      )) : null}
    </>
  );
}

export default GuideList;
