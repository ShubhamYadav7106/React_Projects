import React from 'react'

const Menu = ({ Data }) => {
    return (
        <div className='container9'>

            {
                Data.map((menuItems) => {
                    const { id, title, price, desc } = menuItems;
                    return (
                        <div key={id}>
                            <div>
                                <h4>{title}</h4>
                                <h4>${price}</h4>
                            </div>
                            <p>{desc}</p>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default Menu;