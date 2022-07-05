import React, { Component } from 'react';
import './App.css';
import {connect, sendMsg} from "./api/client";
import Header from './components/';
import ChatHistory from './components/ChatHistory';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chatHistory: []
		}
	}

	componentDidMount() {
		connect((msg) => {
			console.log('New Message')
			this.setState(prevState => ({
				chatHistory: [...this.state.chatHistory, msg]
			}))
			console.log(this.state)
		});
	}

	send() {
		console.log("heelo");
		sendMsg("hello");
	}

	render() {
		return (
			<div className='App'>
				<Header/>
				<ChatHistory chatHistory={this.state.chatHistory}/>
				<button onClick={this.send}>Hit</button>
			</div>
		)
	}
}

export default App;