import React, { MouseEventHandler, ReactElement, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './Boards.module.scss';
import { useAppSelector } from '../../store/store';
import { useAppDispatch } from '../../store/store';
import { PostBoards, GetAllBoards, deleteBoard } from '../../store/sliceBoards';
import { BoardPrevType, setModal, setDeleteItem, setconfirmModal } from '../../store/sliceBoards';
import { useSelector } from 'react-redux';
import ModalBoards from './ModalBoard';
import close from '../../common/img/close.png';
import ConfirmModal from '../confirmModal/confirmModal';
import { setBoardID } from '../../store/taskReduser';

const Boards = () => {
  const dispatch = useAppDispatch();
  const isModal = useAppSelector((store) => store.boart.isModal);
  const confirmModal = useAppSelector((store) => store.boart.confirm);
  const boards = useAppSelector((store) => store.boart.boards);
  const deleteBoard = useAppSelector((store) => store.boart.deleteBoard);

  useEffect(() => {
    dispatch(GetAllBoards());
  }, []);

  useEffect(() => {
    dispatch(GetAllBoards());
  }, [deleteBoard]);

  const cards = boards.map((item: BoardPrevType): JSX.Element => {
    return (<>
	 	<Link 
		 className={style.boards__item} 
		 key={item.id} 
		 to="/task"
		 onClick={()=>dispatch(setBoardID(item.id))}
		 >
        <img
          onClick={(e) => {
            e.preventDefault();
            dispatch(setDeleteItem(item.id));
            dispatch(setconfirmModal(true));
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
	 </>
    );
  });
  return (
    <div className={style.wrapper}>
      {isModal ? <ModalBoards /> : ''}

      {confirmModal ? <ConfirmModal /> : ''}
      <button className={style.btn} onClick={() => dispatch(setModal(true))}>
        New board
      </button>
      <div className={style.boards}>{cards}</div>
    </div>
  );
};

export default Boards;
