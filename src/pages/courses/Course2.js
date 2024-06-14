import React from "react";
import Course from "../Course";

const firstTableData = {
  classCourse: "XII Targte/Ultimate",
  courseFee: "₹ 76,271",
  gst: "₹ 13,729",
  totalFee: "₹ 90,000",
  oneShotFee: "₹ 85,000",
  note1: "[ ₹ 5000 Discount - XI & XII ( JEE/NEET ) ]",
};

const secondTableData = {
  classCourse: "XII Targte/Ultimate",
  courseFee: "₹ 76,271",
  gst: "₹ 13,729",
  firstInstallment: "₹ 45,000",
  secondInstallment: "₹ 45,000",
  totalFee: "₹ 90,000",
  note1: "Admission form fee (Including Midas Kit ) Charge ₹ 1000",
  note2:
    "Caution/Security Money for Class 11th & 12th ₹ 10,000 (refundable after no dues clearance.)",
  note3: "",
  note4: "",
  note5: "",
  note6: "",
};

const Course2 = () => {
  return (
    <div>
      <Course
        firstTableData={firstTableData}
        secondTableData={secondTableData}
      />
    </div>
  );
};

export default Course2;
