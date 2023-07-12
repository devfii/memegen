import logo from '../images/logo.svg';

export default function Header () {
    return (
        <header>
            <img src={logo} alt="Meme-Logo" className='header--logo'/>
            <h3 className='header--name'>Meme Generator</h3>
            <h4 className='header--course'>React Course - Project 3</h4>
        </header>
    );
}