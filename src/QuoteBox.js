import React, {Component} from 'react'
import './QuoteBox.css'

class QuoteBox extends Component{
	constructor(props){
		super(props);
		this.state={
			quotes:[],
			index: 0,
		}
	}
	componentDidMount(){
		fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
		.then(response => response.json())
		.then(quotes=>this.setState({quotes:quotes.quotes}));
	}
	randomIndex = () =>{
		this.setState({
			index: Math.floor(Math.random()*this.state.quotes.length)
		})} 
	render(){
		const {quotes,index} = this.state;
		console.log('index:', index)
				return !quotes.length
				? <h1>Loading</h1>
				: <div id="quote-box">
						<p id="text">{quotes[index].quote}</p>
						<p id="author">{quotes[index].author}</p>
						<button id="new-quote" onClick={this.randomIndex}>new quote</button>
						<a
						href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quotes[index].quote}-${quotes[index].author}`}
						id="tweet-quote"
						target="_blank"
						rel="noopener noreferrer">
						<button><i class="fab fa-twitter"></i></button>
						</a>
				</div>	
	}
}

export default QuoteBox;