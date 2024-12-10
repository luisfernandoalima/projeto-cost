import styles from './styles.module.css';

export const Container = (props) => {
    return(
        <main className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </main>
    )
}