import React, { useEffect } from 'react';
import style from './confirmModal.module.scss';
import { useAppSelector } from '../../store/store';
import { useAppDispatch } from '../../store/store';
import { GetAllBoards, deleteBoard } from '../../store/sliceBoards';

const ConfirmModal = (props: any) => {
  const dispatch = useAppDispatch();

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
          <div onClick={props.setResponseYes} className={style.yes}>
            Yes
          </div>
          <div onClick={props.setResponseNo} className={style.no}>
            No
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
