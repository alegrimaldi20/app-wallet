
import styles from './style.module.css'

export default function Input(props: any) {
    return (
        <input
        className={styles.input}
        onChange={(e) => { props.setValue(e.target.value) }} 
        value={props.value} 
        placeholder={props.text} />
    )
}




