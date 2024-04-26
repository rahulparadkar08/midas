import React from "react";
import Course from "../Course";

const firstTableData = {
  classCourse: "VIII Foundation",
  courseFee: "₹ 15,254",
  gst: "₹ 2,746",
  totalFee: "₹ 18,000",
  oneShotFee: "₹ 17,000",
};

const secondTableData = {
  classCourse: "VIII Foundation",
  courseFee: "₹ 15,254",
  gst: "₹ 2,746",
  firstInstallment: "₹ 9,000",
  secondInstallment: "₹ 9,000",
  totalFee: "₹ 18,000",
};

const Course3 = () => {
  return (
    <div>
      <Course
        firstTableData={firstTableData}
        secondTableData={secondTableData}
      />
    </div>
  );
};

export default Course3;
