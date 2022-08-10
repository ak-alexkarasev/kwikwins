import cn from 'classnames';
import styles from './scss/main.module.scss';
import logo from './img/header/logo.svg';
import ava from './img/header/ava.png';
import resize from './img/input/icon_textarea.svg';
import file_add from './img/input/plus.svg';
import { Input } from 'antd';
function WorkspaceSubs() {
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
									<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27 29H5V17H3.235C2.097 17 1.566 15.581 2.423 14.832L14.131 3.74499C15.179 2.75199 16.82 2.75199 17.868 3.74499L29.575 14.832C30.433 15.58 29.902 17 28.763 17H27V29Z" stroke="#4A6EED" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 29V23C12 20.791 13.791 19 16 19C18.209 19 20 20.791 20 23V26" stroke="#4A6EED" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
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
						<div className={styles.breadcrumbs}>
							<a className={styles.breadcrumbs__prev}>&#60; Go back</a>
						</div>
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
					</div>
				</section>
				
				<div className={cn(styles.modalsuccessfully, styles.modal)}>
					<div className={styles.modal__content}>
						<div className={styles.title}>
							<h2>The product has been successfully created!</h2>
							<p className={styles.title__desk}>You must buy a subscriptiont to activate the product. <br />
							If you skip this step, product work will not start.</p>
						</div>
						<div className={styles.modal__buttons}>
							<button className={styles.modal__buttons_bd}>Later</button>
							<button className={styles.modal__buttons_bg}>Buy subscription</button>
						</div>
					</div>
				</div>

			</section>
      
    );
  }
  
  export default WorkspaceSubs;
  