import React from "react"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <Caller />
  </Layout>
)

class Caller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      number: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
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
        nextNumber = [
          inputText,
          ...nextNumber.filter(nn => nn != inputText),
        ]
      } else {
        nextNumber = nextNumber.filter(nn => nn != (inputText*-1));
      }

      this.setState({
        inputText: '',
        number: nextNumber,
      }, () => {
        if (inputText > 0) {
          let txtNum = 'เชิญหมายเลข, '
          for (let index = 0; index < nextNumber[0].toString().length; index++) {
            txtNum += nextNumber[0].toString()[index]+', '
          }
          txtNum += 'ค่ะ'
          const synth = window.speechSynthesis;
          const utterThis = new SpeechSynthesisUtterance(txtNum);
          utterThis.lang = 'th-TH';
          utterThis.pitch = 1;
          utterThis.rate = 0.8;
          synth.speak(utterThis);
        }
      });
    }
  }

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <div style={{width: '80%', textAlign: 'center'  }} >
          <h1 style={{ fontSize: '15rem' }}>{this.state.number[0]}</h1>
          <audio id="myAudio">
            <source src="horse.ogg" type="audio/ogg" />
            <source src="horse.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div style={{ width: '20%'}} >
          <input onKeyPress={this.handleKeyPress} onChange={this.handleChange} value={this.state.inputText} />
          <ol>
            { this.state.number.map(n => <li key={n}>{n}</li>) }
          </ol>
        </div>
      </div>
    );
  } 
}

// class Sound {
//   constructor(source, volume, loop)
// }
function Sound(source, volume, loop)
{
    this.source = source;
    this.volume = volume;
    this.loop = loop;
    var son;
    this.son = son;
    this.finish = false;
    this.stop = function() {
        document.body.removeChild(this.son);
    }
    this.start = function() {
      console.log('start');
        if (this.finish) return false;
        this.son = document.createElement("embed");
        this.son.setAttribute("src", this.source);
        this.son.setAttribute("hidden", "true");
        this.son.setAttribute("volume", this.volume);
        this.son.setAttribute("autostart", "true");
        this.son.setAttribute("loop", this.loop);
        document.body.appendChild(this.son);
    }
    this.remove=function()
    {
        document.body.removeChild(this.son);
        this.finish = true;
    }
    this.init = function(volume, loop)
    {
        this.finish = false;
        this.volume = volume;
        this.loop = loop;
    }
}

export default IndexPage
