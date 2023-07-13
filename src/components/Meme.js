import {useState} from 'react';
import memesData from '../memesData';

function generateRandomMeme() {
    let length = Object.keys(memesData.data.memes).length;
    let index = Math.floor(Math.random() * length);
    let randomMeme = memesData.data.memes[index];
    return randomMeme;
}

export default function Meme() {
    const [meme, setMeme] = useState(generateRandomMeme)
    const isGoingOut = false;
    function handleClick() {
        setMeme(generateRandomMeme)
    }
    return (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top text"/>
                <input type="text" className="form--input" placeholder={isGoingOut ? "Bottom Text": "No text"}/>
                <button className="form--button" onClick={handleClick}>Get a new meme image  🖼</button>
            </div>
            <img src={meme.url} alt={meme.name} className='main--image'/>
        </main>

    );
}