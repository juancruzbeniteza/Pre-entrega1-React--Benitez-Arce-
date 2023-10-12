import React, { useState } from 'react';
import { Navbar, Nav, OverlayTrigger, Popover, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa'; // Import the shopping cart icon

function MyNavbar({ storeName, categories }) {
  const [cart, setCart] = useState([]); // State to manage the cart

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const cartCount = cart.length; // Get the number of items in the cart

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">{storeName}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {categories.map((category, index) => (
            <Nav.Link key={index} href={`#${category}`}>
              {category}
            </Nav.Link>
          ))}
        </Nav>
        {/* Cart button and popover */}
        <OverlayTrigger
          trigger="click"
          placement="bottom"
          overlay={
            <Popover id="cart-popover">
              <Popover.Title as="h3">Shopping Cart</Popover.Title>
              <Popover.Content>
                {cart.length === 0 ? (
                  <p>Your cart is empty.</p>
                ) : (
                  <ul>
                    {cart.map((product, index) => (
                      <li key={index}>{product.name}</li>
                    ))}
                  </ul>
                )}
              </Popover.Content>
            </Popover>
          }
        >
          <Button variant="primary" className="cart-button">
            <FaShoppingCart /> Cart ({cartCount})
          </Button>
        </OverlayTrigger>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
