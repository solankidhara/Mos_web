import classes from './dashboardheader.module.css'
import {SlBell} from "react-icons/sl"
import { Image } from 'react-bootstrap';

const DashboardHeader = (props) => {
      return(
            <div className={"d-flex justify-content-between align-items-center " + classes.dashboardheader}>
            <div>
                  <h1><span>{props.greet} ,</span>  {props.uname}</h1>
            </div>
            <div className="d-flex align-items-center">
                  <div className={classes.notification_icon} ><SlBell /> </div>
                  <div>
                        <Image src={props.userDp} roundedCircle />
                  </div>
            </div>
      </div>
      )
}

export default DashboardHeader;