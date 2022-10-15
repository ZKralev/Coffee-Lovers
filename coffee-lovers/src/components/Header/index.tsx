
import './header.css';

function Header() {

  return (
    <div className='Header'>
            <header>
                <button className="semi-transparent-button with-border" onClick={() => window.setPage("home")}> Home </button>
                <button className="semi-transparent-button with-border" onClick={() => window.setPage("coffee")}> Coffee in the World </button>
                <button className="semi-transparent-button with-border" onClick={() => window.setPage("contact")}> Contact us</button>
                <h1 className='title'>COFFEE LOVERS</h1>
            </header>
    </div>
  );
}

export default Header;
