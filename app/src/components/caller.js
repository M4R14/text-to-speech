import React from "react"

import AppConfig from './../app-config';
import('./caller.scss');

class Caller extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inputText: '',
        number: [],
        pitch: 0,
        rate: 0,
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }
  
    componentWillMount() {
      this.setState({
        pitch: AppConfig.getPitch(),
        rate: AppConfig.getRate(),
      })
    }

    componentDidMount(){
        document.getElementById("inputText").focus(); 
    }
  
  
    handleChange(event) {
      const elem = event.target;
      this.setState({ inputText: elem.value });
    }
  
    handleKeyPress(event) {
      const key = event.key;
      console.log(event.key, event);
      if (key == 'Enter' && this.state.inputText != '') {
        const inputText = Number(this.state.inputText);
        let nextNumber = this.state.number;
        if (inputText > 0) {
          if (nextNumber.length > 5) {
            delete nextNumber[nextNumber.length -1];
          }
          nextNumber = [
            inputText,
            ...nextNumber.filter(nn => nn != inputText),
          ];
        } else {
          nextNumber = nextNumber.filter(nn => nn != (inputText*-1));
        }
  
        this.setState({
          inputText: '',
          number: nextNumber,
        }, () => {
          if (inputText > 0) {
            let txtNum = 'คิวที่, ' + nextNumber[0];
            // for (let index = 0; index < nextNumber[0].toString().length; index++) {
            //   txtNum += nextNumber[0].toString()[index]+', '
            // }
            
            const synth = window.speechSynthesis;
            const utterThis = new SpeechSynthesisUtterance(txtNum);
            utterThis.lang = 'th-TH';
            utterThis.pitch = this.state.pitch;
            utterThis.rate = this.state.rate;
            synth.speak(utterThis);

            const utterThis2 = new SpeechSynthesisUtterance('ค่ะ');
            utterThis2.lang = 'th-TH';
            utterThis2.pitch = this.state.pitch;
            utterThis2.rate = this.state.rate - 0.2;
            synth.speak(utterThis2);
          }
        });
      }
    }
  
    render() {
      return (
        <div className="caller">
          <div className="queue-number" >
            <h1 className="title">Queue Number</h1>
            <h1 className="number">{this.state.number[0]}</h1>
          </div>
          <div className="called-queue" >
            <h2 className="title" >Called Queue</h2>
            <div className="called-box" >
                { this.state.number.filter((n, index) => index > 0 ).map(n =>
                    <div key={n} className="number" >{n}</div>
                )}
            </div>
          </div>
          <div className="input-number" >
            <input
                id="inputText"
                onKeyPress={this.handleKeyPress}
                onChange={this.handleChange}
                value={this.state.inputText}
            />
          </div>
        </div>
      );
    }
}

export default Caller;