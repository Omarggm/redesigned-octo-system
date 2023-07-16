import React from "react";

export default function ResumeSection() {
  const proficiencies = ["Javascript", "React", "HTML", "Node.js"];

  return (
    <div className="resume-section">
      <h2>Resume</h2>
      <p>Download my resume:</p>
      <p>Comming Soon!</p>
      <h3>Proficiencies:</h3>
      <ul>
        {proficiencies.map((proficiency, index) => (
          <li key={index}>{proficiency}</li>
        ))}
      </ul>
    </div>
  );
}
