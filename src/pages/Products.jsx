import Layout from "../components/Layout";

function Products() {
  return (
    <>
      <Layout>
        <b className="content-header">List of Products</b>
        <div className="stock-nav">
          <input type="text" placeholder="🔍︎ Search"></input>
          <button className="edit-button">Add Product</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Barcode</th>
              <th>Product</th>
              <th>Unit Price</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Image</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>Product 1</td>
              <td>₱</td>
              <td>Category 1</td>
              <td>x packs/pcs</td>
              <td>
                <img
                  src="/src/images/product-image_placeholder.png"
                  className="product-image"
                ></img>
              </td>
              <td>
                <button className="edit-button edit-button-a">Edit</button>
                <button className="edit-button edit-button-b">Delete</button>
              </td>
            </tr>
            <tr>
              <td>02</td>
              <td>Product 2</td>
              <td>₱</td>
              <td>Category 2</td>
              <td>x packs/pcs</td>
              <td>
                <img
                  src="/src/images/product-image_placeholder.png"
                  className="product-image"
                ></img>
              </td>
              <td>
                <button className="edit-button edit-button-a">Edit</button>
                <button className="edit-button edit-button-b">Delete</button>
              </td>
            </tr>
            <tr>
              <td>03</td>
              <td>Product 3</td>
              <td>₱</td>
              <td>Category 3</td>
              <td>x packs/pcs</td>
              <td>
                <img
                  src="/src/images/product-image_placeholder.png"
                  className="product-image"
                ></img>
              </td>
              <td>
                <button className="edit-button edit-button-a">Edit</button>
                <button className="edit-button edit-button-b">Delete</button>
              </td>
            </tr>
            <tr>
              <td>04</td>
              <td>Product 4</td>
              <td>₱</td>
              <td>Category 4</td>
              <td>x packs/pcs</td>
              <td>
                <img
                  src="/src/images/product-image_placeholder.png"
                  className="product-image"
                ></img>
              </td>
              <td>
                <button className="edit-button edit-button-a">Edit</button>
                <button className="edit-button edit-button-b">Delete</button>
              </td>
            </tr>
            <tr>
              <td>05</td>
              <td>Product 5</td>
              <td>₱</td>
              <td>Category 5</td>
              <td>x packs/pcs</td>
              <td>
                <img
                  src="/src/images/product-image_placeholder.png"
                  className="product-image"
                ></img>
              </td>
              <td>
                <button className="edit-button edit-button-a">Edit</button>
                <button className="edit-button edit-button-b">Delete</button>
              </td>
            </tr>
            <tr>
              <td>06</td>
              <td>Product 6</td>
              <td>₱</td>
              <td>Category 6</td>
              <td>x packs/pcs</td>
              <td>
                <img
                  src="/src/images/product-image_placeholder.png"
                  className="product-image"
                ></img>
              </td>
              <td>
                <button className="edit-button edit-button-a">Edit</button>
                <button className="edit-button edit-button-b">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="prev-next-button">
          <a href="#" className="previous">
            &laquo; Previous
          </a>
          <a href="#" className="next">
            Next &raquo;
          </a>
        </div>
      </Layout>
    </>
  );
}

export default Products;
