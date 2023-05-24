import { ChangeEvent, useMemo } from "react";
import IQuestion from "../../interfaces/i-question";
import { QUSETION_NAMES } from "../../routes/search-page/search";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { TypeSort } from "../../consts/filters-consts";

interface IQuestionProps {
  answers: IQuestion[];
  question: string;
}

function selectQuestion(dispatch: Dispatch, method: TypeSort) {
  return (event: ChangeEvent<HTMLInputElement>) => {
    const answer: HTMLInputElement = event.target;
    const answerGroup = answer.getAttribute("name") as string;

    dispatch({
      type: "CHANGE_QUESTIONS",
      payload: { [answerGroup]: method },
    });
  };
}

const Question = ({ answers, question }: IQuestionProps) => {
  const dipatch = useDispatch();
  const answersInputs = useMemo(
    () =>
      answers.map(({ name, method }) => (
        <label key={name}>
          <input
            onChange={selectQuestion(dipatch, method)}
            name={QUSETION_NAMES[question]}
            type="radio"
            value={name}
          />
          {` ${name}`}
        </label>
      )),
    []
  );
  return (
    <div className="question">
      <h4>{`${QUSETION_NAMES[question]}:`}</h4>
      <div className="question__variants">{answersInputs}</div>
    </div>
  );
};

export default Question;
