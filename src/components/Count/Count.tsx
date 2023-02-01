import React from 'react';
import s from './Count.module.css'

type CountType = {
	value: number
}

const Count = ({value} : CountType) => {
	return (
		<div className={s.count}>
			<h2 className={s.text}>{value}</h2>
		</div>
	);
};

export default Count;