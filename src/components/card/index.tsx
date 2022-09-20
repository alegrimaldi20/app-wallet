import styles from './style.module.css'
export default function Card(props: any) {

    return (<div className={styles.card}>

        {props.children}
    </div>)
}