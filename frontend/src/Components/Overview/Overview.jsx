import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import ApiService from '../../Services/ApiService';
import PieChart from '../PieChart/PieChart';
import Swal from "sweetalert2";

const Overview = () => {

  const labels = ["food", "transport", "housing", "medical", "personal", "insurance"];

  const [series, setSeries] = useState([10, 10, 24, 2, 17, 34]);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [month, setMonth] = useState("");

  useEffect(() => {

    // Calculate the first date and end date of the current month
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    let data = { startDate: firstDay, endDate: lastDay };

    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    setMonth(monthNames[date.getMonth()]);

    //Get data relaxant to current month 
    ApiService.filter("getByDateRange", data)
      .then(data => {
        let allData = data.data;

        let totalAmount = 0;
        let catAmountsArray = [];

        //Calculate the total amount of each category
        labels.forEach(label => {
          let totalCatAmount = 0;
          const Cat = allData.filter(word => word.category === label);
          Cat.forEach(element => {
            totalCatAmount = totalCatAmount + element.amount
          });

          //Calculate the total amount
          totalAmount = totalAmount + totalCatAmount;
          catAmountsArray.push(totalCatAmount);

        })
        setTotalExpenses(totalAmount);

        //Calculate the percentage of the amount of each category
        let calAmountsArray = [];
        catAmountsArray.forEach(cat => {
          let calAmount = Math.round((cat / totalAmount) * 100);
          calAmountsArray.push(calAmount)
        })
        setSeries(calAmountsArray);

      })
      .catch(err => console.log(err));

    //Check the maximum limit
    if (totalExpenses >= 9000) {
      Swal.fire({
        title: "",
        text: "You have reached 90% of this months expenses",
        confirmButtonColor: "#de2222",
        confirmButtonText: "OK",
      })
    }

  }, [])




  return (
    <div>
      <Row>
        <Col>
          <div className='sub-heading'>
            <h1>Overview</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <h3>{month} Month Overview</h3>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={7}>
          <PieChart seriesData={series} labels={labels} />
        </Col>
        <Col xs={12} lg={5}>

          <div className='overview-statics-cards-wrapper'>
            <div className='overview-statics-cards'>
              <p className='overview-statics-cards-text'>Total Expenses</p>
              <p className='overview-statics-cards-value'>LKR {totalExpenses}</p>
            </div>
          </div>

          <div className='overview-statics-cards-wrapper'>
            <div className='overview-statics-cards'>
              <p className='overview-statics-cards-text'>Maximum Expense Limit</p>
              <p className='overview-statics-cards-value'>LKR 10000 </p>
            </div>
          </div>

        </Col>
      </Row>
    </div>
  )
}

export default Overview