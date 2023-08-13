import { useEffect, useState } from "react";
import axios from "axios";

const Sucesscomplaints = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/sucessComplaints").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  return (
    <div className="sales-boxes">
      <div className="recent-sales box">
        <div className="title">Complaint Information</div>
        <div className="sales-details">
          <table className="table">
            <tr className="tableHeader">
              <td>S.No</td>
              <td>Branch</td>
              <td>Description</td>
              <td>Spare Parts Needed</td>
              <td>Quantity</td>
              <td>Status</td>
            </tr>
            {data &&
              data.map((ele, index) => {
                return (
                  <tr className="tableHeader">
                    <td>{index + 1}</td>
                    <td>{ele.BranchName}</td>
                    <td>{ele.SparePart}</td>
                    <td>{ele.Description}</td>
                    <td>{ele.Quantity}</td>
                    <td>{ele.Status}</td>
                  </tr>
                );
              })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Sucesscomplaints;
