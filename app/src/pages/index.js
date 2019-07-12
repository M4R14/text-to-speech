import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Caller from "../components/caller"

const IndexPage = () => (
  <Layout>
    {/* <Link to="/setup">setup</Link> */}
    <div style={{ display: 'flex', backgroundColor: 'blue' }}>
      <div style={{
          width: '45%',
          backgroundPositionX: '-240px',
          backgroundImage: "url('https://scontent.fbkk2-8.fna.fbcdn.net/v/t1.0-9/65610143_531384484064542_5619796296853356544_n.jpg?_nc_cat=102&_nc_oc=AQlcapcjh8wMKVRKpc48j2eKtvYDKUHyjr9qCOe6wYozul3eKzp5f8gxCdDQ8agZlrA&_nc_ht=scontent.fbkk2-8.fna&oh=a7d0bfd0a621cbd06700976c4932cafd&oe=5DC1E386')",
      }} >
        <div style={{
            width: '100px',
            backgroundSize: 'cover',
            height: '100px',
            margin: '17px',
            backgroundImage: "url('https://scontent.fbkk2-7.fna.fbcdn.net/v/l/t1.15752-9/66425192_2273882152680009_3829154689472004096_n.png?_nc_cat=109&_nc_oc=AQkAJY9LHFZfC7kv4k8xjldSedOaz8CnGv_RHwd0H29cjnE6gtst02Op_y5aUZ1d4Pc&_nc_ht=scontent.fbkk2-7.fna&oh=0dc1a70f8544148cf11234901759694c&oe=5DA1101B')",
        }}  />
      </div>
      <div style={{ width: '55%', backgroundColor: 'black' }}>
        <Caller />
      </div>
    </div>
  </Layout>
)

export default IndexPage
