import React from 'react';
import {Pie} from 'react-chartjs-2';
import './Chart.css'
import {Link} from 'react-router-dom';
const state = {
  labels: ['Maharashtra', 'Gujrat', 'Madhya Pradesh',
           'karnataka', 'Telangana'],
  datasets: [
    {
      label: 'Network',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [65, 59, 80, 81, 56]
    }
  ]
}
export class Chart extends React.Component {
  render() {
    return (
    <div>
      <div className="header">
          <Link to="/" type="button" className="btn btn-dark pull-right btn-default btn-lg ">Logout</Link>
      </div>
      <div  className="App" style={{width:500}}>
        <Pie
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Network speed permonth',
              fontSize:15,
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>
      </div>
        
    );
  }
}

export default Chart;