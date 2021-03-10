import React from 'react';
import {connect} from 'react-redux';
import "./index.css";
import {addItem, deleteItem, clear} from './redux/actions';

const mapStateToProps = state => {
	return state;
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            wish: ""
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleInput(event) {
        this.setState({wish: event.target.value});
    }

    handleAdd(event) {
        event.preventDefault();
        if (this.state.wish.length > 0 && !this.props.wishList.includes(this.state.wish)) {
            this.props.addItem(this.state.wish);
            this.setState({wish: ""});
        } else {
            if (this.state.wish.length === 0) {
                alert("You can't wish for nothing.");
            } else {
                alert("You have already wished for that!");
            }
        }
    }

    handleRemove(event) {
        this.props.deleteItem(event.target.innerHTML);
    }

    handleSubmit(event) {
        alert("Wish list submitted to Santa!");
        console.log("Here you go Santa:");
        console.log(this.props.wishList);

        this.props.clear();
    }

    render() {
        return (
            <div className="full">
                <div id="card">
                    <div className="container">
                        <h2 className="text-center">MY WISHLIST</h2>

                        <div id="card-list">
                            <ul>
                                {
                                    this.props.wishList.map(w => {
                                        return (
                                            <li key={w} onClick={this.handleRemove}>{w}</li>
                                        )
                                    })
                                }
                            </ul> 
                        </div>
                        <br></br>
                        <form onSubmit={this.handleAdd}>
                            <input id="card-input" onChange={this.handleInput} autoComplete="off" value={this.state.wish}></input>
                            <div className="w-100 text-center">
                                <button className="btn w-50 m-br">Add</button>
                            </div>
                        </form>
                        <br></br>
                        
                        <button className="btn w-100" onClick={this.handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, { addItem, deleteItem, clear })(App)