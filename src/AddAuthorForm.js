import React, {useState} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import './AddAuthorForm.css';
import './bootstrap.min.css';

function AddAuthorForm({match, onAddAuthor}) {
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [books, setBooks] = useState([]);
    const [bookTemp, setBookTemp] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        onAddAuthor({
            name,
            imageUrl,
            books,
            imageSource: 'Wikimedia Commons'
        });
    }

    function handleAddBook(event) {
        event.preventDefault();
        if (bookTemp.length > 0) {
            setBooks(books.concat([bookTemp]));
            setBookTemp('');
        }
    }

    return (
        <div className="AddAuthorForm" >
            <h1>Add Author</h1>
            <form onSubmit={handleSubmit}>
                <div className="AddAuthorForm_input" >
                    <label htmlFor="name" >Name</label>
                    <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} />
                </div>
                <div className="AddAuthorForm_input" >
                    <label htmlFor="imageUrl" >Image URL</label>
                    <input type="text" name="imageUrl" value={imageUrl} onChange={(event) => setImageUrl(event.target.value)} />
                </div>
                <div className="AddAuthorForm_input" >
                    <label htmlFor="bookTemp" >Books</label>
                    {books.map((book) => <p key={book}>{book}</p>)}
                    <input type="text" name="bookTemp" value={bookTemp}  onChange={(event) => setBookTemp(event.target.value)} />
                    <input type="button" onClick={handleAddBook} value="+" />
                </div>
                <input type="Submit" value="Submit" />
            </form>
        </div>
    );
};

function mapDispatchToProps(dispatch, props) {
    return {
        onAddAuthor: (author) => {
            dispatch({type: 'ADD_AUTHOR', author})
            props.history.push('/');
        }
    };
}

//component does not need to read state
export default withRouter(connect(() => {}, mapDispatchToProps)(AddAuthorForm));