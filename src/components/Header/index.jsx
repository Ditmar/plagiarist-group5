import React from 'react'
import useStyles from './header.styles';
import photoPerfil from '../../assets/image/perfil.png';
import search from '../../assets/image/search.png';
import notification from '../../assets/image/notification.png';
import { useState } from 'react';
import { getSearch } from './getSearch';


const Header = () => {

	const [ parameter, setParameters ] = useState('');

	const classes = useStyles();

	const onInputChange = ({ target }) => {
		setParameters( target.value );
	}

	const onSubmit = e => {
		e.preventDefault();
		if( parameter.trim().length <= 1 ) return;
		console.log( parameter );
		getSearch( parameter );
		setParameters('');
	}

	return (
		<>
			<header className={classes.header}>
				<div className={classes.headerContainer}>
					<h3 className={classes.title}>Overwide</h3>

					<form onSubmit={ onSubmit } className={classes.formHeader}>
						<input value={ parameter } onChange={ onInputChange } className={classes.field} type="text" />
						<div className={classes.icons}>
							<img className={classes.icon} src={search} alt="image search" />
							<img className={classes.icon} src={notification} alt="image notification" />
						</div>
					</form>

					<div className={classes.headerBox}>
						<p className={classes.name}>Jones Ferdinand</p>
						<div className={classes.divImage}>
							<img className={classes.imagePhoto} src={photoPerfil} alt="photo perfil" />
						</div>
					</div>
				</div>
			</header>
		</>
	);
}
export default Header;