import React from "react";

function Footer() {
  return (
    <>
      <div className="footer" style={{ marginTop: "100px" }}>
        <p
          style={{
            color: "#feb126",
            fontWeight: 700,
            marginBottom: 0,
            fontSize: "14px",
          }}
        >
          <a href style={{ color: "#feb126" }}>
            FAQ
          </a>{" "}
          |{" "}
          <a href style={{ color: "#feb126" }}>
            Contact Us
          </a>
        </p>
        <p
          style={{
            color: "rgb(146, 146, 146)",
            fontWeight: 600,
            marginBottom: 0,
            fontSize: "14px",
          }}
        >
          © All copy rights reserved by Edelweiss Asset Management Ltd.
        </p>
        <p
          style={{
            color: "rgb(146, 146, 146)",
            fontWeight: 300,
            fontSize: "12px",
          }}
        >
          Disclaimer: This software/weblink is intendedsoley for the use of
          distributors of Edelweiss Group. An unauthorized use and dissemination
          of database(s) is strictly prohibited.
        </p>
      </div>
    </>
  );
}

export default Footer;
