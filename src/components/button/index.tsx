import styles from './style.module.css'

export default function Button(props: any) {

    return (<div className={
        [props.fill ? styles.fill : styles.outline, styles.button].join(" ")
    } onClick={props.onClick}>{props.children}</div>)
}




