import { Interface } from 'readline'
import styles from './style.module.css'
import icon from './eth-logo.png'
import { send } from 'process';

interface TransactionData {
    sent?: boolean;
    received?: boolean;
    date: String;
    ethAmount: Number;
    usdAmount: Number;
}

interface Data {
    data: TransactionData,
    hideTopBar?: boolean,
}
export default function TransactionCard(props: Data) {

    return (
    <div className={[styles.content, props.hideTopBar ?'': styles.border_top].join(' ')}>
        <div className={styles.img_background}>
            <img src={icon} className={styles.img} />
        </div>
        <div>
            <div className={styles.subtitle}>{props.data.sent?'Send ':'Recieved '} Ether</div>
            <div className={styles.subsubtitle}>{props.data.date}</div>
        </div>
        <div>
            <div className={[styles.subtitle, styles.right].join(' ')}>{props.data.ethAmount.toString()} ETH</div>
            <div className={[styles.subsubtitle, styles.right].join(' ')}>{props.data.usdAmount.toString()} USD</div>
        </div>
    </div>)
}