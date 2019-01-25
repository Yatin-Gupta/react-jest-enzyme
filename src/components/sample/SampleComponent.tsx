import * as React from 'react';

export interface ISampleComponentProps {}

export interface ISampleComponentState {
  counter: number;
}

class SampleComponent extends React.Component<
  ISampleComponentProps,
  ISampleComponentState
> {
  public state = {
    counter: 0
  };
  public render() {
    return (
      <React.Fragment>
        <button onClick={this.increaseCounter}>Increment Counter</button>
        <button onClick={this.decreaseCounter}>Decrement Counter</button>
        <p>{this.state.counter}</p>
      </React.Fragment>
    );
  }

  private increaseCounter = (e: React.FormEvent<HTMLElement>) => {
    this.setState({ counter: this.state.counter + 1 });
  };

  private decreaseCounter = (e: React.FormEvent<HTMLElement>) => {
    this.setState({ counter: this.state.counter - 1 });
  };
}

export default SampleComponent;
