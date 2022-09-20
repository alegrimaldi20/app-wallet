import styles from './style.module.css'
import Button from '../button'
import left from './left.svg'
import Input from '../input'
import AppContext from '../../context/background/AppContext';
import { useState, useContext } from 'react'
import defaults from '../../utils/constants';
import moment from 'moment'

//Send Ether
export default function SendEth(props: any) {
    const { state, addTransaction } = useContext(AppContext);
    const [address, setaddress] = useState('')
    const [amount, setamount] = useState('')
    
    const createTranscation = () => {
        const newTransaction = {
            id: state.transactions.length,
            to: address,
            from: defaults.publicAddress,
            value: Number(amount),
            date: moment(new Date()).format('DD-MM-YYYY hh:mm')
        }
        addTransaction(newTransaction)
        props.next()
    }
    return (<div>
        <div className={styles.topbar}>
            <span style={{ cursor: 'pointer' }} onClick={props.cancel}>
                <img src={left} className={styles.left}/>
                <span className={styles.move_top}>Back</span>
            </span>
            <div className={styles.title}>Transactions</div>
        </div>
        <div className={styles.input_title}>Address</div>
        <Input text="Public Address" value={address} setValue={setaddress} />
        <div className={styles.input_title}>Amount</div>
        <Input text="Amount of Ether" value={amount} setValue={setamount} />

        <div className={styles.grid}>
            <Button onClick={props.cancel}>Cancel</Button>
            <Button fill onClick={createTranscation}>Next</Button>
        </div>
    </div>)
}