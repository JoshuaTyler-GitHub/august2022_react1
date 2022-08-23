import React from 'react';

// components
import Button from './components/Button';
import Clock from './components/Clock';
import DropDown from './components/DropDown';
import Welcome from './components/Welcome';

// styles
import './styles/bootstrap.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClockActive: Boolean(true),
    };
  }

  render() {
    const { state } = this;
    const { isClockActive } = state;

    return (
      <div className='App'>
        <Welcome name={'you person'} />
        {isClockActive && <Clock />}
        <Button />
        <Button color={'secondary'} />
        <Button color={'warning'} />
        <Button color={'success'} />
        <Button color={'danger'} />
        <Button color={'info'} />
        <Button color={'dark'} />
        <Button color={'light'} />
        <DropDown/>
      </div>
    );
  }

  toggleClock = () => {
    const { state } = this;
    const { isClockActive } = state;
    this.setState({ isClockActive: !isClockActive });
  };
}
export default App;
