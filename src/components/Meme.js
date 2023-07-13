import {useState} from 'react';
import memesData from '../memesData';

function generateRandomMeme() {
    let length = Object.keys(memesData.data.memes).length;
    let index = Math.floor(Math.random() * length);
    let randomMeme = memesData.data.memes[index].url;
    return randomMeme;
}

export default function Meme() {
    const [allMemesData, setAllMemesData] = useState(memesData)
    const [meme, setMeme] = useState(
        {
            topText: "",
            bottomText: "",
            randomImage: generateRandomMeme()
        })
    
    function handleClick() {
        setMeme( prevMeme => (
            {
                ...prevMeme,
                randomImage: generateRandomMeme()
            }

        ))
    }
    return (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top text"/>
                <input type="text" className="form--input" placeholder="Bottom Text"/>
                <button className="form--button" onClick={handleClick}>Get a new meme image  🖼</button>
            </div>
            <img src={meme.randomImage} alt="Random" className='main--image'/>
        </main>

    );
}