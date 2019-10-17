import React from 'react';
import './AuthorQuiz.css';
import './bootstrap.min.css';

function Book({title, onClick}) {
    return (
        <div className="answer" onClick={() => {onClick(title)}}>
            <h4>{title}</h4>
        </div>
    );
}

export default Book;