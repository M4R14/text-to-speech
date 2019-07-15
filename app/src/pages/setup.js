import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import AppConfig from "../app-config"

class SecondPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pitch: 1,
            rate: 1,
        }

        this.hanbleChange = this.hanbleChange.bind(this);
        this.hanbleClickSave = this.hanbleClickSave.bind(this);
    }

    componentWillMount() {
        this.setState({
            pitch: AppConfig.getPitch(),
            rate: AppConfig.getRate(),
        })
    }

    hanbleChange(event) {
        const { target } = event;
        this.setState({ [target.name]: target.value })
    }

    hanbleClickSave() {
        AppConfig.setPith(this.state.pitch);
        AppConfig.setRate(this.state.rate);
    }
    
    render() {
        return (
            <Layout>
                <h1>setup</h1>
                คิวที่ xxx ค่ะ <br/>
                
                <label>Pitch:</label>{` `}
                <input name="pitch" value={this.state.pitch} onChange={this.hanbleChange} />
                <br/>

                <label>Rate:</label>{` `}
                <input name="rate" value={this.state.rate} onChange={this.hanbleChange} />
                <br/>

                <button onClick={this.hanbleClickSave} >บันทึก</button>
                <br/>
                <Link to="/">Go back to the homepage</Link>
            </Layout>
        );
    }
}

export default SecondPage
