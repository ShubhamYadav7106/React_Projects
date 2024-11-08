import React from 'react'

const Categories = ({ categories, filterItems }) => {

    return (
        <div>
            <div className='container9'>
                {
                    categories.map((category, id) => {
                        return (
                            <button
                                key={id}
                                onClick={() => filterItems(category)}>
                                {category}
                            </button>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Categories;