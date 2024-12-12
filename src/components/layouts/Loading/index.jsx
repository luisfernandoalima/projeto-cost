import loading from '../../../img/loading.svg'
import styles from './Loading.module.css'

export const Loading = () => {
    return(
        <div className={styles.loader_container}>
            <img src={loading} alt="Loading" className={styles.loader}/>
        </div>
    )
}