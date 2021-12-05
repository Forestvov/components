import React from 'react'
import Input from "../../common/Input/Input"
import {useForm} from "react-hook-form"
import s from './Form.module.scss'
import CheckBox from "../../common/CheckBox/CheckBox";

const Form = () => {
	const { register, handleSubmit, formState: { errors } } = useForm()
	const onSubmit = data => console.log(data)
	
	return (
		<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
			<Input name="name" errors={errors} placeholder="Ваше имя" register={register} required/>
			<Input name="phone" phone errors={errors} placeholder="Ваш телефон" register={register} required/>
			<CheckBox name="isAuth" title="Запомнить"/>
			<button className={s.button}>
				отпарвить
			</button>
		</form>
	);
};

export default Form
