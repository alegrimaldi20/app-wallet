import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import AccountInfo from '../accountInfo'
import EthBalance from '../ethBalance'
import TransactionInfo from '../transactionInfo'
import Card from '../card'
import SendEth from '../sendEth'
import Success from '../success/success'

export default function Pages() {
  const parallax = useRef<IParallax>(null)

  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to)
    }
  }
  return (
    <div style={{width:'100%'}}>
      <Parallax ref={parallax} pages={3} horizontal style={{ height: '100vh', maxWidth: '900px', width: '100%', margin:'auto', display:'block', position:"inherit" }}>
        <ParallaxLayer offset={0} speed={0.3} >
          <Card>
            <AccountInfo />
            <EthBalance onClick={() => scroll(1)} />
            <TransactionInfo />
          </Card>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.3}>
          <Card>
            <SendEth cancel={() => scroll(0)} next={() => scroll(2)} />
          </Card>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.3}>
          <Card>
            <Success onClick={() => scroll(0)} />
          </Card>
        </ParallaxLayer>
      </Parallax>
    </div>

  )
}
