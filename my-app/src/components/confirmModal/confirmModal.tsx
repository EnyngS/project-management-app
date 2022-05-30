import React, { useEffect } from 'react';
import style from './confirmModal.module.scss';
import { useAppSelector } from '../../store/store';
import { useAppDispatch } from '../../store/store';
import { GetAllBoards, deleteBoard } from '../../store/sliceBoards';
import { getAllCell, deleteColumn, getAllTask } from '../../store/taskReduser';
const ConfirmModal = (props: any) => {
  const dispatch = useAppDispatch();
  let BoardID: any = localStorage.getItem('BoardID');
  const columns = useAppSelector((state: any) => state.task.columns);
  //   -----------Обновляем все стейты при закрытии модалки------------------------
  useEffect(() => {
    return () => {
      dispatch(GetAllBoards());
      dispatch(getAllCell());
      columns && dispatch(getAllTask(columns?.filter((i: any) => i.order == 0)[0].id));
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
