import React from "react"
import cookie from 'react-cookies'

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
        pitch: Number(cookie.load('pitch')) || 0,
        rate: Number(cookie.load('rate')) || 0,
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
            let txtNum = 'คิวที่, '
            for (let index = 0; index < nextNumber[0].toString().length; index++) {
              txtNum += nextNumber[0].toString()[index]+', '
            }
            txtNum += 'ค่ะ'
            const synth = window.speechSynthesis;
            const utterThis = new SpeechSynthesisUtterance(txtNum);
            utterThis.lang = 'th-TH';
            utterThis.pitch = this.state.pitch;
            utterThis.rate = this.state.rate;
            synth.speak(utterThis);
          }
        });
      }
    }
  
    render() {
      return (
        <div style={{ paddingTop: '5em', paddingBottom: '1em' }}>
          <div style={{ textAlign: 'center', color: 'white' }} >
            <h1 style={{ fontSize: '2em' }}>Queue Number</h1>
            <h1 style={{ fontSize: '15rem', minHeight: '17rem' }}>
                {this.state.number[0]}
            </h1>
          </div>
          <div 
            style={{
                color: 'white',
                backgroundColor: '#ffffff5c',
                padding: '20px 15px 5px',
                margin: '0 20px',
                borderRadius: '20px 20px',
            }}
          >
            <h2 style={{ marginBottom: '7px', marginLeft: '22px', fontWeight: '500' }} >
                Called Queue
            </h2>
            <div style={{ fontSize: '2.7rem', minHeight: '4rem', display: 'flex', flexWrap: 'wrap', fontFamily: 'system-ui', }} >
                { this.state.number.map(n =>
                    <div key={n} style={{ padding: '5px 20px', margin: '5px 0 20px 0px' }} >{n}</div>
                )}
            </div>
          </div>
          <div style={{ textAlign: 'right', paddingTop: '2em', margin: '0 20px', }} >
            <input
                id="inputText"
                style={{
                    width: '3em',
                    borderRadius: '5px 5px',
                    textAlign: 'center',
                    fontSize: '2em',
                    fontFamily: 'system-ui',
                }}
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