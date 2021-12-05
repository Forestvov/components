import React from 'react'
import InputMask from 'react-input-mask'
import cn from 'classnames'
import s from './Input.module.scss'

const Input = props => {
	const {name, register, errors, placeholder, type, required, phone} = props
	
	return (
		phone
			? <div className={s.input__inner}>
				<InputMask mask="+7 (999) 999-99-99" {...register(name, {required})}>
					{(inputProps) => (
						<input
							inputProps={inputProps}
							placeholder={placeholder}
							className={cn(s.input, errors[name] && s.error)}
							name={name}/>
					)}
				</InputMask>
				{errors[name]?.message && <p className={s.error__text}>{errors[name]?.message}</p>}
			</div>
			: <div className={s.input__inner}>
				<input
					type={type}
					className={cn(s.input, errors[name] && s.error)}
					placeholder={placeholder} {...register(name, {required})} />
				{errors[name]?.message && <p className={s.error__text}>{errors[name]?.message}</p>}
			</div>
	)
}

export default Input
