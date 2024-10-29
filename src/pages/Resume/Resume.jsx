import React, { useState, useEffect } from "react";
import { images } from "../../constants";
import { Document, Page, pdfjs } from "react-pdf";
import { AiOutlineDownload } from "react-icons/ai";
import "./Resume.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Resume = () => {
  const maxWidth = 500;

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="resume">
      <h1>My CV</h1>
      <div className="resume-button">
        <button target="_blank" style={{ maxWidth: "250px" }} onClick={() => window.open(images.cv)}>
          <span>Full CV</span>
          <AiOutlineDownload style={{ width: "20px", height: "20px" }} />
        </button>
      </div>

      <div className="resume-container" style={{ height: width < maxWidth ? "604px" : "1529px" }}>
        <Document file={images.cv} className="resume-pdf">
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </div>
    </div>
  );
};

export default Resume;
