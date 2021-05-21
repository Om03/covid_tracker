import react from "react";
import "./Table.scss";
import SubComponent from "./SubComponet";
import { useEffect, useState } from "react";
import axios from "axios";

function Table() {
  const [data2, setData] = useState([]);
  const url = "https://api.covid19india.org/data.json";
  const val = 0;

  useEffect(() => {
    async function getData() {
      const data = await axios.get(url);
      setData(data.data.statewise);
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
            {data2.map((actual , index) => (
              <SubComponent  key = {index} properties ={actual} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
