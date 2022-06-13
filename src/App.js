import './App.css';
import Home from './Components/Home';
import { baseUrl } from './shared/baseUrl';

import React from "react";
import './App.css';
class App extends React.Component {

  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false
    };
  }

  // ComponentDidMount is used to
  // execute the code
  async componentDidMount() {
    // setInterval(()=>{
    //   const url = "https://ttr.vsbbn.nl:4000/gps_history?team_id=10";
    //    const response = await fetch(url);
    //    const data = await response.json();

    //    this.setState({coordinates: data, loading: false });
    //   },3000)
    setInterval(() => {
      fetch(
        baseUrl)
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            items: json,
            DataisLoaded: true
          });
        })
    }, 3000)
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
      <h1> Pleses wait some time.... </h1> </div>;

    return (
      <div className="App">
        {console.log(items)}
        <h1>Student - Attender web </h1> {
          items.map((item, index) => (
            // <ol key = {index} >
            // 	USN: { item.username},
            // 	Time: { item.name },
            // 	</ol>
            <Home key={index} ser={index} date={item.null[1]} usn={item.null[0]} />
          ))
        }
      </div>
      // <div classname="App">
      //   <BrowserRouter>
      //     <Switch>
      //       <Route path='/home' exact component={() => <Home data={items} />} />
      //       {/* <Route path='/menu' exact component={() => <Menu dishes={this.props.dishes} onClick={this.onDishSelect} />} /> */}
      //       <Route path='/student/:usn' exact><StudentPage arrData={items} /></Route>
      //       <Route path='/error' exact><Err /></Route>
      //       {/* <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} /> */}
      //       {/* <Route path='/aboutus' exact><About leaders={this.props.leaders.leaders} /></Route> */}
      //       <Redirect to="/error" />
      //     </Switch>
      //   </BrowserRouter>
      // </div>
    );
  }
}

export default App;
