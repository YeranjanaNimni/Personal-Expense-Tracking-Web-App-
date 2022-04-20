import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileImage from '../ProfileImage/ProfileImage';

library.add(fas, fab);

const SideBar = () => {

  let history = useHistory();

  const routeChange = (path) => {
    history.push(path);
  }

  return (
    <div className='side-bar'>
      <Row>
        <Col>
          <ProfileImage />
        </Col>
      </Row>
      <Row className="mx-0">
        <Col xs={12}>
          <div className='dashboard-items'>
            <div className='dashboard-icon'>
              <FontAwesomeIcon icon="home" color="white" size="2x" />
            </div>
            <div className='dashboard-button'>
              <button onClick={() => { routeChange("") }}>Overview</button>
            </div>
          </div>
        </Col>
        <Col xs={12}>
          <div className='dashboard-items'>
            <div className='dashboard-icon'>
              <FontAwesomeIcon icon="list" color="white" size="2x" />
            </div>
            <div className='dashboard-button'>
              <button onClick={() => { routeChange("data-list") }}>List</button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default SideBar