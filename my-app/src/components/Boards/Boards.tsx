import React, { MouseEventHandler, ReactElement, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './Boards.module.scss';
import { useAppSelector } from '../../store/store';
import { useAppDispatch } from '../../store/store';
import { PostBoards, GetAllBoards, deleteBoard } from '../../store/sliceBoards';
import { BoardPrevType } from '../../store/sliceBoards';
import { useSelector } from 'react-redux';

const Boards = () => {
  const dispatch = useAppDispatch();

  const fakeData = {
    title: 'Homework tasks',
    description: 'My board taskss',
  };
  const boards = useAppSelector((store) => store.boart.boards);
  const state = useSelector((state: any) => state.auth.user);

  useEffect(() => {
    dispatch(GetAllBoards());
  }, []);
  function onClick() {
    dispatch(PostBoards(fakeData));
    dispatch(GetAllBoards());
  }
  const cards = boards.map((item: BoardPrevType): JSX.Element => {
    return (
      <Link className={style.boards__item} key={item.id} to="/">
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(deleteBoard(item.id));
            dispatch(GetAllBoards());
          }}
        >
          Delete
        </button>
        <div className={style.boards__title}>{item.title}</div>
        <div className={style.boards__desc}>{item.description}</div>
      </Link>
    );
  });
  return (
    <div className={style.wrapper}>
      <button className={style.btn} onClick={onClick}>
        New board
      </button>
      <div className={style.boards}>{cards}</div>
    </div>
  );
};

export default Boards;
