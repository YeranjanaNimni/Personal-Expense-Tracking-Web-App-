import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import PieChart from '../PieChart/PieChart';

const Overview = () => {


  return (
    <div>
      <Row>
        <div className='sub-heading'>
          <h1>Overview</h1>
        </div>
      </Row>
      <Row>
        <div className='filters-cover'>
          <div className='filter'><input type="date" /></div>
          <div className='filter'><input type="date" /></div>
          <div className='filter'> <button> Submit </button></div>
        </div>
      </Row>
      <Row>
        <Col xs={7}>
          <PieChart />
        </Col>
        <Col xs={5}>
          <div className='overview-statics-cards-wrapper'>
            <div className='overview-statics-cards'>
              <p className='overview-statics-cards-text'>Total Expenses</p>
              <p className='overview-statics-cards-value'>$120</p>
            </div>
            <div className='overview-statics-cards'>
              <p className='overview-statics-cards-text'>Total Income</p>
              <p className='overview-statics-cards-value'>$120</p>
            </div>
          </div>

          <div className='overview-statics-cards-wrapper'>
              <div className='expensive-card'>
                <div className='expensive-card-text'>Name</div>
                <div className='expensive-card-value'>$50</div>
              </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Overview