import Link from "next/link"
import styles from "./manuLink.module.css"

const ManuLink = ({item}) => {
    const {icon, title} = item 
  return (
   <Link href={item.path} className={styles.continer} >
   {icon}
   {title}
   </Link>
  )
}

export default ManuLink