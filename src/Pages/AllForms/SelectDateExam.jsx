import React, { useState } from "react";

const SelectDateExam = () => {
  // State to store selected dates for each row
  const [dates, setDates] = useState(Array(4).fill(""));

  // Handle date change for a specific row
  const handleDateChange = (index, event) => {
    const newDates = [...dates];
    newDates[index] = event.target.value;
    setDates(newDates);
  };
  return (
    <>
      <div>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <h4 htmlFor="select course">Select Course</h4>
              <select className="form-control" name="" id="">
                <option value="course1">course1</option>
                <option value="course2">course2</option>
                <option value="course3">course3</option>
                <option value="course4">course4</option>
                <option value="course5">course5</option>
                <option value="course6">course6</option>
                <option value="course7">course7</option>
              </select>
            </div>
          </div>
          <h4 className="mb-4 mt-5">Select Examination Date</h4>
          <table className="table table-bordered">
            <thead>
              <tr className="bg-primary text-white">
                <th scope="col">S. No.</th>
                <th scope="col">Exam Title</th>
                <th scope="col">Exam Date</th>
                <th scope="col">Exam Duration</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4].map((num, index) => (
                <tr key={num} className="bg-light">
                  <th scope="row">{num}</th>
                  <td>Exam {num}</td>
                  <td>
                    {dates[index] ? (
                      <span>{dates[index]}</span>
                    ) : (
                      <input
                        type="date"
                        className="form-control"
                        onChange={(event) => handleDateChange(index, event)}
                      />
                    )}
                  </td>
                  <td>2 Hours</td>
                  <td>
                    <button className="btn btn-warning text-white px-3">
                      Select
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-center mt-4">
            <button className="btn btn-warning px-4 py-2">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectDateExam;
