import React from 'react';
import s from "./Footer.module.css";



const Footer = () => {

	return (
		<footer className={s.footer}>
			<p>Frontend-разработка - Машинский Никита</p>
			<p>Веб-дизайн - Константинова Юлия</p>
			<p>2023</p>
		</footer>
	);
}

export default Footer