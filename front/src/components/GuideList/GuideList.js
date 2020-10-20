import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MediaCard from '../Guides/Guides';
import { startArticlesSaga } from '../../redux/actions/articleActions';

function GuideList() {
  const dispatch = useDispatch();

  const articles = useSelector((state) => state.articles.articles);
  useEffect(() => {
    dispatch(startArticlesSaga());
  }, [dispatch]);

  return (
    <>

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
