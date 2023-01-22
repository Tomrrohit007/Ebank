import Cookies from "js-cookie"
import { withRouter } from "react-router-dom"
import "./index.css"

const HomePage=(props)=>{
    const onClickLogout=()=>{
        const {history} = props
        Cookies.remove("jwt_token")
        history.replace("/ebank/login")
    }
    return(
        <div className="home-cont">
            <div className="header">
               <button className="logo-btn">
               <img className="website-logo" src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png" alt="website logo"/>
                </button> 
                <button className="logout-btn" onClick={onClickLogout}>Logout</button>
            </div>
            <div className="content-cont">
                <h1 className="main-heading">Your Flexibility, Our Excellence</h1>
                <img className="card" src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png" alt="digital card" />
            </div>
        </div>
    )
}

export default withRouter(HomePage)