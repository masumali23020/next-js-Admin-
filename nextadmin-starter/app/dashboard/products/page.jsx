import Pagination from "@/app/ui/dashboard/pagination/pagination"
import Search from "@/app/ui/dashboard/search/search"
import Image from "next/image"
import Link from "next/link"
import styles from "../../ui/dashboard/products/products.module.css"
const Products = () => {
    return (
      <div className={styles.container}>
        <div className={styles.top}> 
        <Search placeholder="search..." />
        <Link href="/dashboard/Products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Title</td>
              <td>Description</td>
              <td>Price</td>
              <td>Created At</td>
              <td>Stock</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.user}>
                  <Image src="/noproduct.jpg" width={40} height={40} className={styles.user} />
                  masum

                </div>
              </td>
             <td>Iphone</td>
             <td>Onec</td>
             <td>$455</td>
             <td>10.11.23</td>
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
  
  export default Products