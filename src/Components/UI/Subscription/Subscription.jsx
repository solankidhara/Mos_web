import { Fragment, useState } from 'react';
import { Row } from 'react-bootstrap';
import Pricing from '../../Cards/Pricing';
import PeriodButton from '../PeriodButton/PeriodButton';
import PriceTable from '../PriceTable/PriceTable';
import classes from './Subscription.module.css';

const Subscription = (props) => {
      const [active, setActive] = useState(true);

      return (
            <Fragment>
                  <Row className="g-0 py-4 text-center">
                        <div className={'h3 ' + classes.heading}>Pricing</div>
                  </Row>
                  <Pricing bs-class="table-responsive">
                        <Row>
                              <PeriodButton onClick={setActive} active={active} />
                        </Row>
                        <PriceTable packages={props.packages} />
                  </Pricing>
            </Fragment>
      );
};

export default Subscription;
