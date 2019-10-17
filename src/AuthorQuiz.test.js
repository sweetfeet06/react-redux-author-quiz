import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import Enzyme, {mount, shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

const state = {
  turnData: {
    author: {
      name: 'Charles Dickens',
      imageUrl: 'images/authors/charlesdickens.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['David Copperfield', 'A Tale of Two Cities']
    },
    books: ['The Shinning', 'IT', 'David Copperfield', 'A Tale of Two Cities', 'Hamlet']
  },
  highlight: 'none'
};

describe("Author Quiz", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AuthorQuiz onAnswerSelected={ () => {} }  {...state} />, div);
    //ReactDOM.unmountComponentAtNode(div);
  });

  describe("When no answer has been selected", () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(<AuthorQuiz onAnswerSelected={ () => {} }  {...state} />);
    });

    it("should have no background color", () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('');
    });
  });

  describe("When wrong answer has been selected", () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(<AuthorQuiz onAnswerSelected={ () => {} }  {...(Object.assign({}, state, {highlight: 'wrong'}))} />);
    });

    it("should have red background color", () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('red');
    });
  });

  describe("When correct answer has been selected", () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(<AuthorQuiz onAnswerSelected={ () => {} }  {...(Object.assign({}, state, {highlight: 'correct'}))} />);
    });

    it("should have green background color", () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('green');
    });
  });

  describe("When first answer is selected", () => {
    let wrapper;
    const handleAnswerSelected = jest.fn();

    beforeAll(() => {
      wrapper = mount(<AuthorQuiz onAnswerSelected={ handleAnswerSelected }  {...state} />);
      wrapper.find('.answer').first().simulate('click');
    });

    it("onAnswerSelected should be called", () => {
      expect(handleAnswerSelected).toHaveBeenCalled();
    });

    it("should receive The Shinning", () => {
      expect(handleAnswerSelected).toHaveBeenCalledWith("The Shinning");
    });
  });
});


