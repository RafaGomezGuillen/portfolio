import React, { useState, useEffect } from "react";
import { images } from "../../constants";
import { Document, Page, pdfjs } from "react-pdf";
import { AiOutlineDownload } from "react-icons/ai";
import "./Resume.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const maxWidth = 500; 

  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="resume">
      <h1>My Europass CV</h1>
      <div className="resume-button">
        <button target="_blank" style={{ maxWidth: "250px" }} onClick={() => window.open(images.cv)}>
          <span>Full CV</span>{" "}
          <AiOutlineDownload style={{ width: "20px", height: "20px" }} />
        </button>
      </div>

      <div className="resume-container" style={{ height: window.innerWidth < maxWidth ? "604px" : "1529px" }}>
        <Document file={images.cv} className="resume-pdf">
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </div>

      <h1>Europass Diploma Suplement</h1>
      <div className="resume-button">
        <button target="_blank" style={{ maxWidth: "250px" }} onClick={() => window.open(images.europassDiploma)}>
          <span>Full Diploma</span>{" "}
          <AiOutlineDownload style={{ width: "20px", height: "20px" }} />
        </button>
      </div>

      <div className="resume-container" style={{ height: window.innerWidth < maxWidth ? "600px" : "1500px" }}>
        <Document file={images.europassDiploma} className="resume-pdf">
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </div>
    </div>
  );
};

export default Resume;
