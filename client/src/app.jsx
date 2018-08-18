import './styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import shortid from 'shortid';
import moment from 'moment';
import styled from 'styled-components';
import Update from './components/update.jsx';
import Milestone from './components/milestone.jsx';
import Divider from './components/divider.jsx';
import helpers from '../../helpers/helpers';

const sampleData = require('../../sampleData.js');

const AppDiv = styled.div`

`;

const Timeline = styled.div`
  position: absolute;
  margin: 50px auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 1px;
  background: #eee;
  z-index: -1;
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: sampleData[0],
    };
  }

  componentWillMount() {
    axios.get('/projects/21/updates')
      .then((response) => {
        response.data.dateCreated = new Date(response.data.dateCreated);
        response.data.endingDate = new Date(response.data.endingDate);
        response.data.updates.forEach((update) => {
          update.updateDate = new Date(update.updateDate);
          update.backersOnly = !!update.backersOnly;
        });
        this.setState({
          project: response.data,
        });
      }).catch((error) => {
        throw error;
      });
  }

  render() {
    const { project } = this.state;
    const reversedUpdates = project.updates.slice(0).reverse();
    const updates = reversedUpdates.map((update, i) => {
      let newRender = false;
      if (i === 0) newRender = true;
      return (
        <Update
          key={shortid.generate()}
          update={update}
          highlightColor={helpers.getColor(newRender)}
        />
      );
    });
    for (let i = 0; i < updates.length; i += 1) {
      if (updates[i].props.update.updateDate < new Date()
      && updates[i].props.update.updateDate < project.endingDate) {
        let updateProp = {};
        if (i === 0) {
          const { update } = updates[0].props;
          updateProp = update;
        } else {
          const { update } = updates[i - 1].props;
          updateProp = update;
        }
        updates.splice(i, 0, <Milestone
          key={shortid.generate()}
          project={project}
          update={updateProp}
        />);
        break;
      }
    }

    for (let i = 0; i < updates.length; i += 1) {
      // puts divider after milestone if milestone is the most recent update
      if (i === 0 && updates[i].props.project
        && (updates[i + 1].props.update.updateDate.getMonth()
        < updates[i].props.project.endingDate.getMonth()
        || updates[i + 1].props.update.updateDate.getFullYear()
        < updates[i].props.project.endingDate.getFullYear())) {
        updates.splice(i + 1, 0, <Divider
          key={shortid.generate()}
          month={moment(updates[i].props.update.updateDate).format('MMM YYYY')}
        />);
      // puts divider before updates if they are earlier in time by a month or year
      } else if (i > 0 && !updates[i].props.month && !updates[i - 1].props.month
        && (updates[i].props.update.updateDate.getMonth()
        < updates[i - 1].props.update.updateDate.getMonth()
        || updates[i].props.update.updateDate.getFullYear()
        < updates[i - 1].props.update.updateDate.getFullYear())) {
        updates.splice(i, 0, <Divider
          key={shortid.generate()}
          month={moment(updates[i].props.update.updateDate).format('MMM YYYY')}
        />);
      // puts divider before milestone if its earlier in time by a month or year
      } else if (i < updates.length - 1 && updates[i + 1].props.project
        && !updates[i].props.month && !updates[i + 1].props.month
        && (updates[i].props.update.updateDate.getMonth()
        > updates[i + 1].props.project.endingDate.getMonth()
        || updates[i].props.update.updateDate.getFullYear()
        > updates[i + 1].props.project.endingDate.getFullYear())) {
        updates.splice(i + 1, 0, <Divider
          key={shortid.generate()}
          month={moment(updates[i + 1].props.project.endingDate).format('MMM YYYY')}
        />);
      }
    }

    return (
      <AppDiv>
        {updates}
        <Milestone project={project} />
        <Timeline />
      </AppDiv>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#updates'));
