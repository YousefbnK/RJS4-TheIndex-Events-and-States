import React from "react";

import Row from "./Row";

const AuthorDetail = props => {
  const author = props.author;
  const authorName = `${author.first_name} ${author.last_name}`;
  const book = author.books.map(book => <Row book={book} author={author} />);

  return (
    <div className="author col-xs-10">
      <div>
        <h3>{authorName}</h3>
        <img
          src={props.author.imageUrl}
          className="img-thumbnail"
          alt={authorName}
        />
      </div>
      <table className="mt-3 table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Authors</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>{book}</tbody>
      </table>
    </div>
  );
};

export default AuthorDetail;
