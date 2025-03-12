import React, { useRef } from "react";
import { FaPrint } from "react-icons/fa"; // Import Print Icon

const PhStudio = () => {
  const printRef = useRef();

  const handlePrint = () => {
    const printContent = printRef.current.innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload(); // Reload to restore the original page
  };

  return (
    <div style={{ padding: "20px", position: "relative" }}>
      {/* Print Icon - Adjusted Lower */}
      <FaPrint
        onClick={handlePrint}
        style={{
          position: "absolute",
          top: "50px", // Yahan value badha di (pehle 10px tha)
          right: "20px",
          cursor: "pointer",
          fontSize: "20px",
          color: "#1e3a8a",
        }}
      />

      {/* PH Studio Content */}
      <div ref={printRef}>
        <h1 className="text-2xl font-bold">PH Studio</h1>
        <p>PH Studio Content Here...</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book...
        </p>
      </div>
    </div>
  );
};

export default PhStudio;
