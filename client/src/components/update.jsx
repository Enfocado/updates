import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';
import helpers from '../../../helpers/helpers';

const Update = ({ update, highlightColor }) => {
  const UpdateDiv = styled.div`
    margin: 50px auto;
    padding: 25px;
    width: 50%;
    text-align: center;
    font-family: sans-serif;
    background: white;
    > * {
      color: #2b2727;
    }
    > span:nth-child(1) {
      font-weight: bold;
    }
    > span {
      padding: 0 15px;
      font-size: 14px;
    }
    > h3 {
      display: table;
      margin: 10px auto;
      padding: 0 5px;
      font-family: 'EB Garamond', serif;
      font-size: 36px;
    }
    > p {
      font-size: 16px;
    }
    &:hover {
      cursor: pointer;
      > h3 {
        background: ${highlightColor}
      }
    }
    > div {
      display: inline;
      margin: 15px;
    }
    > div > #backersSpan {
      font-weight: bold;
      font-size: 14px;
    }
    > div > div {
      display: inline;
      margin: 0 2px;
      padding: 2px 5px;
      border-radius: 50%;
      background: black;
      color: white;
      font-size: 10px;
    }
    > p > span {
      text-decoration: underline;
    }
  `;
  const { updateDate, backersOnly, description } = update;

  let desc = null;
  let backersOnlyDesc = null;
  const shortDescription = helpers.cutOffDesc(description);
  if (!backersOnly && shortDescription.length === description.length) {
    desc = (
      <p>
        {description}
      </p>
    );
  } else if (!backersOnly && shortDescription.length !== description.length) {
    desc = (
      <p>
        {shortDescription}
        <span>
          Read more
        </span>
      </p>
    );
  } else {
    backersOnlyDesc = (
      <div>
        <div>
          B
        </div>
        <span id="backersSpan">
          For backers only
        </span>
      </div>
    );
  }

  let comments = null;
  if (update.comments > 0) {
    comments = (
      <span>
        {`${update.comments} comments`}
      </span>
    );
  }

  let likes = null;
  if (update.likes > 0) {
    likes = (
      <span>
        {`${update.likes} likes`}
      </span>
    );
  }

  return (
    <UpdateDiv>
      <span>
        {moment(updateDate).format('MMMM D, YYYY')}
      </span>
      <h3>
        {update.title}
      </h3>
      {desc}
      {comments}
      {likes}
      {backersOnlyDesc}
    </UpdateDiv>
  );
};

Update.propTypes = {
  update: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    comments: PropTypes.number,
    likes: PropTypes.number,
    backers_only: PropTypes.bool,
  }).isRequired,
  highlightColor: PropTypes.string.isRequired,
};

module.exports = Update;
