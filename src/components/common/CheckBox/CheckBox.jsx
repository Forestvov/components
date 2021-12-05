import React, {useEffect, useRef, useState} from 'react'
import s from './CheckBox.module.scss'
import cn from "classnames"
import {CSSTransition} from "react-transition-group"
import {useOnOutsideClick} from "../../../hooks/useOnOutsideClick"
import {noop} from "../../../utils/noop";


const Checkbox = props => {
	const {name, value, title, selectType, select = noop, disabledApplay, onClick = noop, applay = noop} = props
	
	const [checked, setCheked] = useState(false)
	const [showAplay, setShowAplay] = useState(false)
	const refLabel = useRef()
	
	useEffect(() => {
		selectType && (selectType.includes(value) ? setCheked(true) : setCheked(false))
	}, [selectType])
	
	useOnOutsideClick(refLabel, () => {
		!disabledApplay && setShowAplay(false)
	})
	
	return (
		<div className={s.inner}>
			<label className={cn(s.input, checked ? s.active : '')} ref={refLabel}>
				<input
					type="checkbox"
					name={name}
					checked={value !== undefined ? checked : checked}
					onClick={() => {
						onClick()
						setCheked(!checked)
						select(value)
						!disabledApplay && setShowAplay(true)
					}}
				/>
				{title ? (
					<span>
                        {title ? title : null}
                    </span>
				) : null}
			</label>
			<CSSTransition
				classNames={{
					exit: s.exit,
					exitActive: s.fade_out,
					enterActive: s.fade_in,
					enterDone: s.fade_in
				}}
				in={showAplay}
				timeout={600}
				unmountOnExit
			>
				<div className={s.applay} onClick={applay}>Показать</div>
			</CSSTransition>
		</div>
	)
}

export default Checkbox
