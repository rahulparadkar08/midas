import React from "react";

const RefundRules = () => {
  return (
    <>
      <div className="container">
        <h1
          className="headingTitleNormal display-3"
          style={{ padding: "20px 0px" }}
        >
          <span className="headingTitleGradient">{"Fee Refund "}</span>
          {"Rules"}
        </h1>
        <ul>
          <li>
            Refund of fees to enrolled students will be considered within 3
            weeks of the date of deposition of fee only.
          </li>
          <li>All refunds would be made through A/C Payees cheques only.</li>
          <li>
            Refund of fees to enrolled student will be considered within 3 weeks
            of the date of deposition of fee only.
          </li>
          <br />
          <h5>A. General Circumstances</h5>

          <li>
            If a student leave the course before completion, he/she will get
            refund of fee as follows:
            <ul>
              <li>
                <b>
                  Within 1<sup>st</sup> week
                </b>{" "}
                The amount will be refunded after deducting 20% of total fee.
              </li>
              <li>
                <b>
                  Within 2<sup>nd</sup> week
                </b>{" "}
                The amount will be refunded after deducting 40% of total fee.
              </li>
              <li>
                <b>
                  Within 3<sup>rd</sup> week
                </b>{" "}
                The amount will be refunded after deducting 50% of total fee.
              </li>
            </ul>
          </li>
          <li>
            Rules are applicable irrespective to student's attendance in class.
          </li>
          <li>
            Student who takes refund of fee will have to return whole study
            material, test Papers,notes etc. given to him/her till the date of
            refund.
          </li>
          <li>
            There is no refund for Crash Course/Correspondence Course/ Test
            series under any Circumstances.
          </li>
          <li>All Disputes are subjected to chhindwara Jurisdiction.</li>
        </ul>
      </div>
    </>
  );
};

export default RefundRules;
