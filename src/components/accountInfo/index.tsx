import styles from './style.module.css'
import { useWeb3React } from '@web3-react/core'
import { Injected } from './../../utils/connector'


//Address
function sliceAddress(address: any) {
    if (address) {
        return address.slice(0, 6) + '...' + address.slice(address.length - 4)
    } else {
        return ''
    }
}

//Connect Wallet
export default function AccountInfo(props: any) {
    const { activate, deactivate, account } = useWeb3React();

    const connectWallet = () => { activate(Injected) }
    const disconnectWallet = () => { deactivate() }
    return (<div onClick={account ? disconnectWallet : connectWallet} className={styles.account}>
        {account ? <div className={styles.connect}>
                <div className={styles.icon}>E</div>
                <div>
                    <div className={styles.accountName}>Account</div>
                    {sliceAddress(account)}
                </div>
        </div>
            : <div className={styles.disconnect}>Connect Wallet</div>}
    </div>)
}




