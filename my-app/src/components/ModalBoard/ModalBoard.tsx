import { useFormik } from 'formik'
import React, {FC} from 'react'
import style from './ModalBoard.module.scss'
import * as Yup from 'yup';
import { useSelector } from 'react-redux';

type Iprops = {
	modal: (param: any) => any
	create: (columnId:any , title:string, description:string) => Promise<any>
}

const ModalBoard:FC <Iprops>= ({modal,create})=> {
	const columns = useSelector((state:any) => state.task.columns)
	const formik = useFormik({
		initialValues: {
		  title: '',
		  description: '',
		},
		validationSchema: Yup.object({
		  title: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
		  description: Yup.string().max(40, 'Must be 20 characters or less').required('Required'),
		}),
		onSubmit: (values):void => {
			modal(false)
		  formik.resetForm();
		  let title = values.title
		  let description = values.description
		  create( columns[0].id , title , description )
		  values = {
			 title: '',
			 description: '',
		  };
		 
		},
	 });
	return(<div className={style.modallWrapper}>

<form onSubmit={formik.handleSubmit}>
        <label htmlFor="title">
          Задача
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            id="title"
            type="text"
          />
        </label>
        <div>
          {formik.touched.title && formik.errors.title ? formik.errors.title : null}
        </div>
        <label htmlFor="description">
          Описание
          <textarea
            cols={20}
            rows={3}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            id="description"
          />
        </label>
        <div>
          {formik.touched.description && formik.errors.description
            ? formik.errors.description
            : null}
        </div>

        <input type="submit" value="Create" />
      </form>
	</div>
	)
}
export default ModalBoard