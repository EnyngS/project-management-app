import React, { MouseEventHandler, ReactElement, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './confirmModal.module.scss';
import { useAppSelector } from '../../store/store';
import { useAppDispatch } from '../../store/store';
import { PostBoards, GetAllBoards, deleteBoard } from '../../store/sliceBoards';
import { setAnswer, setconfirmModal } from '../../store/sliceBoards';
const ConfirmModal = () => {
  const dispatch = useAppDispatch();
  //   function confirm() {

  //   }
  useEffect(() => {
    return () => {
      dispatch(GetAllBoards());
    };
  });
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.quest}>Are you sure?</div>
        <div className={style.answer}>
          <div
            onClick={() => {
              dispatch(setAnswer(true));
              dispatch(setconfirmModal(false));
            }}
            className={style.yes}
          >
            Yes
          </div>
          <div
            onClick={() => {
              dispatch(setAnswer(false));
              dispatch(setconfirmModal(false));
            }}
            className={style.no}
          >
            No
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
