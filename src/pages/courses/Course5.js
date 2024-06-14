import React from "react";
import Course from "../Course";

const firstTableData = {
  classCourse: "X Foundation",
  courseFee: "₹ 18,644",
  gst: "₹ 3,356",
  totalFee: "₹ 22,000",
  oneShotFee: "₹ 21,000",
  note1: "[ ₹ 1000 Discount - 8, 9, 10th ( Foundation Batch) ]",
};

const secondTableData = {
  classCourse: "X Foundation",
  courseFee: "₹ 18,644",
  gst: "₹ 3,356",
  firstInstallment: "₹ 11,000",
  secondInstallment: "₹ 11,000",
  totalFee: "₹ 22,000",
  note1:
    "If Student get 80% Marks in Midas Enterance Cum Scholarship Test then He/She will get 30% Scholarship on Total Fee.",
  note2:
    "If Student get 90% Marks in Midas Enterance Cum Scholarship Test then He/She will get 50% Scholarship on Total Fee.",
  note3:
    "If Student get More then 90% Marks in 10thBoard (CBSE/STATE Board) then He/She will get Discount of ₹ 5000 on Total Fee.",
  note4:
    "If Student get More then 90% Marks in 10thBoard (CBSE/STATE Board) will get Only one benefit on above Discount.",
  note5: "Admission form fee (Including Midas Kit ) Charge ₹ 1000",
  note6:
    "Caution/Security Money for Class 8th,9th,10th - ₹ 5,000 (refundable after no dues clearance.)",
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
