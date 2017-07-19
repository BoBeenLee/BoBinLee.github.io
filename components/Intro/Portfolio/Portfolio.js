import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Divider, Paper} from 'material-ui';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import './Portfolio.scss';
import Introduction from './Introduction';
import Career from './Career';
import Production from './Production';

const propTypes = {};

const defaultProps = {};

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      finished: false,
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
        return <Introduction />;
      case 1:
        return <Career />;
      case 2:
        return <Production />;
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  componentDidMount() {}

  renderContent = () => {
    const { finished, stepIndex } = this.state;
    const contentStyle = { margin: '0 16px' };

    return (<div style={contentStyle}>
      {finished ? (
        <p>
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
              this.setState({ stepIndex: 0, finished: false });
            }}
          >
            Click here
          </a> to reset the example.
        </p>
      ) : (
        <div>
          <p>{this.getStepContent(stepIndex)}</p>
          <div style={{ marginTop: 12 }}>
            <FlatButton
              label="Back"
              disabled={stepIndex === 0}
              onTouchTap={this.handlePrev}
              style={{ marginRight: 12 }}
            />
            <RaisedButton
              label={stepIndex === 2 ? 'Finish' : 'Next'}
              primary={true}
              onTouchTap={this.handleNext}
            />
          </div>
        </div>
      )}
    </div>);
  }

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
