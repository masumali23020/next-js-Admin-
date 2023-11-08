"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./manuLink.module.css"

const ManuLink = ({item}) => {
    const pathName = usePathname()
    console.log(item);
    const {icon, title} = item 
    
  return (
   <Link href={item.path} className={`${styles.continer} ${item.path === pathName && styles.active }`} >
   {icon}
   {title}
   </Link>
  )
}

export default ManuLink