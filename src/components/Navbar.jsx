
function NavBar(props){
    return (
        <nav>
            <h2>{props.storeName}</h2>
            <ul>
                <li>Home</li>
                <li>Books</li>
                <li>About</li>
            </ul>
        </nav>
    )
}

export default NavBar ;