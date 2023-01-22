import "./index.css"

const NotFound=()=>{
    return(
        <div className="not-found-cont">
            <img className="not-found-img" src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png" alt="not found" />
            <h1 className="not-found-heading">Page Not Found</h1>
            <p className="para">We are sorry, the you have requested could not be find</p>
        </div>
    )
}

export default NotFound