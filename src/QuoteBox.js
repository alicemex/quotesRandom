import React, { useState, useEffect } from 'react';
import twitterIcon from '../src/twitter.svg'


const Quotebox = (props) => {
    const [quote, setQuote] = useState('');
    const [author, setAutor] = useState('');

    useEffect(() => {
        getQuote()
    }, []);

    const getQuote = () => {
        let url = `https://gist.githubusercontent.com/carmandomx/3d7ac5f15af87a587e1d25f5ba96de61/raw/e2d848b87c730a580077de221666343c15b1a243/gistfile1.txt`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let dataQuotes = data.quotes;
                let randomNum = Math.floor(Math.random() * dataQuotes.length);
                let randomQuote = data.quotes[randomNum];
                setQuote(randomQuote.quote);
                setAutor(randomQuote.author);
            })
    }
    const randomColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;
        let boton = document.getElementById("newquote");
        boton.style.backgroundColor = "#" + randomColor;
    }

    const handleClick = () => {
        getQuote();
        randomColor();


    }
    return (<div id="Quotebox" >
        <div id="quoteSpace">"{quote}"</div>

        <div id="autor"> <p>{author} </p></div>
        <div id="buttons">
            <div className="social-media">
                <a href="http://www.twitter.com" id="tweet-quote">
                    <span><img src={twitterIcon} alt="twitter"></img></span>
                </a>
            </div>
            <button onClick={handleClick} id="newquote">New Quote</button>
        </div>
    </div>
    )

}

export default Quotebox;