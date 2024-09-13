import React from 'react'

const layout = ({ children }) => {
    return (
        <>
            <div className='container'>
                <center>
                    <p className='title'>Indian Homemade Recipes</p>
                </center>
                {children}
            </div>
        </>
    )
}

export default layout
