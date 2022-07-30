const NavBar = () => {
    return (  
        <nav className="navbar">
            <div className="subnav">
                <button className="subnavbtn"><i className="so-funktionierts" id="subnavitem">Mein bereich </i><i className="fa fa-caret-down"></i></button>
                <div className="subnav-content">
                <a href="#" className="so-funktionierts">My published jokes</a>
                <a href="#" className="so-funktionierts">My saved jokes</a>
                <a href="#" className="so-funktionierts">Account informations</a>
                <a href="#" className="so-funktionierts">Publish new joke</a>
                </div>
            </div>
            <a href="#" className="so-funktionierts">Sonderancebote</a>
            <a href="#" className="so-funktionierts">So Funktioniert's</a>
        </nav>
    );
}
 
export default NavBar;