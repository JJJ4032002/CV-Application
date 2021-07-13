import React, { useState } from "react";
import GeneralSectionRender from "./GeneralSectionRender";
import uniqid from "uniqid";
import EducationalQualifications from "./EducationalQualifications";
import PracticalExperience from "./PracticalExperience";

function GeneralSection() {
  let i = uniqid();
  let [arr, setArr] = useState([]);
  let [edu, setEdu] = useState([]);
  let [perArr, setPerArr] = useState([]);
  let [perArrProps, setPerArrProps] = useState({});
  let [dispPers, setDispPers] = useState([]);

  let [person, setPerson] = useState({
    Name: "",
    Email: "",
    Number: "",
    Summary: "",
  });
  let [people, setPeople] = useState([]);
  let [eduProps, setEduProps] = useState({});

  function setPerformanceForm() {
    setPerArrProps({
      ...perArrProps,
      [i]: { CompanyName: "", PositionTitle: "", FromDate: "", ToDate: "" },
    });

    setPerArr([...perArr, i]);
  }

  function EduForm() {
    setEduProps({
      ...eduProps,
      [i]: { SchoolName: "", TitleEdu: "", FromDate: "", ToDate: "" },
    });

    setArr([...arr, i]);
    console.log(arr);
    console.log(edu);
  }

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    console.log(name, value);
    setPerson({ ...person, [name]: value });
  }

  function submitChanges(e) {
    e.preventDefault();
    let newObj = { ...person, id: uniqid() };
    setPeople([newObj]);
  }

  function changePers(e) {
    let idOfValue = e.target.parentNode.parentNode.id;
    let name = e.target.name;
    let value = e.target.value;
    setPerArrProps({
      ...perArrProps,
      [idOfValue]: { ...perArrProps[idOfValue], [name]: value },
    });
  }

  function changeEdu(e) {
    let idOfValue = e.target.parentNode.parentNode.id;
    let name = e.target.name;
    let value = e.target.value;
    setEduProps({
      ...eduProps,
      [idOfValue]: { ...eduProps[idOfValue], [name]: value },
    });
  }

  function SubmitEduDetails(e) {
    e.preventDefault();

    const ObjToArr = Object.entries(eduProps);
    setEdu([ObjToArr]);
    console.log(edu);
  }

  function SubmitpersDetails(e) {
    e.preventDefault();

    const ObjToArr = Object.entries(perArrProps);
    setDispPers([ObjToArr]);
    console.log(dispPers);
  }

  function delEduDetails(e) {
    let key = e.target.parentNode.parentNode.id;
    function filterArr(keyToBeFilt) {
      return keyToBeFilt !== key;
    }
    let newEduArr = [];
    let filtArr = arr.filter(filterArr);
    let objKeys = Object.entries(eduProps);
    newEduArr = objKeys.filter(function ([keyToCheck, value]) {
      return keyToCheck !== key;
    });
    setEduProps({});
    eduProps = {};

    let ArrayinArray = [newEduArr];
    let arrToObj = ArrayinArray.map(function (e) {
      let key = Object.fromEntries(e);
      eduProps = key;
      setEduProps(eduProps);
      console.log(eduProps);
    });

    console.log(eduProps);

    setEdu([newEduArr]);

    setArr(filtArr);
  }

  function delpersDetails(e) {
    let key = e.target.parentNode.parentNode.id;
    function filterArr(keyToBeFilt) {
      return keyToBeFilt !== key;
    }
    let newEduArr = [];
    let filtArr = perArr.filter(filterArr);
    let objKeys = Object.entries(perArrProps);
    newEduArr = objKeys.filter(function ([keyToCheck, value]) {
      return keyToCheck !== key;
    });
    setPerArrProps({});
    perArrProps = {};

    let ArrayinArray = [newEduArr];
    let arrToObj = ArrayinArray.map(function (e) {
      let key = Object.fromEntries(e);
      eduProps = key;
      setPerArrProps(perArrProps);
      console.log(perArrProps);
    });

    console.log(perArrProps);

    setDispPers([newEduArr]);

    setPerArr(filtArr);
  }

  return (
    <div>
      <div className="GeneralSection">
        <h1 className="FormHeads">General Details</h1>
        <form className="GeneralForm" action="">
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            name="Name"
            value={person.Name}
            onChange={handleChange}
            id="name"
            required
          />

          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            name="Email"
            value={person.Email}
            onChange={handleChange}
            id="email"
            required
          />
          <label htmlFor="number">Phone-number</label>
          <br />
          <input
            type="number"
            name="Number"
            value={person.Number}
            onChange={handleChange}
            id="number"
            required
          />
          <label htmlFor="summary">Summary</label>
          <br />
          <textarea
            name="Summary"
            value={person.Summary}
            onChange={handleChange}
            id="summary"
            cols="30"
            rows="6"
            required
          ></textarea>

          <button className="genSubBtn" onClick={submitChanges} type="submit">
            Submit
          </button>
        </form>
        <h1 className="FormHeads">Education Qualifications</h1>

        {arr.map(function (e) {
          return (
            <div id={e} key={e}>
              <form action="">
                <label htmlFor="SchoolName">School Name</label>
                <br />
                <input
                  type="text"
                  name="SchoolName"
                  value={e.SchoolName}
                  onChange={changeEdu}
                  id="SchoolName"
                />
                <label htmlFor="TitlStudy">Title Of Study</label>
                <br />
                <input
                  type="text"
                  value={e.TitleEdu}
                  onChange={changeEdu}
                  name="TitleEdu"
                  id="TitleStudy"
                />
                <label htmlFor="from">From</label>
                <br />
                <input
                  type="date"
                  name="FromDate"
                  value={e.FromDate}
                  onChange={changeEdu}
                  id="from"
                />
                <label htmlFor="to">To</label>
                <br />
                <input
                  type="date"
                  name="ToDate"
                  value={e.ToDate}
                  onChange={changeEdu}
                  id="to"
                />
                <button
                  type="button"
                  onClick={delEduDetails}
                  className="EduAddBtnDel"
                >
                  Delete
                </button>
              </form>
            </div>
          );
        })}

        <button className="EduAddBtn" onClick={EduForm} type="submit">
          Add Education Qualifications
        </button>
        <button className="EduAddBtn" type="submit" onClick={SubmitEduDetails}>
          Submit
        </button>

        <h1 className="FormHeads">Practical Experience</h1>
        {perArr.map(function (e) {
          return (
            <div id={e} key={e}>
              <form action="">
                <label htmlFor="CompanyName">Company Name</label>
                <br />
                <input
                  type="text"
                  name="CompanyName"
                  value={e.CompanyName}
                  onChange={changePers}
                  id="CompanyName"
                />
                <label htmlFor="TitlStudy">Position</label>
                <br />
                <input
                  type="text"
                  value={e.PositionTitle}
                  onChange={changePers}
                  name="PositionTitle"
                  id="PositionTitle"
                />
                <label htmlFor="from">From</label>
                <br />
                <input
                  type="date"
                  name="FromDate"
                  value={e.FromDate}
                  onChange={changePers}
                  id="from"
                />
                <label htmlFor="to">To</label>
                <br />
                <input
                  type="date"
                  name="ToDate"
                  value={e.ToDate}
                  onChange={changePers}
                  id="to"
                />
                <button
                  type="button"
                  onClick={delpersDetails}
                  className="EduAddBtnDel"
                >
                  Delete
                </button>
              </form>
            </div>
          );
        })}

        <button
          className="EduAddBtn"
          onClick={setPerformanceForm}
          type="submit"
        >
          Add Practical Experience
        </button>
        <button className="EduAddBtn" type="submit" onClick={SubmitpersDetails}>
          Submit
        </button>
      </div>

      <div className="DisplayedValues">
        <GeneralSectionRender details={people} />
        <EducationalQualifications eduDetails={edu} />
        <PracticalExperience persDetails={dispPers} />
      </div>
    </div>
  );
}

export default GeneralSection;
