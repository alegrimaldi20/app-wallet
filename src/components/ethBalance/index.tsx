import styles from './style.module.css'
import img from './arrow.svg'
import defaults from '../../utils/constants'

//Balance Eth
export default function EthBalance(props: any) {

    return (<div className={styles.body} onClick={props.onClick}>
        <div className={styles.content}>
            <div className={styles.balance}>{defaults.accountBalance} ETH</div>
            <div className={styles.balanceInUSD}>${defaults.accountBalance*defaults.ethPrice} USD</div>
            <div className={styles.img_background}><img src={img} className={styles.img}/></div>
            <div className={styles.send}>Send Ether</div>
        </div>
    </div>)
}