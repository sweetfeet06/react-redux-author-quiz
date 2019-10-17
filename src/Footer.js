import React from 'react';
import './AuthorQuiz.css';
import './bootstrap.min.css';

function Footer() {
    return (
        <div id="footer" className="row">
            <div>
                <p className="text-muted credit">
                    All images are from <a href="http://commons.wikimedia.org/wiki/Main_Page">Wikimedia Commons</a> and are in the public domain
                </p>
            </div>
        </div>
    );
}

export default Footer;