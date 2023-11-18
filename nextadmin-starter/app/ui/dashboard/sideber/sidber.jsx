import { auth, signOut } from "@/app/auth"
import Image from "next/image"
import { MdLogout } from "react-icons/md"
import { menuItems } from "../../constant/constant"
import ManuLink from "./manuLink/manuLink"
import styles from "./sideber.module.css"
const Sidber =async () => {
  const {user} = await auth()
  
  return (
    <div className={styles.container}>
    <div className={styles.user}>
      <Image
        className={styles.userImage}
        src={user.img || "/noavatar.png"}
        alt=""
        width="50"
        height="50"
      />
      <div className={styles.userDetail}>
        <span className={styles.username}>{user.username}</span>
        <span className={styles.userTitle}>Administrator</span>
      </div>
    </div>
    <ul className={styles.list}>
      {menuItems.map((cat) => (
        <li key={cat.title}>
          <span className={styles.cat}>{cat.title}</span>
          {cat.list.map((item) => (
            <ManuLink item={item} key={item.title} />
          ))}
        </li>
      ))}
    </ul>
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button className={styles.logout}>
        <MdLogout />
        Logout
      </button>
    </form>
  </div>
  )
}

export default Sidber