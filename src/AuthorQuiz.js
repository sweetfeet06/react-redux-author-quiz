import React from 'react';
import './AuthorQuiz.css';
import './bootstrap.min.css';
import Hero from './Hero';
import Turn from './Turn';
import Continue from './Continue';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {
        turnData: state.turnData,
        highlight: state.highlight
    };
}

function mapDispatchToProps(dispatch) {

    return {
        onAnswerSelected: (answer) => {
            dispatch({type: 'ANSWER_SELECTED', answer});
        },
        onContinue: () => {
            dispatch({type: 'CONTINUE'});
        }
    };
}

const AuthorQuiz = connect(mapStateToProps, mapDispatchToProps) (function({turnData, highlight, onAnswerSelected, onContinue}) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData}
            highlight={highlight}
            onAnswerSelected={onAnswerSelected}/>
      <Continue
          show = {highlight === 'correct'}
          onContinue = {onContinue} />
        <p><Link to = {"/add"} >Add Author</Link></p>
      <Footer />
    </div>
  );
})

export default AuthorQuiz;
