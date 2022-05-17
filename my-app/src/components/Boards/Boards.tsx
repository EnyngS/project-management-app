import React, { ReactElement, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './Boards.module.scss';
import { useAppSelector } from '../../store/store';
import { useAppDispatch } from '../../store/store';
// import { PostBoards } from '../../store/sliceBoards';
import { BoardPrevType } from '../../store/sliceBoards';

const Boards = () => {
  const fakeData = {
    id: '9a111e19-24ec-43e1-b8c4-13776842b8d2',
    title: 'Homework tasks',
    description: 'My board tasks',
  };
  const boards = useAppSelector((store) => store.boart);
  const dispatch = useAppDispatch();
  useEffect(() => {
    //  dispatch(PostBoards(fakeData));
  }, []);
  const cards = boards.map((item: BoardPrevType): JSX.Element => {
    return (
      <Link className={style.boards__item} key={item.id} to="/">
        <div className={style.boards__title}>{item.title}</div>
        <div className={style.boards__desc}>{item.description}</div>
      </Link>
    );
  });
  return <div className={style.boards}>{cards}</div>;
};

export default Boards;
