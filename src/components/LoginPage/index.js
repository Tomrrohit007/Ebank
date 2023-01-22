import { Component } from "react"
import { Redirect } from "react-router-dom"
import Cookies from "js-cookie"
import "./index.css"

class LoginPage extends Component{
    state ={username:'', password:'', errMsg:"", isError:false }

    onChangeUsername=(event)=>{
        this.setState({username:event.target.value})
    }

    onChangePassword=(event)=>{
        this.setState({password:event.target.value})
    }

    onClickLogin= async (event)=>{
        event.preventDefault()
        const {username, password} = this.state
        const apiUrl = "https://apis.ccbp.in/ebank/login"
        const userDetails = {username, password}
        if(username===""){
            this.setState({errMsg:"Invalid user ID"})
        }
        else{
            this.setState({errMsg:"Invalid PIN"})
        }
        const options={
            method:"POST",
            body:JSON.stringify(userDetails)
        }
        const response = await fetch(apiUrl, options)
        if(response.ok){
            const fetchData = await response.json()
            const jwtToken = fetchData.jwt_token
            const {history} = this.props

            Cookies.set('jwt_token', jwtToken, {
                expires: 30,
                })
            history.replace('/')
            this.setState({isError:false})
        }    
        else{
            this.setState({isError:true})
        }    
    }

    render(){
        const jwtToken = Cookies.get("jwt_token")
        if(jwtToken!==undefined){
            <Redirect path="/" />
        }
        const {isError, errMsg} = this.state
        return(
            <div className="login-page">
                <div className="login-cont">
                    <img className="website-login"  src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png" alt="website login" />
                    <div className="login-card">
                        <h1 className="welcome">Welcome Back!</h1>
                        <form className="form" onSubmit={this.onClickLogin}>
                            <label htmlFor="userId" >User ID</label>
                            <input id="userId" onChange={this.onChangeUsername} placeholder="Enter user ID" />
                            <label htmlFor="password">PIN</label>
                            <input id="password" type="password" onChange={this.onChangePassword} placeholder="Enter Password" />
                            <button type="submit" className="login-btn">Login</button>
                            { isError && <p className="wrong-details">{errMsg}</p>}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage