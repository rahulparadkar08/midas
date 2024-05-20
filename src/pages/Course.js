import React from "react";
import Table from "react-bootstrap/Table";
import "./Course.css";
const Course = ({ firstTableData, secondTableData }) => {
  return (
    <>
      <div className="container">
        <h1
          className="headingTitleNormal display-5"
          style={{ padding: "20px" }}
        >
          <span className="headingTitleGradient">{"Course Name : "}</span>
          {`${firstTableData.classCourse} ( 2024 - 25 ) `}
        </h1>
        <div
          style={{
            backgroundColor: "var(--light-yellow-color)",
            padding: "20px 15px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "var(--red-color)",
              padding: "15px",
            }}
          >
            Fees With One Time Installment ( With Discount )
          </h2>
          <div>
            <Table responsive="sm" bordered>
              <thead>
                <tr className="heading-row">
                  <th>Class/Course</th>
                  <th>Course Fee</th>
                  <th>18% G.S.T.</th>
                  <th>Total Fee</th>
                  <th>One Shot Fee (Read Note)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{firstTableData.classCourse}</td>
                  <td>{firstTableData.courseFee}</td>
                  <td>{firstTableData.gst}</td>
                  <td>{firstTableData.totalFee}</td>
                  <td>{firstTableData.oneShotFee}</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <ul>
            <li>
              {" "}
              <b
                style={{
                  color: "var(--red-color)",
                  backgroundColor: "var(--yellow-color)",
                }}
              >
                Note :
              </b>{" "}
              [ ₹ 5000 Discount - XI & XII ( JEE/NEET ) ] and [ ₹ 1000 Discount
              - 8, 9, 10<sup>th</sup> ( Foundation Batch) ]{" "}
              <b
                style={{
                  color: "var(--red-color)",
                  backgroundColor: "var(--yellow-color)",
                }}
              >
                (At The time of Admission)
              </b>
            </li>
          </ul>

          <h2
            style={{
              textAlign: "center",
              color: "var(--red-color)",
              padding: "15px",
            }}
          >
            Fees With Two Time Installment
          </h2>
          <div>
            <Table responsive="sm" bordered>
              <thead>
                <tr className="heading-row">
                  <th>
                    <td>Class/Course</td>
                    <td></td>
                  </th>
                  <th>
                    <td>Course Fee</td>
                    <td></td>
                  </th>
                  <th>
                    <td>18% G.S.T.</td>
                    <td></td>
                  </th>
                  <th>
                    <div>
                      1<sup>st</sup> Installment
                    </div>
                    <div id="subTitle">( At the time of Admission )</div>
                  </th>
                  <th>
                    <div>
                      2<sup>nd</sup> Installment
                    </div>
                    <div id="subTitle">( After 3 Month of Admission)</div>
                  </th>
                  <th>
                    <div>Total Fee</div>
                    <div id="subTitle">( Including 18% GST )</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{secondTableData.classCourse}</td>
                  <td>{secondTableData.courseFee}</td>
                  <td>{secondTableData.gst}</td>
                  <td>{secondTableData.firstInstallment}</td>
                  <td>{secondTableData.secondInstallment}</td>
                  <td>{secondTableData.totalFee}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <ul>
            <li>
              If Student get 80% Marks in Midas Enterance Cum Scholarship Test
              then He/She will get 30% Scholarship on Total Fee.
            </li>
            <li>
              If Student get 90% Marks in Midas Enterance Cum Scholarship Test
              then He/She will get 50% Scholarship on Total Fee.
            </li>
            <li>
              If Student get More then 90% Marks in 10<sup>th</sup>Board
              (CBSE/STATE Board) then He/She will get Discount of ₹ 5000 on
              Total Fee.
            </li>
            <li>
              If Student get More then 90% Marks in 10<sup>th</sup>Board
              (CBSE/STATE Board) will get Only one benefit on above Discount.
            </li>
            <li>
              Registration Charge for Classes - 8<sup>th</sup>,9<sup>th</sup>,10
              <sup>th</sup> ₹ 3000 and 11<sup>th</sup> ₹ 10,000 (Non-Refundable)
            </li>
            <li>Admission form fee (Including Midas Kit ) Charge ₹ 1000 </li>
            <li>
              Caution/Security Money for Class 8<sup>th</sup>,9<sup>th</sup>,10
              <sup>th</sup> - ₹ 5,000 and 11<sup>th</sup> & 12<sup>th</sup> ₹
              10,000 (Refundable)
            </li>
            <li>
              <b
                style={{
                  color: "var(--red-color)",
                  backgroundColor: "var(--yellow-color)",
                }}
              >
                Note :
              </b>{" "}
              Bus Fee is Excluding according to the respective places.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Course;
