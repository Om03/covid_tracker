import { useEffect, useState } from "react";
import "./Card.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
function Card() {
  const [data, setData] = useState({});
  const url = "https://api.covid19india.org/data.json";

  useEffect(() => {
    const getData = async () => {
      try {
        const data2 = await axios.get(url);
        setData(data2.data.statewise[0]);
      } catch (error) {
        setData({
          active: "363849",
          confirmed: "32249900",
          deaths: "432112",
          deltaconfirmed: "24692",
          deltadeaths: "438",
          deltarecovered: "36862",
          lastupdatedtime: "13/08/2021 23:27:22",
          migratedother: "12679",
          recovered: "31441260",
          state: "Total",
          statecode: "TT",
          statenotes: "",
        });
      }
    };
    getData();
  }, []);

  const history = useHistory();

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
            <p>{data?.recovered}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-3">
            <h3>Confirmed</h3>
            <p>{data?.confirmed}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-4">
            <h3>Deaths</h3>
            <p>{data?.deaths}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-5">
            <h3>Active</h3>
            <p>{data?.active}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-6">
            <h3>Updated On</h3>
            <p>{data?.lastupdatedtime}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div
            onClick={() => {
              history.push("/table-view");
            }}
            className="card card-7"
          >
            <h3>More Details</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
