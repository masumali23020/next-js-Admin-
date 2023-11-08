import Image from "next/image"
import { menuItems } from "../../constant/constant"
import ManuLink from "./manuLink/manuLink"
import styles from "./sideber.module.css"
const Sidber = () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.user}>
      <Image
          className={styles.userImage}
          src= "/noavatar.png"
          alt=""
          width="50"
          height="50"
        />
         <div className={styles.userDetail}>
          <span className={styles.username}>user.username</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
      {menuItems.map(manuItem => (
         <li key={manuItem.title}>
       <span className={styles.cat}>  {manuItem.title}</span>
       {manuItem.list.map(item => (
        <ManuLink key={item.title} item={item} />
       ))}
       </li>
      ))}
      </ul>
   

    </div>
  )
}

export default Sidber