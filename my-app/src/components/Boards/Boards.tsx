import React, { MouseEventHandler, ReactElement, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './Boards.module.scss';
import { useAppSelector } from '../../store/store';
import { useAppDispatch } from '../../store/store';
import { PostBoards, GetAllBoards, deleteBoard } from '../../store/sliceBoards';
import { BoardPrevType, setModal, setAnswer, setconfirmModal } from '../../store/sliceBoards';
import { useSelector } from 'react-redux';
import ModalBoards from './ModalBoard';
import close from '../../common/img/close.png';
import ConfirmModal from '../confirmModal/confirmModal';

const Boards = () => {
  const dispatch = useAppDispatch();

  const isModal = useAppSelector((store) => store.boart.isModal);
  const confirmModal = useAppSelector((store) => store.boart.confirm);
  const answer = useAppSelector((store) => store.boart.answer);
  const boards = useAppSelector((store) => store.boart.boards);
  const itemId = useAppSelector((store) => store.boart.itemId);
  const state = useSelector((state: any) => state.auth.user);

  useEffect(() => {
    dispatch(GetAllBoards());
  }, []);
  //   useEffect(() => {
  //     dispatch(GetAllBoards());
  //   });
  useEffect(() => {
    dispatch(GetAllBoards());
  }, [answer]);

  function onClick() {
    dispatch(setModal(true));
    dispatch(GetAllBoards());
  }

  const cards = boards.map((item: BoardPrevType): JSX.Element => {
    return (
      <Link className={style.boards__item} key={item.id} to="/">
        <img
          onClick={async (e) => {
            e.preventDefault();
            dispatch(setAnswer(false));
            dispatch(setconfirmModal(true));

            if (answer) {
              dispatch(deleteBoard(item.id));
            }

            return dispatch(GetAllBoards());
          }}
          className={style.close}
          width="30px"
          height="30px"
          src={close}
          alt="Close"
        />

        <div className={style.boards__title}>{item.title}</div>
        <div className={style.boards__desc}>{item.description}</div>
      </Link>
    );
  });
  return (
    <div className={style.wrapper}>
      {isModal ? <ModalBoards /> : ''}
      {confirmModal ? <ConfirmModal /> : ''}
      <button className={style.btn} onClick={onClick}>
        New board
      </button>
      <div className={style.boards}>{cards}</div>
    </div>
  );
};

export default Boards;
