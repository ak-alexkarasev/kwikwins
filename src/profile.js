import cn from 'classnames';
import styles from './scss/main.module.scss';
import './js/script.module.js';
import logo from './img/header/logo.svg';
import ava from './img/header/ava.png';
import avatar from './img/header/demo.png';
import { Input } from 'antd';
import { Button } from 'antd';
function Profile() {
    return (
			<section  className={styles.wrapper}>
				<header className={styles.header}>
					<div className={styles.container}>
						<div className={styles.header__box}>
							<div className={styles.header__logo}>
								<a href='#' className={styles.logo_link}>
									<img src={logo} alt='kwikwins'/>
								</a>
							</div>
							<div className={styles.header__menu}>
								<div className={styles.header__icons}>
									<a href='#' className={styles.header__icons_link}>
									<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27 29H5V17H3.235C2.097 17 1.566 15.581 2.423 14.832L14.131 3.74499C15.179 2.75199 16.82 2.75199 17.868 3.74499L29.575 14.832C30.433 15.58 29.902 17 28.763 17H27V29Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 29V23C12 20.791 13.791 19 16 19C18.209 19 20 20.791 20 23V26" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
									</a>
									<a href='#' className={styles.header__icons_link}>
										<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.4621 23.6598V29.3005C25.4621 29.9354 24.5694 30.234 24.0732 29.7849L16.4101 23.6598H9.94917C7.93486 23.6598 6.29012 22.2329 6.29012 20.4853V8.2674C6.29012 6.52015 7.93486 5.0932 9.94917 5.0932H28.3097C30.324 5.0932 31.9688 6.51981 31.9688 8.2674V20.4853C31.9688 22.2329 30.324 23.6598 28.3097 23.6598H25.4621ZM12.4003 12.7133C13.1633 12.7133 13.7817 13.2499 13.7817 13.9118C13.7817 14.5738 13.1633 15.1103 12.4003 15.1103C11.6373 15.1103 11.0188 14.5738 11.0188 13.9118C11.0188 13.2499 11.6373 12.7133 12.4003 12.7133ZM25.8586 12.7133C26.6216 12.7133 27.24 13.2499 27.24 13.9118C27.24 14.5738 26.6216 15.1103 25.8586 15.1103C25.0956 15.1103 24.4772 14.5738 24.4772 13.9118C24.4772 13.2499 25.0956 12.7133 25.8586 12.7133ZM21.3725 12.7133C22.1355 12.7133 22.7539 13.2499 22.7539 13.9118C22.7539 14.5738 22.1355 15.1103 21.3725 15.1103C20.6095 15.1103 19.9911 14.5738 19.9911 13.9118C19.9911 13.2499 20.6095 12.7133 21.3725 12.7133ZM16.8864 12.7133C17.6494 12.7133 18.2678 13.2499 18.2678 13.9118C18.2678 14.5738 17.6494 15.1103 16.8864 15.1103C16.1234 15.1103 15.505 14.5738 15.505 13.9118C15.505 13.2499 16.1234 12.7133 16.8864 12.7133ZM4.69031 19.1665C5.75138 19.1665 5.75138 20.5666 4.69031 20.5666C2.67599 20.5666 1.03125 19.1397 1.03125 17.3921V5.1742C1.03125 3.42695 2.67599 2 4.69031 2H23.0512C24.1123 2 24.1123 3.39984 23.0512 3.39984H4.69031C3.56712 3.39984 2.64513 4.19974 2.64513 5.1742V17.3921C2.64513 18.3666 3.56712 19.1665 4.69031 19.1665ZM23.8486 27.7058V22.9596C23.8486 22.5732 24.21 22.2597 24.6553 22.2597H28.3097C29.4329 22.2597 30.3553 21.4598 30.3553 20.4853V8.2674C30.3553 7.29294 29.4329 6.49303 28.3097 6.49303H9.94917C8.82559 6.49303 7.9036 7.29294 7.9036 8.2674V20.4853C7.9036 21.4598 8.82559 22.2597 9.94917 22.2597L16.7227 22.2614C16.9176 22.2614 17.1134 22.322 17.2681 22.4457L23.8486 27.7058Z" fill="black" stroke="black" stroke-width="0.5"/></svg>
									</a>
									<a href='#' className={styles.header__icons_link}>
										<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 10.6667C24 8.54496 23.1571 6.51012 21.6569 5.00983C20.1566 3.50954 18.1217 2.66669 16 2.66669C13.8783 2.66669 11.8434 3.50954 10.3431 5.00983C8.84286 6.51012 8 8.54496 8 10.6667C8 20 4 22.6667 4 22.6667H28C28 22.6667 24 20 24 10.6667Z" stroke="black" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.3067 28C18.0723 28.4041 17.7358 28.7395 17.331 28.9727C16.9262 29.2059 16.4672 29.3286 16 29.3286C15.5329 29.3286 15.0739 29.2059 14.6691 28.9727C14.2642 28.7395 13.9278 28.4041 13.6934 28" stroke="black" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/></svg>
									</a>
								</div>
								<a href='#' className={styles.header__ava}>
									<img src={ava} alt='ava'/>
									<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12L16 20L24 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
								</a>
							</div>
						</div>
					</div>
				</header>
				
				<section className={styles.content}>
					<div className={styles.container}>
						<div className={styles.content__body}>
							<div className={styles.menu}>
									<h3 className={styles.menu__title}>Settings</h3>
									<div className={styles.menu__list}>
										<a href='#' className={cn(styles.menu__list_item,styles.active)}>About me</a>
										<a href='#' className={styles.menu__list_item}>Account settings</a>
										<a href='#' className={styles.menu__list_item}>Subscriptions</a>
										<a href='#' className={styles.menu__list_item}>Privacy Policy</a>
										<a href='#' className={styles.menu__list_item}>Log Out</a>
									</div>
							</div>
							<div className={cn(styles.box,styles.profile)}>
								<div className={cn(styles.box__head,styles.profile__head)}>
									<div className={styles.profile__avatar}>
										<img src={avatar} alt='avatar'/>
										<a className={styles.profile__avatar_change}>
											<svg width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.8952 4.12854H31.482C33.1452 4.12854 34.5 5.48335 34.5 7.14656V25.9707C34.5 27.6339 33.1452 28.9777 31.482 28.9777H4.50701C2.84379 28.9777 1.5 27.6339 1.5 25.9707V7.14656C1.5 5.48335 2.84379 4.12854 4.50701 4.12854H11.259" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.4126 4.1286L12.2553 2.08C12.5185 1.44014 13.1419 1.02246 13.8338 1.02246H22.4806C23.1744 1.02246 23.7991 1.4424 24.0611 2.0848L24.8946 4.1286" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.5136 22.9002C22.4354 22.9002 25.6147 19.721 25.6147 15.7992C25.6147 11.8774 22.4354 8.69812 18.5136 8.69812C14.5918 8.69812 11.4126 11.8774 11.4126 15.7992C11.4126 19.721 14.5918 22.9002 18.5136 22.9002Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
											<p>Change Photo</p>
										</a>
									</div>
									
									<div className={cn(styles.box__head_txt,styles.profile__head_txt)}>
										<h3>Profile</h3>
										<p>Update you photo and personal details here</p>
									</div>
									
								</div>
								<form className={cn(styles.form_profile,styles.form_default)}>
									<div className={styles.default_input__wrap}>
										<label for='#input_name' className={styles.default_label}>First name</label>
										<Input type="text" placeholder='Jade' id='input_name' className={cn(styles.default_input,styles.default_input_profile)}></Input>
									</div>
									<div className={styles.default_input__wrap}>
										<label for='#input_lastname' className={styles.default_label}>Last name</label>
										<Input type="text" placeholder='Hoppkins' id='input_lastname' className={cn(styles.default_input,styles.default_input_profile)}></Input>
									</div>
									<div className={styles.default_input__wrap}>
										<label for='#input_phone' className={styles.default_label}>Phone</label>
										<Input type="tel" placeholder='+1 123-456-7890' id='input_phone' className={cn(styles.default_input,styles.default_input_profile)}></Input>
									</div>
									<div className={styles.default_input__wrap}>
										<label for='#input_passport' className={styles.default_label}>Passport №/ID data</label>
										<Input type="text" placeholder='5456 3452 0394' id='input_passport' className={cn(styles.default_input,styles.default_input_profile)}></Input>
									</div>
									<div className={styles.default_input__wrap}>
										<label for='#input_adress' className={styles.default_label}>Adress Line</label>
										<Input type="text" placeholder="150 Tunney's Pasture Driveway" id='input_adress' className={cn(styles.default_input,styles.default_input_profile)}></Input>
									</div>
									<div className={styles.default_input__wrap}>
										<label for='#input_city' className={styles.default_label}>City</label>
										<Input type="text" placeholder='Ottawa' id='input_city' className={cn(styles.default_input,styles.default_input_profile)}></Input>
									</div>
									<div className={styles.default_input__wrap}>
										<label for='#input_zip' className={styles.default_label}>Zip/Postal Code</label>
										<Input type="text" placeholder='ON K1A 0T6' id='input_zip' className={cn(styles.default_input,styles.default_input_profile)}></Input>
									</div>
									<div className={styles.default_input__wrap}>
										<label for='#input_utc' className={styles.default_label}>UTC</label>
										<Input type="text" placeholder='UTC -4' id='input_utc' className={cn(styles.default_input,styles.default_input_profile)}></Input>
									</div>
									<div className={styles.default_input__wrap}>
										<label for='#input_linkedin' className={styles.default_label}>LinkedIn Link</label>
										<Input type="text" placeholder='https://www.linkedin.com/feed/' id='input_city' className={cn(styles.default_input,styles.default_input_profile)}></Input>
									</div>
									<div className={styles.default_button__wrap}>
										<button className={styles.default_button} type='submit' disabled>Save</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
			</section>
      
    );
  }
  
  export default Profile;
  