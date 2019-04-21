import React from 'react'
import styles from './Card.module.scss'
import classNames from 'classnames'

type Suit = 'diamonds' | 'clubs' | 'hearts' | 'spades'
type Color = 'red' | 'black'

type Props = {
  number: string
  label: string
  suit: Suit
}

const suitToSymbol = (suit: Suit) => {
  switch (suit) {
    case 'clubs':
      return ''
    case 'diamonds':
      return ''
    case 'hearts':
      return ''
    case 'spades':
      return ''
  }
}

type CardProps = {
  suit: Suit
}

const Ace = ({ suit }: CardProps) => (
  <div className={styles.large}>{suitToSymbol(suit)}</div>
)

const Two = ({ suit }: CardProps) => (
  <>
    <div className={styles.column}>
      <div>{suitToSymbol(suit)}</div>
      <div className={styles.reverse}>{suitToSymbol(suit)}</div>
    </div>
  </>
)
const Three = ({ suit }: CardProps) => (
  <>
    <div className={styles.column}>
      <div>{suitToSymbol(suit)}</div>
      <div>{suitToSymbol(suit)}</div>
      <div className={styles.reverse}>{suitToSymbol(suit)}</div>
    </div>
  </>
)

const Four = ({ suit }: CardProps) => (
  <>
    <div className={styles.column}>
      <div>{suitToSymbol(suit)}</div>
      <div className={styles.reverse}>{suitToSymbol(suit)}</div>
    </div>
    <div className={styles.column}>
      <div>{suitToSymbol(suit)}</div>
      <div className={styles.reverse}>{suitToSymbol(suit)}</div>
    </div>
  </>
)

const Five = ({ suit }: CardProps) => (
  <>
    <div className={styles.column}>
      <div>{suitToSymbol(suit)}</div>
      <div className={styles.reverse}>{suitToSymbol(suit)}</div>
    </div>
    <div className={classNames(styles.column, styles.center)}>
      <div>{suitToSymbol(suit)}</div>
    </div>
    <div className={styles.column}>
      <div>{suitToSymbol(suit)}</div>
      <div className={styles.reverse}>{suitToSymbol(suit)}</div>
    </div>
  </>
)

const Six = ({ suit }: CardProps) => (
  <>
    <div className={styles.column}>
      <div>{suitToSymbol(suit)}</div>
      <div>{suitToSymbol(suit)}</div>
      <div className={styles.reverse}>{suitToSymbol(suit)}</div>
    </div>
    <div className={classNames(styles.column, styles.center)}>
      <div className={styles.invisible}>{suitToSymbol(suit)}</div>
    </div>
    <div className={styles.column}>
      <div>{suitToSymbol(suit)}</div>
      <div>{suitToSymbol(suit)}</div>
      <div className={styles.reverse}>{suitToSymbol(suit)}</div>
    </div>
  </>
)

const Seven = ({ suit }: CardProps) => (
  <>
    <div className={styles.column}>
      <div>{suitToSymbol(suit)}</div>
      <div>{suitToSymbol(suit)}</div>
      <div className={styles.reverse}>{suitToSymbol(suit)}</div>
    </div>
    <div className={classNames(styles.column, styles.around)}>
      <div>{suitToSymbol(suit)}</div>
      <div className={styles.invisible}>{suitToSymbol(suit)}</div>
    </div>
    <div className={styles.column}>
      <div>{suitToSymbol(suit)}</div>
      <div>{suitToSymbol(suit)}</div>
      <div className={styles.reverse}>{suitToSymbol(suit)}</div>
    </div>
  </>
)

const Eight = ({ suit }: CardProps) => (
  <>
    <div className={styles.column}>
      <div>{suitToSymbol(suit)}</div>
      <div>{suitToSymbol(suit)}</div>
      <div className={styles.reverse}>{suitToSymbol(suit)}</div>
    </div>
    <div className={classNames(styles.column, styles.around)}>
      <div>{suitToSymbol(suit)}</div>
      <div className={styles.reverse}>{suitToSymbol(suit)}</div>
    </div>
    <div className={styles.column}>
      <div>{suitToSymbol(suit)}</div>
      <div>{suitToSymbol(suit)}</div>
      <div className={styles.reverse}>{suitToSymbol(suit)}</div>
    </div>
  </>
)

const Nine = ({ suit }: CardProps) => (
  <>
    <div className={styles.column}>
      <div>{suitToSymbol(suit)}</div>
      <div>{suitToSymbol(suit)}</div>
      <div className={styles.reverse}>{suitToSymbol(suit)}</div>
      <div className={styles.reverse}>{suitToSymbol(suit)}</div>
    </div>
    <div className={classNames(styles.column, styles.center)}>
      <div>{suitToSymbol(suit)}</div>
    </div>
    <div className={styles.column}>
      <div>{suitToSymbol(suit)}</div>
      <div>{suitToSymbol(suit)}</div>
      <div className={styles.reverse}>{suitToSymbol(suit)}</div>
      <div className={styles.reverse}>{suitToSymbol(suit)}</div>
    </div>
  </>
)

const Ten = ({ suit }: CardProps) => (
  <>
    <div className={styles.column}>
      <div>{suitToSymbol(suit)}</div>
      <div>{suitToSymbol(suit)}</div>
      <div className={styles.reverse}>{suitToSymbol(suit)}</div>
      <div className={styles.reverse}>{suitToSymbol(suit)}</div>
    </div>
    <div className={classNames(styles.column, styles.around)}>
      <div>{suitToSymbol(suit)}</div>
      <div className={styles.reverse}>{suitToSymbol(suit)}</div>
    </div>
    <div className={styles.column}>
      <div>{suitToSymbol(suit)}</div>
      <div>{suitToSymbol(suit)}</div>
      <div className={styles.reverse}>{suitToSymbol(suit)}</div>
      <div className={styles.reverse}>{suitToSymbol(suit)}</div>
    </div>
  </>
)

const Jack = ({ suit }: CardProps) => (
  <div className={styles.large}>{suitToSymbol(suit)}</div>
)

const Queen = ({ suit }: CardProps) => (
  <div className={styles.large}>{suitToSymbol(suit)}</div>
)

const King = ({ suit }: CardProps) => (
  <div className={styles.large}>{suitToSymbol(suit)}</div>
)

type Cards = { [key: string]: any }

const cards: Cards = {
  A: Ace,
  2: Two,
  3: Three,
  4: Four,
  5: Five,
  6: Six,
  7: Seven,
  8: Eight,
  9: Nine,
  10: Ten,
  J: Jack,
  Q: Queen,
  K: King,
}

export default ({ number, suit }: Props) => {
  const color = suit === 'diamonds' || suit === 'hearts' ? 'red' : 'black'
  return (
    <div className={classNames(styles.card, color && styles[color])}>
      <div className={styles.rotation}>
        <div className={classNames(styles.side, styles.front)}>
          <div className={styles.half}>
            <div className={styles.name}>
              <div className={styles.number}>{number}</div>
              <div className={styles.suitUnderNumber}>{suitToSymbol(suit)}</div>
            </div>
          </div>
          <div className={classNames(styles.half, styles.reverse)}>
            <div className={styles.name}>
              <div className={styles.number}>{number}</div>
              <div className={styles.suitUnderNumber}>{suitToSymbol(suit)}</div>
            </div>
          </div>
          <div className={styles.inner}>{cards[number]({ suit })}</div>
        </div>
        <div className={classNames(styles.side, styles.back)} />
      </div>
    </div>
  )
}
