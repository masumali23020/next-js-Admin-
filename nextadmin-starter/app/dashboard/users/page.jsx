import { fetchUsers } from "@/app/lib/data"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
import Search from "@/app/ui/dashboard/search/search"
import Image from "next/image"
import Link from "next/link"
import styles from "../../ui/dashboard/users/user.module.css"
const Users =async () => {
  const users = await fetchUsers();
  console.log(users);
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
            {users.map(user => (
              <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image src={user.img || "/noavatar.png"} width={40} height={40} className={styles.user} />
                  {user.userName}

                </div>
              </td>
             <td>{user.email}</td>
             <td>25.35.555</td>
             <td>Admin </td>
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
            ))}
            
          </tbody>

        </table>
        <Pagination />
      </div>
    )
  }
  
  export default Users