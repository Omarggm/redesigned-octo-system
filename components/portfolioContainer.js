import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import AboutMe from "./pages/aboutMe";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/resume";

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState("AboutMe");

    const renderPage = () => {
        if (currentPage === "AboutMe") {
            return <AboutMe />;
        }
        if (currentPage === "Contact") {
            return <Contact />;
        }
        if (currentPage === "Portfolio") {
            return <Portfolio />;
        }
        if (currentPage === "Resume") {
            return <Resume />;
        }
        return <AboutMe />;
    }

    const handlePageChange = (page) => setCurrentPage(page);
    
    return (
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}