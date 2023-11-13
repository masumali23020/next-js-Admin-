import { fetchUsers } from "@/app/lib/data"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
import Search from "@/app/ui/dashboard/search/search"
import Image from "next/image"
import Link from "next/link"
import styles from "../../ui/dashboard/users/user.module.css"
const Users =async () => {
  const user = await fetchUsers();
  console.log(user);
    return (
      <div className={styles.container}>
        <div className={styles.top}> 
        <Search placeholder="search..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Created At</td>
              <td>Role</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.user}>
                  <Image src="/noavatar.png" width={40} height={40} className={styles.user} />
                  masum

                </div>
              </td>
             <td>masum@gmail.com</td>
             <td>masum@gmail.com</td>
             <td>masum@gmail.com</td>
             <td>pandind</td>
             <td>
             <div className={styles.buttons}>
                 
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                 
                  <form >
                    <input type="hidden" name="id"  />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
             </td>
          
            </tr>
          </tbody>

        </table>
        <Pagination />
      </div>
    )
  }
  
  export default Users