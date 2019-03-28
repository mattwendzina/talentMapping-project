import React from "react";
import NavBar from "../NavBar/index";
import Clock from "../Clock/index";
import Grid from "../Grid/index";
import StaffList from "../StaffList/index";
import UserList from "../UserList/index";
import LogInHeader from "../LogInHeader";
import LogInContainer from "../LogInContainer";
import Logo from "../Logo";
import "./App.css";
import styled from "styled-components";
import DnDTest from "../DnD/DnDTest";

const AppWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px;
`;

const config = require("../../config");
const Container = styled.div``;
console.log(config.API_URI);
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: Boolean(localStorage.getItem("token")),
            email: "",
            password: ""
        };
    }

    onChange = event => {
        const { name, value } = event.target;
        this.setState(state => ({
            [name]: value
        }));
    };

    onLogin = event => {
        event.preventDefault();
        fetch(`${config.API_URI}/authenticate`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
            .then(res => res.json())
            .then(({ message, success, token }) => {
                if (success && token) {
                    localStorage.setItem("token", token);
                    this.setState(state => ({
                        isLoggedIn: true
                    }));
                }
                console.log(message);
            })
            .then(
                this.setState(state => ({
                    email: "",
                    password: ""
                }))
            )
            .catch(err => console.error(err));
        //.finally(() => this.setState(() => ({ isLoading: false })));
    };

    render() {
        return (
            <>
                {!this.state.isLoggedIn ? (
                    <div>
                        <div>
                            <LogInHeader />
                        </div>
                        <div>
                            <Logo />
                        </div>
                        <div className="logInCont">
                            <LogInContainer
                                onLogin={this.onLogin}
                                onChange={this.onChange}
                                email={this.state.email}
                                password={this.state.password}
                            />
                        </div>
                        <div>
                            <h6>WTP © 2019</h6>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="App">
                            <NavBar />
                            <div className="container">
                                <div className="listCont">
                                    <div>
                                        <UserList />
                                        <Clock />
                                    </div>
                                    <div>
                                        <StaffList />
                                    </div>
                                </div>
                                <div className="gridCont">
                                    <div className="Grid">
                                        <Grid />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        {/* <AppWrapper>
                        <Container>
                            <DnDTest />
                        </Container>
                    </AppWrapper> */}
                    </div>
                )}
            </>
        );
    }

}

export default App;
