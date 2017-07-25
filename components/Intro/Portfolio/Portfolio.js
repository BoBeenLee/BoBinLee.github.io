import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Divider, Paper} from 'material-ui';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import marked from 'marked';
import Introduction from './Introduction.md';
import Career from './Career.md';
import Production from './Production';
import 'github-markdown-css';
import './Portfolio.scss';

const propTypes = {};

const defaultProps = {};

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      stepIndex: 2,
    };
  }

  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (<div className="markdown-body" dangerouslySetInnerHTML={{__html: marked(Introduction)}}></div>);
      case 1:
          return (<div className="markdown-body" dangerouslySetInnerHTML={{__html: marked(Career)}}></div>);
      case 2:
        return <Production />;
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  };

  componentDidMount() {}

  renderContent = () => {
    const { stepIndex } = this.state;

    const prevButton = (<FlatButton
      label="Back"
      disabled={stepIndex === 0}
      onTouchTap={this.handlePrev}
      style={{ marginRight: 12 }}
    />);
    const nextButton = (<RaisedButton
      label={stepIndex === 2 ? 'Finish' : 'Next'}
      primary
      onTouchTap={this.handleNext}
    />);
    const stepButton = (<div style={{ marginTop: 12 }}>
      {stepIndex > 0 ? prevButton : ''}
      {stepIndex <= 1 ? nextButton : ''}
    </div>);
    const content = this.getStepContent(stepIndex);

    return (<div className="portfolio-content">
      {content}
      <div className="portfolio-button">
        {stepButton}
      </div>
    </div>);
  };

  render() {
    const { loading, stepIndex } = this.state;

    return (
      <div className="portfolio">
        <Stepper activeStep={stepIndex}
                 style={{ width: 700, margin: '0 auto' }}>
          <Step>
            <StepLabel>Introduction</StepLabel>
          </Step>
          <Step>
            <StepLabel>Career</StepLabel>
          </Step>
          <Step>
            <StepLabel>Production</StepLabel>
          </Step>
        </Stepper>
        <ExpandTransition loading={loading} open={true}>
          {this.renderContent()}
        </ExpandTransition>
      </div>
    );
  }
}

Portfolio.propTypes = propTypes;
Portfolio.defaultProps = defaultProps;

export default Portfolio;
