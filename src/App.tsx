import React from 'react'
import styles from './App.module.scss'
import Card from './Card'

export default () => {
  return (
    <div className={styles.app}>
      <div className={styles.deck}>
        {['A', '2', '3', '4', '5', '6', '7', '8', '9', '10'].map(
          (symbol, index) => (
            <Card key={symbol} label="Hihi Xd" number={symbol} suit="clubs" />
          )
        )}
      </div>
    </div>
  )
}
