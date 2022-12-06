import { Button } from 'react-bootstrap';
import classes from './PriceTable.module.css';

const PriceTable = (props) => {
      return (
            <table className={'table ' + classes.tbl}>
                  <tr>
                        <th></th>
                        <th className={'text-center ' + classes.title}>Starter</th>
                        <th className={'text-center ' + classes.title}>Premium</th>
                        <th className={'text-center ' + classes.title}>Corporate</th>
                  </tr>
                  <tr>
                        <th></th>
                        <th className={'text-center ' + classes.price}>
                              <h4>{props.packages[0].starter}</h4>
                              <span>user/month</span>
                        </th>
                        <th className={'text-center ' + classes.price}>
                              <h4>{props.packages[0].premium}</h4>
                              <span>user/month</span>
                        </th>
                        <th className={'text-center ' + classes.price}>
                              <h4>{props.packages[0].corporate}</h4>
                              <span>user/month</span>
                        </th>
                  </tr>
                  {props.packages
                        .filter((pack, ind) => ind !== 0 && pack)
                        .map((pack) => (
                              <tr className={classes.data}>
                                    <td>{pack.for}</td>
                                    <td className="text-center">
                                          {String(pack.starter).padStart(2, '0') + ' / daily'}
                                    </td>
                                    <td className="text-center">
                                          {String(pack.premium).padStart(2, '0') + ' / daily'}
                                    </td>
                                    <td className="text-center">
                                          {String(pack.corporate).padStart(2, '0') + ' / daily'}
                                    </td>
                              </tr>
                        ))}
                  <tr>
                        <td></td>
                        <td className="text-center">
                              <Button variant="dark" className={classes.btn}>
                                    Start now
                              </Button>
                        </td>
                        <td className="text-center">
                              <Button variant="dark" className={classes.btn}>
                                    Start now
                              </Button>
                        </td>
                        <td className="text-center">
                              <Button variant="dark" className={classes.btn}>
                                    Start now
                              </Button>
                        </td>
                  </tr>
            </table>
      );
};

export default PriceTable;
