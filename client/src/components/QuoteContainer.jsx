import {React, useEffect} from "react";
//import { changeColor, changeQuote, chnageAuthor } from "../PageState.ts";
//import { useSelector, useDispatch } from 'react-redux'
import { TweetIcon } from "../assets/TweetIcon.js";
import $ from "jquery";

let quotesData;
let quote = 'Damn';
let author = "Shadow the Hedgehog";
// let quoteArray;
// let authorArray;
let tweetLink;
let curQuote = -1;
let temp = -1;
const QuoteContainer = () => {
 //   const quote = useSelector((state) => state.quote.value)
 //   const dispatch = useDispatch()
 
const handleClick = () => {
    console.log("click")
    randColor();
    randQuote();
}
const getQuotes = () => {
    return $.ajax({
      headers: {
        Accept: 'application/json'
      },
      url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
      success: function (jsonQuotes) {
        if (typeof jsonQuotes === 'string') {
            quotesData = JSON.parse(jsonQuotes);
            console.log('quotesData');
            console.log(quotesData);
        }
        randQuote();
        randColor();
      }
    });
  }
const randQuote = () => {
    while(temp == curQuote){
        temp = Math.floor(Math.random() * quotesData.quotes.length);
    }
//    console.log(quotesData.quotes.length); 
//    console.log(curQuote);
    curQuote = temp;
    quote = quotesData.quotes[curQuote].quote;
    author = quotesData.quotes[curQuote].author;
    document.getElementById("text").innerText = quote;
    document.getElementById("author").innerText = "~ " + author;
    setLink();
  }
const randColor = () => {
    var elements = document.querySelectorAll(".VariableColor");
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    console.log(elements);
    for(let i = 0; i < elements.length; i++){
        elements[i].style.background = randomColor;
    }
    document.getElementById("text").style.color = randomColor;
    document.getElementById("author").style.color = randomColor;
    //console.log(randomColor);
}
    const setLink = () => {
        tweetLink = '"' + quote + '" ~' + author;
        document.getElementById("tweet-button").href=`https://twitter.com/intent/tweet?hashtags=quote&text=${tweetLink}`;
        console.log(tweetLink);
    }
    useEffect(() => {
        getQuotes();
      }, []);
  
    return (
        <>
            <div className="QuoteBoxContainer VariableColor">
                <div className="QuoteBox" id = "quote-box">
                    <div className="QuoteText" id = "text">{quote}</div>
                    <br/>
                    <div className="AuthorText" id = "author">~ {author}</div>
                    <div className = "Buttons">
                        <a className = "TweetIconContainer VariableColor ButtonOverlay" id = "tweet-button" href = {`https://twitter.com/intent/tweet?hashtags=quote&text=${tweetLink}`} target ="_blank" rel="noreferrer">
                           <TweetIcon className = "TweetIcon"/>
                        </a>   
                        <button className = "NewQuote VariableColor ButtonOverlay" onClick = {handleClick} id = "new-quote"> New Quote </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default QuoteContainer;
