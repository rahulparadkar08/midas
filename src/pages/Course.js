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
              {firstTableData.note1}{" "}
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
            {secondTableData.note1 && <li>{secondTableData.note1}</li>}
            {secondTableData.note2 && <li>{secondTableData.note2}</li>}
            {secondTableData.note3 && <li>{secondTableData.note3}</li>}
            {secondTableData.note4 && <li>{secondTableData.note4}</li>}
            {secondTableData.note5 && <li>{secondTableData.note5}</li>}
            {secondTableData.note6 && <li>{secondTableData.note6}</li>}

            <li>
              <b
                style={{
                  color: "var(--red-color)",
                  backgroundColor: "var(--yellow-color)",
                }}
              >
                Note :
              </b>{" "}
              Bus Fee is Excluding according to their respective places.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Course;
