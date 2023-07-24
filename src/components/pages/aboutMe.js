import React from "react";
import Image3 from "../../assets/images/PortfolioHeadshot.jpg";

export default function AboutMe() {
  return (
    <div className="container">
      <h1>About Me</h1>
      <p>
        Omar Garcia is a passionate coder and aspiring full-stack developer
        based in Bakersfield, CA. With a diverse professional background,
        including experience in various industries, Omar brings a unique
        perspective to his coding projects.
      </p>
      <br />
      <p>
        Prior to pursuing his passion for coding, Omar gained valuable
        experience in different roles across multiple industries. He held
        positions that required strong leadership, organizational skills, and
        customer service excellence. Through his work experiences, he developed
        a versatile skill set that complements his coding journey.
      </p>
      <br />
      <p>
        Omar's diverse background includes managerial roles where he honed his
        leadership and organizational skills. He also worked in customer-facing
        roles that demanded exceptional service delivery and relationship
        building. Additionally, he has experience in technical positions that
        showcased his problem-solving abilities and attention to detail.
        Currently on his path to becoming a proficient full-stack developer,
        Omar is enrolled in a six-month bootcamp. This intensive program allows
        him to sharpen his coding skills and expand his knowledge in various
        programming languages and technologies.
      </p>
      <br />
      <p>
        Driven by his passion for both architecture and coding, Omar aims to
        merge his creative vision and technical abilities to develop innovative
        applications that seamlessly integrate aesthetics and functionality.
      </p>

      <img src={Image3} alt="Omar Garcia" height="15%" width="15%" />
    </div>
  );
}
