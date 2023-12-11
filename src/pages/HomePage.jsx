import React from "react"
import { useEffect } from "react"
import { Link } from 'react-router-dom'
const HomePage = () => {
    useEffect (() => {
        document.title = 'Home Page'
    }, [])
    return (
        <div className="container-home">
            <h3 className="title">This is home page</h3>
            <Link to='/product'>Go to product page</Link>
        </div>
    )
}

export default HomePage