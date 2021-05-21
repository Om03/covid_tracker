import react, { useEffect, useState } from "react";
import "./Card.css";
import axios from "axios";

function Card() {
  const [data, setData] = useState([]);
  const url = "https://api.covid19india.org/data.json";
  const val =0;
  
  useEffect(() => {
    async function getData() {
      const data = await axios.get(url);
      setData(data.data.statewise[0]);
    }
     getData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card card-1">
            <h3>State</h3>
            <p>India</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-2">
            <h3>Recovered</h3>
            <p>{data.active}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-3">
            <h3>Confirmed</h3>
            <p>{data.confirmed}</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card card-4">
          <h3>Deaths</h3>
          <p>{data.deaths}</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card card-5">
          <h3>Active</h3>
          <p>{data.active}</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card card-6">
          <h3>Updated On</h3>
          <p>{data.lastupdatedtime}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
