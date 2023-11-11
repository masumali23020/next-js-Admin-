import styles from "@/app/ui/dashboard/products/addProducts/addProducts.module.css"

const AddProducts = () => {
  return (
    <div className={styles.container}>
        <form className={styles.form}>
            <input type="text" name="title" required placeholder="title" />
            <select name="cat" id="cat">
                <option value="general">Choose a CAtagory</option>
                <option value="kitchen">Kitchen</option>
                <option value="phone">Phone</option>
                <option value="computer">Computer</option>
            </select>
            <input type="number" placeholder="price" name="price" required />
        <input type="number" placeholder="stock" name="stock" required />
        <input type="text" placeholder="color" name="color" />
        <input type="text" placeholder="size" name="size" />
        <textarea
          required
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
        ></textarea>
        <button type="submit">Submit</button>

        </form>
    </div>
  )
}

export default AddProducts