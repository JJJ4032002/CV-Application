import React from "react";

function EducationalQualifications(props) {
  let { eduDetails } = props;
  console.log(eduDetails[0]);
  return (
    <div className="EduDetailsRender">
      <h2 className="EduHead">Education Qualifications:</h2>
      {eduDetails[0] === undefined ? (
        <div></div>
      ) : (
        eduDetails[0].map(function (e) {
          return (
            <div className="EduDetailsDisplay" key={e[0]}>
              <h3>School Name</h3>
              <p>{e[1].SchoolName}</p>
              <h3>Title of Education</h3>
              <p>{e[1].TitleEdu}</p>
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

export default EducationalQualifications;
