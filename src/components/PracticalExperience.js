import React from "react";

function PracticalExperience(props) {
  let { persDetails } = props;
  console.log(persDetails[0]);
  return (
    <div className="EduDetailsRender">
      <h2 className="EduHead">Practical Experience:</h2>
      {persDetails[0] === undefined ? (
        <div></div>
      ) : (
        persDetails[0].map(function (e) {
          return (
            <div className="EduDetailsDisplay" key={e[0]}>
              <h3>Company Name</h3>
              <p>{e[1].CompanyName}</p>
              <h3>Title of Position</h3>
              <p>{e[1].PositionTitle}</p>
              <h3>From</h3>
              <p>{e[1].FromDate}</p>
              <h3>To</h3>
              <p>{e[1].ToDate}</p>
            </div>
          );
        })
      )}
    </div>
  );
}

export default PracticalExperience;
