import React from 'react';

interface BigTextProps {
  text: string;
}

interface BigTextState {
  previousText: string;
}

export default class BigText extends React.Component<BigTextProps, BigTextState> {

  state: BigTextState = {
    previousText: ''
  }

  componentDidUpdate(prevProps: BigTextProps) {
    if (this.props !== prevProps) {
      this.setState({
        previousText: prevProps.text
      });
    }
  }
  render() {
    return (
      <div key={+new Date()} className="big-text-container">
        <div className="big-text-fade-out">
          {this.state.previousText}
        </div>
        <div className="big-text-fade-in">
          {this.props.text}
        </div>
      </div>
    );
  }
}
