import styles from './style.module.css'
import TransactionCard from './transactionCard'
import AppContext from '../../context/background/AppContext';
import { useContext } from 'react';
import { Transaction } from '../../services/TransactionsService';
import defaults from '../../utils/constants';

export default function TransactionInfo(props: any) {
    const { state } = useContext(AppContext);

    const formatData = (data: Array<Transaction>) => {
        let formatedData: Array<any> = [];
        data.forEach((element: Transaction) => {
            formatedData.push({
                sent: true,
                date: element.date,
                ethAmount: element.value,
                usdAmount: defaults.ethPrice * element.value,
            })
        });
        return formatedData;
    }

    const data = formatData(state.transactions).reverse()

    return (
    <div className={styles.transaction_info}>
        {data.map((element, index)=>(
            <TransactionCard data={element} hideTopBar={index===0} key={index}/>
        ))}
        
   
    </div>)
}




