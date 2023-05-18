const Title = () => {
    return<a href="/"> <img src="https://png.pngtree.com/png-vector/20220726/ourlarge/pngtree-food-logo-png-image_6061627.png" alt="logo" className="logo"/> </a>
  };
  
  const HeaderComponent = () => {
    return (
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>contact</li>
                    <li>cart</li>
                </ul>
  
            </div>
        </div>
    );
  };

  export default HeaderComponent;