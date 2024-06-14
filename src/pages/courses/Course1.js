import React from "react";
import Course from "../Course";

const firstTableData = {
  classCourse: "XI Fresher",
  courseFee: "₹ 76,271",
  gst: "₹ 13,729",
  totalFee: "₹ 90,000",
  oneShotFee: "₹ 85,000",
  note1: "[ ₹ 5000 Discount - XI & XII ( JEE/NEET ) ]",
};

const secondTableData = {
  classCourse: "XI Fresher",
  courseFee: "₹ 76,271",
  gst: "₹ 13,729",
  firstInstallment: "₹ 45,000",
  secondInstallment: "₹ 45,000",
  totalFee: "₹ 90,000",
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
    "Caution/Security Money for Class 11th & 12th ₹ 10,000 (refundable after no dues clearance.)",
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
