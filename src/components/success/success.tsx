import styles from './style.module.css'
import icon from './success.png'
import Button from '../button'

export default function Success(props: any) {
    return (
        <div className={styles.body}>
            <img src={icon} className={styles.icon} />
            <div className={styles.title}>Success!</div>
            <div style={{ opacity: '0.5' }}>You've successfully sent <br /> your funds.</div>
            <a href="https://etherscan.io/tx/0x6eefc5299ae80d2236d95f7fb58b40fa4a61efacd96e1264431656992b7d51ba" target="_blank" className={styles.link}>View on Etherscan</a>
            <div className={styles.btn}>
                <Button onClick={props.onClick}>Done</Button>
            </div>
        </div>)
}