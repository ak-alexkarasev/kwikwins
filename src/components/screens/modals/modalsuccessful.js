import cn from 'classnames';
import styles from '../../../scss/main.module.scss';


function ModalSuccessfully() {
    return (
				
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
      
    );
  }
  
  export default ModalSuccessfully;