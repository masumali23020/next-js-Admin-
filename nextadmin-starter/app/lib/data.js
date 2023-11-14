import { Product, User } from "./modal";
import { connectToBd } from "./utils";

// fetch user 
export const fetchUsers = async (q,page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 2 ;

  try {
    connectToBd();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));

    return {users, count}
    
  } catch (error) {
    console.log(error);

    throw new Error("faild to fetch user !")
    
  }
}
export const fetchProducts = async (q,page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 2 ;

  try {
    connectToBd();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));

      return {count,products}
    
  } catch (error) {
    console.log(error);

    throw new Error("faild to fetch user !")
    
  }
}

// fetch products 


// DUMMY DATA

export const cards = [
    {
      id: 1,
      title: "Total Users",
      number: 10.928,
      change: 12,
    },
    {
      id: 2,
      title: "Stock",
      number: 8.236,
      change: -2,
    },
    {
      id: 3,
      title: "Revenue",
      number: 6.642,
      change: 18,
    },
  ];

  // line charts 
 export const data = [
    {
      name: "Sun",
      visit: 4000,
      click: 2400,
    },
    {
      name: "Mon",
      visit: 3000,
      click: 1398,
    },
    {
      name: "Tue",
      visit: 2000,
      click: 3800,
    },
    {
      name: "Wed",
      visit: 2780,
      click: 3908,
    },
    {
      name: "Thu",
      visit: 1890,
      click: 4800,
    },
    {
      name: "Fri",
      visit: 2390,
      click: 3800,
    },
    {
      name: "Sat",
      visit: 3490,
      click: 4300,
    },
  ];

