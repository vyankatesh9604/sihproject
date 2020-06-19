import React ,{Component} from 'react';
import {Pie} from 'react-chartjs-2';
import{Bar} from 'react-chartjs-2';
import './Chart.css'
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import Profile from '../assets/profile.jpg'


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
      <div className="dropdown" style={{float:'right',marginRight:'4%'}}>
          <img  src={Profile }
          className="btn dropdown-toggle rounded-circle " 
          type="button" id="dropdownMenuButton" 
          data-toggle="dropdown" 
          aria-haspopup="true" 
          aria-expanded="false"
          style={{width:40, height:35}}
          >
          </img>

          <div className="dropdown-menu w-25 mr-6" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#" style={{fontSize:'15px'}}><i className="fa" style={{fontsize:"24px"}}>&#xf007;</i> Profile</a>
              <a className="dropdown-item" href="#" style={{fontSize:'15px'}}><i className="fa fa-gear fa-spin"></i> setting</a>
              <Link to="/" className="dropdown-item" href="#" style={{fontSize:'15px'}}><i className="fa" style={{fontsize:"24px"}}>&#xf08b;</i> Sign out</Link>
          </div>
      </div>

      <div className='card' style={{width:'30%',float:'right',marginTop:'30%',
          marginRight:'15%', borderRadius:'5px',borderWidth:'5px',boxShadow:'10px 10px 5px grey',animationName:'example'}}>
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
	    <div  className='card' style={{width:'30%',float:'left',marginTop:'30%',
		    marginLeft:'15%',borderRadius:'5px',borderWidth:'5px',boxShadow:'10px 10px 5px grey'}}>
	      <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:false,
              position:'left'
            }
          }}
        />
     </div>
  </div>
        
    );
  }
}

export default Chart;