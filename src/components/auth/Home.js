import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
           <Link to="/auth/product" >
                    ver producto
                    </Link>
            <h1>soy el Home</h1>
        </div>
    )
}


export default Home

