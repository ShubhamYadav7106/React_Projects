import React, { useState } from 'react'
import Data from './Data'
import Menu from './Menu'
import Categories from './Categories';


const allCategories = ['all', ...new Set(Data.map((item) => item.category))];
const Myapp=()=> {
    const [menuItems, setMenuItems] = useState(Data)
const [categories, setCategories] = useState(allCategories)
    const filterItems = (category) => {
        if (category == 'all') {
            setMenuItems(Data)
            return;
        }
        const newItems = Data.filter((item) => item.category == category)
        setMenuItems(newItems)
    }
    return (
        <div className=''>
            <div className='container9'>
                <h3 className=''>Our Filter Menu</h3>
            </div>
            <div>
            <Categories categories={categories} filterItems={filterItems} />
            <Menu Data={menuItems} />
            </div>
        </div>
    )
}

export default Myapp;