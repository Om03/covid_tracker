import "./Table.scss";
import SubComponent from "./SubComponet";
import axios from "axios";
import { useEffect, useState } from "react";
import { covidData } from "./data";
import { useHistory } from "react-router-dom";

function Table() {
  const [data2, setData] = useState([]);
  const url = "https://api.covid19india.org/data.json";
  const history = useHistory();

  useEffect(() => {
    async function getData() {
      try {
        const data = await axios.get(url);
        setData(data.data.statewise);
      } catch (error) {
        setData(covidData);
      }
    }
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="table">
          <div className="table-header">
            <div className="header__item filter__link filter__link--number">
              State
            </div>
            <div className="header__item filter__link filter__link--number">
              Confirmed
            </div>
            <div className="header__item filter__link filter__link--number">
              Recoverd
            </div>
            <div className="header__item filter__link filter__link--number">
              Deaths
            </div>
            <div className="header__item filter__link filter__link--number">
              Active
            </div>
            <div className="header__item filter__link filter__link--number">
              Updated On
            </div>
          </div>
          <div className="table-content">
            {data2?.map((actual, index) => (
              <SubComponent key={index} properties={actual} />
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        Go Back
      </button>
    </>
  );
}

export default Table;
