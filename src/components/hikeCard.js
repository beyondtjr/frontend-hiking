import React, { Component } from 'react';
import Dashboard from '../pages/dashboard'
import App from '../App'
import HikeList from './hikeList'
import { Navbar, Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import "../assets/hikeCard.css"

class HikeCard extends Component {
  constructor(props){
    super(props)
  }
  render(){

    let {hike} = this.props
    return(
    <div>
    <Grid>
      <Row>
        <Col sm={6} md={3} lg={4}>
          <Thumbnail href="#" src={hike.img}/>
            <p className="paragraph">{hike.hikename}</p>
            <p className="paragraph">{hike.comments}</p>
        </Col>
        <Col sm={6} md={3} lg={4}>
          <Thumbnail href="#" src={hike.img}/>
            <p className="paragraph">{hike.hikename}</p>
            <p className="paragraph">{hike.comments}</p>
        </Col>
      </Row>
    </Grid>

    </div>
    )
  }
}

export default HikeCard
