import React from "react"
import { Link } from "gatsby"
import cookie from 'react-cookies'

import Layout from "../components/layout"

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
            pitch: Number(cookie.load('pitch')) || 1,
            rate: Number(cookie.load('rate')) || 1,
        })
    }

    hanbleChange(event) {
        const { target } = event;
        this.setState({ [target.name]: target.value })
    }

    hanbleClickSave() {
        cookie.save('pitch', this.state.pitch, { path: '/' })
        cookie.save('rate', this.state.rate, { path: '/' })
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
