import { memo } from "react";
import { SEARCH_QUESTIONS } from "../../consts/filters-consts";

import Question from "./question";

const QusetionList = memo(() => {
  return (
    <div className="search__questions">
      <Question answers={SEARCH_QUESTIONS.VOTES_SORT} question="vote" />
      <Question
        answers={SEARCH_QUESTIONS.POPULARITY_SORT}
        question="popularity"
      />
    </div>
  );
});

export default QusetionList;
