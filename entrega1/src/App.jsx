import { useState } from 'react';
import './App.css';
import { Modal, Button } from 'react-bootstrap';
import MyNavbar from './componentes/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

// Images
import producto1Image from './media/CARGO-PARACHUTE-NEGRO-1b.jpg';
import producto2Image from './media/AFTERLIFE-HOODIE-2-scaled.jpg';
import producto3Image from './media/CLASSIC-HOODIE-OVERSIZED-BEIGE-1b.jpg';
import producto4Image from './media/College-Polo-Shirt-Beige-1b.jpg';
import producto5Image from './media/SWEATPANT-VERDE-1.jpg';
import producto6Image from './media/XPD-BLANCO-1.jpg';

function App() {
  const Elegancia = "Elegancia";
  const categories = ["Ropa de Hombre", "Ropa de Mujer", "Accessorios"];
  const products = [
    {
      name: "Producto 1",
      price: "$19.99",
      image: producto1Image,
    },
    {
      name: "Producto 2",
      price: "$24.99",
      image: producto2Image,
    },
    {
      name: "Producto 3",
      price: "$29.99",
      image: producto3Image,
    },
    {
      name: "Producto 4",
      price: "$14.99",
      image: producto4Image,
    },
    {
      name: "Producto 5",
      price: "$39.99",
      image: producto5Image,
    },
    {
      name: "Producto 6",
      price: "$49.99",
      image: producto6Image,
    }
  ];
  const [showModal, setShowModal] = useState(false); // Modal state
  const [selectedProduct, setSelectedProduct] = useState(null); // Track the selected product
  const [shoppingCart, setShoppingCart] = useState([]); // Initialize the shopping cart as an empty array

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const addToCart = (product) => {
    setShoppingCart([...shoppingCart, product]); // Add the selected product to the shopping cart
  };

  return (
    <div className="app-container">
      <MyNavbar storeName={Elegancia} categories={categories} />

      <div className="container content-container">
        <h1 className="title">Bienvenido a {Elegancia}</h1>

        <h2 className="subtitle">Categorías</h2>
        <ul>
          {categories.map((category, index) => (
            <li key={index} className="category-item">
              {category}
            </li>
          ))}
        </ul>

        <h2 className="subtitle">Productos Destacados</h2>
        <div className="row">
          {products.map((product, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="card mb-3" onClick={() => openModal(product)}>
                <div
                  style={{ cursor: 'pointer' }}
                  onClick={() => openModal(product)} // Open the modal on image click
                >
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                  <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct ? selectedProduct.name : ''}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <div>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                style={{ maxWidth: '100%' }}
              />
              <p>{selectedProduct.price}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
