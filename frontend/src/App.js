import './App.css';
import SideBar from './Layouts/SideBar/SideBar';
import { Row, Col, Container } from 'react-bootstrap';
import { BrowserRouter as Router,Route } from "react-router-dom";
import Overview from './Components/Overview/Overview';
import DataList from './Components/DataList/DataList';
import Settings from './Components/Settings/Settings';
import ProfileImage from './Layouts/ProfileImage/ProfileImage';
import AddNewExpensive from './Components/AddNewExpensive/AddNewExpensive';

function App() {
  return (
    <div className="App">

      <Router>
        <Container fluid>
          <Row>
            <Col sm={2}>
              <SideBar />
            </Col>
            <Col sm={10}>
              <div className='my-5'>
              <Route exact path="/" component={Overview} />
              <Route exact path="/data-list" component={DataList} />
              <Route exact path="/settings" component={Settings} />
              <Route exact path="/add-new" component={AddNewExpensive} />
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
