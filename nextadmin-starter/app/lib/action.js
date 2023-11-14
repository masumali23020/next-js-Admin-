"use server";

import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { Product, User } from "./modal";
import { connectToBd } from "./utils";

export const addUser = async (formData) => {
    const { username, email, password, phone, address, isAdmin, isActive } =
      Object.fromEntries(formData);
  
    try {
        connectToBd();
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        phone,
        address,
        isAdmin,
        isActive,
      });
  
      await newUser.save();
    } catch (err) {
      console.log(err);
      throw new Error("Failed to create user!");
    }
  
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
  };

export const updateUser = async (formData) => {
    const {id, username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);


    try {
      connectToBd();
      const updateField = {
        username, email, password, phone, address, isAdmin, isActive 
      }
      Object.keys(updateField).forEach((key) => (updateField[key] === "" || undefined) &&  delete updateField[key]) 
      await User.findByIdAndUpdate(id, updateField)
   
      
    } catch (error) {
      console.log(error);
      throw new Error("Update user faild faild !")
    }
    revalidatePath("/dashboard/users");
  redirect("/dashboard/users");

  }

export const deleteUser = async (formData) => {
    const {id} = Object.fromEntries(formData);

    try {
      connectToBd();
      await User.findByIdAndDelete(id)
      
    } catch (error) {
      console.log(error);
      throw new Error("Faild to delet user !")
      
    }
    revalidatePath("/dashboard/products");

  }

export const addProduct = async (formData) => {
    const {title, desc, price, stock, img, color, size} = Object.fromEntries(formData);

    try {
        connectToBd()
        const newProduct = new Product({
            title,
             desc,
              price,
               stock,
                img,
                 color, 
                 size

        })
        await newProduct.save();
        
    } catch (error) {
        console.log(error)
        throw new Error("Faild to create product !")
        
    }
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products")

  }
  export const updateProduct = async (formData) => {
    const {id, title, desc, price, stock, color, size} = Object.fromEntries(formData);

    try {
      connectToBd();
      const upDateField = {
        id, title, desc, price, stock, color, size

      }
      Object.keys(upDateField).forEach((key) => (upDateField[key] === "" || undefined) && delete upDateField[key])
      
      await Product.findByIdAndUpdate(id, upDateField)
    } catch (error) {
      console.log(error);
      throw new Error("Product update succesfull !")
      
    }
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
  }
export const deleteProduct = async (formData) => {
    const {id} = Object.fromEntries(formData);

    try {
      connectToBd();
      await Product.findByIdAndDelete(id)
      
    } catch (error) {
      console.log(error);
      throw new Error("Faild to delet Product !")
      
    }
    revalidatePath("/dashboard/products");

  }
  



