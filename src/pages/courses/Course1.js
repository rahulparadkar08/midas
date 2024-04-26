import React from "react";
import Course from "../Course";

const firstTableData = {
  classCourse: "XI Fresher",
  courseFee: "₹ 76,271",
  gst: "₹ 13,729",
  totalFee: "₹ 90,000",
  oneShotFee: "₹ 85,000",
};

const secondTableData = {
  classCourse: "XI Fresher",
  courseFee: "₹ 76,271",
  gst: "₹ 13,729",
  firstInstallment: "₹ 45,000",
  secondInstallment: "₹ 45,000",
  totalFee: "₹ 90,000",
};

const Course1 = () => {
  return (
    <div>
      <Course
        firstTableData={firstTableData}
        secondTableData={secondTableData}
      />
    </div>
  );
};

export default Course1;
