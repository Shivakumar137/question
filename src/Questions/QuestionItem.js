
import './QuestionItem.css';

const QuestionItem = props =>{
    return(
    <div className="question-item">
      <div className="question-item__title">{props.title}</div>
      <div>
        <h2><a href={props.url}>solve</a></h2>
        <div className="question-item__platform">{props.platform}</div>
      </div>
    </div>
    );
};

export default QuestionItem;