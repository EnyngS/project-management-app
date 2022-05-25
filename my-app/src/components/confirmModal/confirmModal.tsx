import React, { useEffect } from 'react';
import style from './confirmModal.module.scss';
import { useAppSelector } from '../../store/store';
import { useAppDispatch } from '../../store/store';
import { GetAllBoards, deleteBoard } from '../../store/sliceBoards';
import { setDeleteItem, setconfirmModal } from '../../store/sliceBoards';

const ConfirmModal = () => {
  const dispatch = useAppDispatch();
  const deleteItem = useAppSelector((store) => store.boart.deleteItem);
  useEffect(() => {
    dispatch(GetAllBoards());
  }, [deleteBoard]);
  useEffect(() => {
    return () => {
      dispatch(GetAllBoards());
    };
  });
  function setResponseYes(): void {
    if (deleteItem) {
      dispatch(deleteBoard(deleteItem));
      dispatch(setDeleteItem(''));
    }
    dispatch(setconfirmModal(false));
  }
  function setResponseNo(): void {
    dispatch(setconfirmModal(false));
    dispatch(setDeleteItem(''));
  }

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.quest}>Are you sure?</div>
        <div className={style.answer}>
          <div onClick={setResponseYes} className={style.yes}>
            Yes
          </div>
          <div onClick={setResponseNo} className={style.no}>
            No
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
