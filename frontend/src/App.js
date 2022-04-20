import './App.css';
import SideBar from './Layouts/SideBar/SideBar';
import { Row, Col, Container } from 'react-bootstrap';
import { BrowserRouter as Router,Route } from "react-router-dom";
import Overview from './Components/Overview/Overview';
import DataList from './Components/DataList/DataList';
import ExpensiveForm from './Components/ExpensiveForm/ExpensiveForm';

function App() {
  return (
    <div className="App">

      <Router>
        <Container fluid>
          <Row>
            <Col sm={12} md={4} lg={2} >
              <SideBar />
            </Col>
            <Col sm={12} md={8} lg={10}>
              <div className='my-5'>
              <Route exact path="/" component={Overview} />
             <Route exact path="/data-list" component={DataList} /> 
              <Route exact path="/add-new" component={ExpensiveForm} /> 
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
