import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bulb from '../Bulb';
import Idea from '../Idea';
import NoIdeas from '../NoIdeas';
import './index.css';

class Ideas extends Component {
  static propTypes = {
    "ideas": PropTypes.array,
    "updateIdea": PropTypes.func,
    "deleteIdea": PropTypes.func,
  };

  hasIdeas() {
    return ( Object.keys( this.props.ideas ).length > 0 );
  }

  render() {
    return (
      <main className="cxsp-ideas">
        <div hidden={ !this.hasIdeas() }>
          <table className="cxsp-table">
            <thead>
              <tr>
                <th className="cxsp-table-heading cxsp-ideas__column-content" scope="col">
                  <span className="cxsp-visually-hidden">Content</span>
                </th>
                <th className="cxsp-table-heading cxsp-ideas__column-impact" scope="col">
                  Impact
                </th>
                <th className="cxsp-table-heading cxsp-ideas__column-ease" scope="col" scope="col">
                  Ease
                </th>
                <th className="cxsp-table-heading cxsp-ideas__column-confidence" scope="col" scope="col">
                  Confidence
                </th>
                <th className="cxsp-table-heading cxsp-ideas__column-average" scope="col">
                  <abbr>Avg.</abbr>
                </th>
                <th className="cxsp-table-heading cxsp-ideas__column-actions" scope="col">
                  <span className="cxsp-visually-hidden">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              { this.props.ideas.map( ( idea, key ) => {
                // var idea = this.props.ideas[key];
                // console.log(key);
                return (
                  <Idea
                    key={ idea.id }
                    index={ key }
                    idea={ idea }
                    finishIdea={ this.props.finishIdea }
                    addIdea={ this.props.addIdea }
                    updateIdea={ this.props.updateIdea }
                    deleteIdea={ this.props.deleteIdea }
                  />
                );
              } ) }
            </tbody>
          </table>
        </div>
        <NoIdeas hidden={ this.hasIdeas() } />
      </main>
    );
  }
}

export default Ideas;
