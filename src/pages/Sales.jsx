import Layout from "../components/Layout";

function Sales() {
  return (
    <>
      <Layout>
        <b className="content-header">Sales</b>
          <label for="salesFilter"></label>
          <select id="salesFilter" className="sales-filter">
            <option value="all">All</option>
            <option value="paid">Paid</option>
            <option value="unpaid">Unpaid</option>
          </select>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Invoice No.</th>
              <th>Barcode</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Total Sales</th>
              <th>Salesperson</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MM/DD/YYYY</td>
              <td>XXXX-XX</td>
              <td>01</td>
              <td>Product 1</td>
              <td>x packs/pcs</td>
              <td>₱</td>
              <td>₱</td>
              <td>Name</td>
              <td>Paid</td>
            </tr>
            <tr>
              <td>MM/DD/YYYY</td>
              <td>XXXX-XX</td>
              <td>02</td>
              <td>Product 2</td>
              <td>x packs/pcs</td>
              <td>₱</td>
              <td>₱</td>
              <td>Name</td>
              <td>Paid</td>
            </tr>
            <tr>
              <td>MM/DD/YYYY</td>
              <td>XXXX-XX</td>
              <td>03</td>
              <td>Product 3</td>
              <td>x packs/pcs</td>
              <td>₱</td>
              <td>₱</td>
              <td>Name</td>
              <td>Unpaid</td>
            </tr>
            <tr>
              <td>MM/DD/YYYY</td>
              <td>XXXX-XX</td>
              <td>04</td>
              <td>Product 4</td>
              <td>x packs/pcs</td>
              <td>₱</td>
              <td>₱</td>
              <td>Name</td>
              <td>Paid</td>
            </tr>
            <tr>
              <td>MM/DD/YYYY</td>
              <td>XXXX-XX</td>
              <td>05</td>
              <td>Product 5</td>
              <td>x packs/pcs</td>
              <td>₱</td>
              <td>₱</td>
              <td>Name</td>
              <td>Unpaid</td>
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

export default Sales;
