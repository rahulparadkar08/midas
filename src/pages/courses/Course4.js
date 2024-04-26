import React from "react";
import Course from "../Course";

const firstTableData = {
  classCourse: "IX Foundation",
  courseFee: "₹ 16,949",
  gst: "₹ 3051",
  totalFee: "₹ 20,000",
  oneShotFee: "₹ 19,000",
};

const secondTableData = {
  classCourse: "IX Foundation",
  courseFee: "₹ 16,949",
  gst: "₹ 3,051",
  firstInstallment: "₹ 10,000",
  secondInstallment: "₹ 10,000",
  totalFee: "₹ 20,000",
};

const Course4 = () => {
  return (
    <div>
      <Course
        firstTableData={firstTableData}
        secondTableData={secondTableData}
      />
    </div>
  );
};

export default Course4;
