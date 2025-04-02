import Layout from "../components/Layout";

function Dashboard() {
  return (
    <>
      <Layout>
        <div>
          <b className="content-header">Dashboard</b>
          <div className="dashboard-container">
            <div className="dashboard-content"><div className="dashboard-subheader">Total Transactions:</div>₱ XXXX.00</div>
            <div className="dashboard-content"><div className="dashboard-subheader">Total Customers Served:</div></div>
            <div className="dashboard-content"><div className="dashboard-subheader">Total Expenses:</div>₱ XXXX.00</div>
            <div className="dashboard-content"><div className="dashboard-subheader">Total Inflows:</div>₱ XXXX.00</div>

            <div className="dashboard-content"><div className="dashboard-subheader">Products low on Stock:</div></div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Dashboard;
