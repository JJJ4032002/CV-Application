import React from "react";

function GeneralSectionRender(props) {
  const { details } = props;
  console.log(details);
  return (
    <div className="FormRender">
      {details.map(function (e) {
        return (
          <div key={e.id} className="DisplayingItems">
            <h1 className="renderHead">{e.Name}</h1>
            <div className="NameEmail">
              <h3>{e.Email}</h3>
              <h3>{e.Number}</h3>
            </div>
            <h2>Summary :</h2>
            <p className="Summary">{e.Summary}</p>
          </div>
        );
      })}
    </div>
  );
}

export default GeneralSectionRender;
