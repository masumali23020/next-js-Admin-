import { cards } from "../lib/data"
import Card from "../ui/dashboard/card/card"
import Chart from "../ui/dashboard/chart/chart"
import styles from "../ui/dashboard/deshborad.module.css"
import Rightber from "../ui/dashboard/rightber/rightber"
import Transaction from "../ui/dashboard/transaction/transaction"
const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <Transaction />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightber />
      </div>
    </div>
  )
}

export default Dashboard