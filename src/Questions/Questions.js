import QuestionItem from './QuestionItem';
import './Questions.css';

const Questions = (props) => {
    return(
     <div>
       <ul>
         {props.items.map((problem) =>(
                <QuestionItem
                  key={problem.id}
                  title = {problem.title}
                  url={problem.url}
                  platform={problem.platform}
                />
         ))}
        </ul>  
    </div>
    );    

};

export default Questions;