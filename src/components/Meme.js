import memesData from '../memesData';

function generateRandomMeme() {
    let length = Object.keys(memesData.data.memes).length;
    let index = Math.floor(Math.random() * length);
    let randomMeme = memesData.data.memes[index];
    return randomMeme;
}

export default function Meme() {
    let meme = generateRandomMeme();
    
    function handleClick() {
        alert("It works");
        meme = generateRandomMeme();
    }
    return (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top text"/>
                <input type="text" className="form--input" placeholder="Bottom text"/>
                <button className="form--button" onClick={handleClick}>Get a new meme image  🖼</button>
            </div>
            <img src={meme.url} alt={meme.name} className='main--image'/>
        </main>

    );
}