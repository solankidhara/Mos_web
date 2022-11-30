import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PublicCard from '../../Components/Cards/PublicCard';
import Option from '../../Components/UI/SignInOption/Option';
import UserButton from '../../Components/UI/UserButton/UserButton';
import UserInput from '../../Components/UI/UserInput/UserInput';
import classes from './index.module.css';

const LoginPage = () => {
      return (
            <div className={'container-fluid ' + classes.bg}>
                  <div className={classes.mt}>
                        <div className={classes.cardcontainer}>
                              <PublicCard>
                                    <div className={classes.title}>Sign Up</div>
                                    <Form>
                                          <UserInput
                                                type="email"
                                                placeholder="Email Address"
                                                name="email"
                                                bs-class="mt-4"
                                          />
                                          <UserInput
                                                type="password"
                                                placeholder="Passcode"
                                                name="password"
                                                bs-class="my-4"
                                          />
                                          <div
                                                className={
                                                      'd-flex flex-wrap align-items-center justify-content-center justify-content-sm-start ' +
                                                      classes.sub
                                                }
                                          >
                                                <UserButton type="submit" bs-class="">
                                                      Sign Up
                                                </UserButton>
                                                <Link
                                                      to="/signin"
                                                      className={
                                                            'ms-sm-5 my-3 my-sm-0 ' + classes.link
                                                      }
                                                >
                                                      Already account?
                                                      {
                                                            <span className={classes.highlight}>
                                                                  Sign in
                                                            </span>
                                                      }
                                                </Link>
                                          </div>
                                          <div className={classes.spacing}>
                                                <Option icon="Google" bs-class="my-3">
                                                      Sign in with Google
                                                </Option>
                                                <Option icon="Apple" bs-class="my-3">
                                                      &nbsp;&nbsp;Sign in with Apple
                                                </Option>
                                          </div>
                                    </Form>
                              </PublicCard>
                        </div>
                        <span className={classes.legal}>
                              Privacy Policy | Team of Use | Licensing Terms
                        </span>
                  </div>
            </div>
      );
};

export default LoginPage;
