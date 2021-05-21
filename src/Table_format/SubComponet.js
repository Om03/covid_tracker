import recat from "react";
import "./Table.scss";

function SubComponent(props) {
    console.log(props);
  return (
    <>
        <div className="table-row">
          <div className="table-data">{props.properties.state}</div>
          <div className="table-data">{props.properties.confirmed}</div>
          <div className="table-data">{props.properties.recovered}</div>
          <div className="table-data">{props.properties.deaths}</div>
          <div className="table-data">{props.properties.active}</div>
          <div className="table-data">{props.properties.lastupdatedtime}</div>
        </div>
    </>
  );
}

export default SubComponent;
