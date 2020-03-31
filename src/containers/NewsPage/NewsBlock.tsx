import React, { useState, useContext, useEffect } from 'react';
import { ITimeLineResponse, INews } from '../../models';
import { trimText } from '../../utils/helpers';
import styles from './styles.module.scss';
import { Collapse, Button } from 'reactstrap';

export interface INewsBlockItemProps {
  data: ITimeLineResponse;
}

const NewsBlock: React.FC<INewsBlockItemProps> = (props) => {
  const { time, date } = props.data;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);
  const renderNewsItems = (from: number, to: number) => {
    if (time.length) {
      const news = time.slice(from, to);
      return news.map((newsItem: INews, counter: number) => (
        <div key={counter}>
          <h4>
            <a target="_blank" href={newsItem.source}>
              {trimText(newsItem.description, 50)}
            </a>
          </h4>
          <p>{newsItem.description}</p>
        </div>
      ));
    }
  };
  return (
    <div>
      <div className={styles.header}>
        <h3>{date}</h3>
        <div className={styles.newsCounter}>{time.length}</div>
      </div>
      {renderNewsItems(0, 10)}
      <div className="d-flex justify-content-end">
        {!isOpen ? (
          <Button onClick={toggle} color="secondary">
            <span>Show more</span>
          </Button>
        ) : (
          <></>
        )}
      </div>
      <Collapse isOpen={isOpen}>
        {renderNewsItems(11, time.length)}
        <div className="d-flex justify-content-end">
          {isOpen ? (
            <Button onClick={toggle} color="secondary">
              <span>Hide</span>
            </Button>
          ) : (
            <></>
          )}
        </div>
      </Collapse>
    </div>
  );
};

export default React.memo(NewsBlock);
