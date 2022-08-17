
import React from 'react';
import cn from 'classnames';
import styles from '../../../scss/main.module.scss';
import resize from '../../../img/input/icon_textarea.svg';
import file_add from '../../../img/input/plus.svg';
import { Input } from 'antd';
function SubsContent() {
	return(
		<div className={styles.subs}>
			<div className={cn(styles.title, styles.subs__title)}>
				<h2>Add new product</h2>
			</div>
			<form action="#">
				<div className={styles.subs__heading}>Product information</div>
				<div className={styles.subs__content}>
						<div className={styles.subs__content_left}>
							<div className={styles.subs__wrap}>
								<div className={styles.wrap__animated}>
									<Input className={styles.wrap__animated_input} required="true" type="text" placeholder=" "></Input>
									<label className={styles.wrap__animated_label} for="#input-product">Name of your product</label>
								</div>
								<div className={styles.wrap__animated}>
									<Input className={styles.wrap__animated_input} required="true" type="text" placeholder=" "></Input>
									<label className={styles.wrap__animated_label} for="#input-product">Industry</label>
								</div>
								<div className={styles.wrap__animated}>
									<Input className={styles.wrap__animated_input} required="true" type="text" placeholder=" "></Input>
									<label className={styles.wrap__animated_label} for="#input-product">What type of product are you creating?</label>
								</div>
								<div className={styles.wrap__animated}>
									<Input className={styles.wrap__animated_input} required="true" type="text" placeholder=" "></Input>
									<label className={styles.wrap__animated_label} for="#input-product">What stage is the product in?</label>
								</div>
								<div className={styles.wrap__animated}>
									<Input className={styles.wrap__animated_input} required="true" type="text" placeholder=" "></Input>
									<label className={styles.wrap__animated_label} for="#input-product">What's your budget range?</label>
								</div>
							</div>
							<div className={styles.subs__wrap}>
								<div className={styles.subs__heading2}>Describe your product</div>
								<div className={styles.default__textarea_wrap}>
									<img src={resize} />
									<textarea className={styles.default__textarea} placeholder='Enter a clear and concise description'></textarea>
								</div>
							</div>
						</div>
						<div className={styles.subs__content_right}>
							<div className={styles.subs__wrap}>
								<div className={styles.wrap__animated}>
									<Input className={styles.wrap__animated_input} required="true" type="text" placeholder=" "></Input>
									<label className={styles.wrap__animated_label} for="#input-product">Name of your product</label>
								</div>
								<div className={styles.wrap__animated}>
									<Input className={styles.wrap__animated_input} required="true" type="text" placeholder=" "></Input>
									<label className={styles.wrap__animated_label} for="#input-product">Industry</label>
								</div>
								<div className={styles.wrap__animated}>
									<Input className={styles.wrap__animated_input} required="true" type="text" placeholder=" "></Input>
									<label className={styles.wrap__animated_label} for="#input-product">What type of product are you creating?</label>
								</div>
							</div>
							<div className={styles.subs__wrap}>
								<div className={styles.subs__heading2}>Expectation</div>
								<textarea className={styles.default__textarea} placeholder='Describe your expectations'></textarea>
							</div>
							<div className={styles.subs__add}>
								<img src={file_add}/>
								<p>Attach files that may be useful to familiarize yourself with the project</p>
							</div>
							<button className={styles.subs__btn} disabled>Save</button>
						</div>
				</div>
			</form>
		</div>
	);
}

export default SubsContent;