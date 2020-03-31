import React, { useState, useContext, useEffect } from 'react';
import styles from './styles.module.scss';
import { getTimeLineNews } from '../../api';
import { ITimeLineResponse } from '../../models';
import NewsBlock from './NewsBlock';
import Loader from '../../components/Loader';

const NewsPage: React.FC = () => {
  const [news, setNewsList] = useState<ITimeLineResponse[]>();
  const [isLoaded, handleLoaded] = useState<boolean>(false);

  const fetchNews = async () => {
    const newsResponse = await getTimeLineNews();
    setNewsList(newsResponse);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    if (news) {
      handleLoaded(true);
    }
  }, [news]);

  const renderNews = () => {
    if (news && news.length) {
      return news.map((newsItem: ITimeLineResponse) => <NewsBlock data={newsItem} key={newsItem.date} />);
    } else {
      return <div>No news yet</div>;
    }
  };

  if (!isLoaded) {
    return <Loader />;
  }

  return <div className={styles.newsContainer}>{renderNews()}</div>;
};

export default NewsPage;
