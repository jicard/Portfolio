import React, { useEffect } from 'react'
import resumeDoc from "../../assets/resume.pdf"
import "./Resume.css"
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

export default function Resume() {
  return (
    <div className='btnContainer'>
      <div className='workerContainer'>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
      <div className="resumeViewer">
        <Viewer defaultScale={1.2} fileUrl={resumeDoc} />
      </div>
      </Worker>
      </div>
      <a href={resumeDoc} download className="button-74" role="button">Download</a>
    </div>
  )
}
