import cn from 'classnames';
import styles from './scss/main.module.scss';
import Header from './components/screens/header/header.js'
import ModalSuccessfully from './components/screens/modals/modalsuccessful.js'


function WorkspaceSubs() {
    return (
			<section  className={styles.wrapper}>

				<Header></Header>			
				
				<section className={styles.content}>
					<div className={styles.container}>
						<div className={styles.breadcrumbs}>
							<a className={styles.breadcrumbs__prev}>&#60; Go back</a>
						</div>
						<SubsContent></SubsContent>
					</div>
				</section>
				
				<ModalSuccessfully></ModalSuccessfully>

			</section>
      
    );
  }
  
  export default WorkspaceSubs;
  