import React from "react";
import "../assets/styles/footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <span className="text-muted">© 2023</span>
                <div className="social-links">
                    <a
                        href="https://github.com/Omarggm"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/omar-garcia-3b8a43101/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}
