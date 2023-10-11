import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

class App extends Component {


    constructor() {
        super()

        this.state = {
            email: "",
            password: ""

        }
    }

    validation = (event) => {
        event.preventDefault()

        this.setState({
            email: "",
            password: ""
        })
    }

    componentDidMount() {
        window.alert("გვერდი ჩაიტვირთა")
    }
    componentDidUpdate() {
        window.alert("გვერდზე დაფიქსირდა განახლება")
    }

    saveEmail(event) {
        this.setState({
            email: event.target.value

        })
    }
    savePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    render() {
        return (
            <Fragment>

                <form onSubmit={(event) => this.validation(event)} className="form-control p-4">
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="email" value={this.state.email} placeholder="შეიყვანეთ ელ.ფოსტა" className="form-control w-100"
                        onChange={(event) => this.saveEmail(event)} />
                    <br />
                    <label htmlFor="password">Email</label>
                    <br />
                    <input type="password" value={this.state.password} placeholder="შეიყვანეთ ელ.ფოსტა" className="form-control w-100"
                        onChange={(event) => this.savePassword(event)} />
                    <br />
                    <input type="submit" value="submit" className="btn btn-success ps-4 pe-4 " />
                </form>


            </Fragment>


        );
    }
}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />)