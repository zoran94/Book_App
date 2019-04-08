import React from 'react';


const Footer = () => {
    const color = {
        backgroundColor: "#ee6e73"
    }
    return (
        <footer className="page-footer">
            <div className="container">

                <div className="footer-copyright center" style={color}>
                    <div className="container">
                        © {new Date().getFullYear()} Copyright By GonzaloRapido
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;