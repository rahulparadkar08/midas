import React from "react";
import Course from "../Course";

const firstTableData = {
  classCourse: "X Foundation",
  courseFee: "₹ 18,644",
  gst: "₹ 3,356",
  totalFee: "₹ 22,000",
  oneShotFee: "₹ 21,000",
};

const secondTableData = {
  classCourse: "X Foundation",
  courseFee: "₹ 18,644",
  gst: "₹ 3,356",
  firstInstallment: "₹ 11,000",
  secondInstallment: "₹ 11,000",
  totalFee: "₹ 22,000",
};

const Course5 = () => {
  return (
    <div>
      <Course
        firstTableData={firstTableData}
        secondTableData={secondTableData}
      />
    </div>
  );
};

export default Course5;
