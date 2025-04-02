import Layout from "../components/Layout";

function Stocks() {
  return (
    <>
      <Layout>
        <b className="content-header">Stocks</b>
        <div className="stock-nav">
          <input type="text" placeholder="🔍︎ Search"></input>
          <button className="edit-button">Add Stock</button>
          <button className="edit-button">Modify Stock</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Barcode</th>
              <th>Product</th>
              <th>Date</th>
              <th>Supplier</th>
              <th>Category</th>
              <th>Stock Quantity</th>
              <th>Unit Price</th>
              <th>Total Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>Product 1</td>
              <td>MM/DD/YYYY</td>
              <td>Supplier Name</td>
              <td>Category 1</td>
              <td>x packs/pcs</td>
              <td>₱</td>
              <td>₱</td>
              <td>Fully stocked</td>
            </tr>
            <tr>
              <td>02</td>
              <td>Product 2</td>
              <td>MM/DD/YYYY</td>
              <td>Supplier Name</td>
              <td>Category 2</td>
              <td>x packs/pcs</td>
              <td>₱</td>
              <td>₱</td>
              <td>Nearly out of Stock</td>
            </tr>
            <tr>
              <td>03</td>
              <td>Product 3</td>
              <td>MM/DD/YYYY</td>
              <td>Supplier Name</td>
              <td>Category 3</td>
              <td>x packs/pcs</td>
              <td>₱</td>
              <td>₱</td>
              <td>Out of Stock</td>
            </tr>
            <tr>
              <td>04</td>
              <td>Product 4</td>
              <td>MM/DD/YYYY</td>
              <td>Supplier Name</td>
              <td>Category 4</td>
              <td>x packs/pcs</td>
              <td>₱</td>
              <td>₱</td>
              <td>Fully stocked</td>
            </tr>
            <tr>
              <td>05</td>
              <td>Product 5</td>
              <td>MM/DD/YYYY</td>
              <td>Supplier Name</td>
              <td>Category 5</td>
              <td>x packs/pcs</td>
              <td>₱</td>
              <td>₱</td>
              <td>Fully stocked</td>
            </tr>
            <tr>
              <td>06</td>
              <td>Product 6</td>
              <td>MM/DD/YYYY</td>
              <td>Supplier Name</td>
              <td>Category 6</td>
              <td>x packs/pcs</td>
              <td>₱</td>
              <td>₱</td>
              <td>Nearly out of Stock</td>
            </tr>
          </tbody>
        </table>

        <div className="prev-next-button">
          <a href="#" class="previous">&laquo; Previous</a>
          <a href="#" class="next">Next &raquo;</a>
        </div>
      </Layout>
    </>
  );
}

export default Stocks;
