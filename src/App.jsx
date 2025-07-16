import { useState } from "react";

const certifs = [
  "course-5.pdf",
  "course-6.pdf",
  "course-7.pdf",
  "course-8.pdf",
  "course-9.pdf",
  "course-10.pdf",
  "course-11.pdf",
  "course-12.pdf",
  "course-13.pdf",
];

function App() {
  return (
    <div>
      <div style={{ marginBottom: "24px", color: "#555", fontStyle: "italic" }}>
        Note: Certifications 1 to 4 are free and available on YouTube, so they do not have certification documents.
      </div>
       <div style={{ marginBottom: "24px", color: "#555", fontStyle: "italic" }}>
        Platform's official website:: <a href="https://programmingadvices.com" target="_blank" rel="noopener noreferrer">programmingadvices.com</a>
      </div>
      <div className="certif-grid">
        {certifs.map((file) => (
          <div className="certif-item" key={file}>
            <iframe
              src={`/certifs/${file}`}
              title={file}
              width="100%"
              height="400px"
              style={{ border: "1px solid #ccc", borderRadius: "8px" }}
            />
            <div className="certif-label">{file}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
