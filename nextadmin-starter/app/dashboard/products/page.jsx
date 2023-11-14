import { fetchProducts } from "@/app/lib/data"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
import Search from "@/app/ui/dashboard/search/search"
import Image from "next/image"
import Link from "next/link"
import styles from "../../ui/dashboard/products/products.module.css"
const Products =async ({searchParams}) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1 ;
  const {products, count} = await fetchProducts(q, page)
  console.log(products);

    return (
      <div className={styles.container}>
        <div className={styles.top}> 
        <Search placeholder="search..." />
        <Link href="/dashboard/products/add">
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
            {products.map(product => {
              const {title, desc, price,stock,createdAt, img} = product || {}
              return (
                <tr key={product.id}>
                <td>
                  <div className={styles.user}>
                    <Image src={img || "/noproduct.jpg"} width={40} height={40} className={styles.user} />
                    {title}
  
                  </div>
                </td>
               <td>{desc}</td>
               <td>${price}</td>
               <td>{createdAt.toString().slice(4,16)}</td>
               <td>{stock}</td>
               <td>
               <div className={styles.buttons}>
               <Link href={`/dashboard/products/${product.id}`}>
                      <button className={`${styles.button} ${styles.view}`}>
                        View
                      </button>
                </Link>
                   
                   
                    <form >
                      <input type="hidden" name="id"  />
                      <button className={`${styles.button} ${styles.delete}`}>
                        Delete
                      </button>
                    </form>
                </div>
               </td>
            
              </tr>
              )
            })}
          </tbody>

        </table>
        <Pagination count={count} />
      </div>
    )
  }
  
  export default Products