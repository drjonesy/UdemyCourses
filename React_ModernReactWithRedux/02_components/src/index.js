import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author={Faker.name.firstName()}
          postDate="Today at 4:45 PM"
          avatar={Faker.image.avatar()}
          content="Most amazing scenary!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={Faker.name.firstName()}
          postDate="Today at 2:00 AM"
          avatar={Faker.image.avatar()}
          content="I can't believe it's not butter!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={Faker.name.firstName()}
          postDate="Yesterday at 5:00 PM"
          avatar={Faker.image.avatar()}
          content="I never imagined dragons..."
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
