import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import PublicCard from "../../Components/Cards/PublicCard";
import Option from "../../Components/common/SignInOption/Option";
import SocialLogin from "../../Components/common/SocialLogin";
import UserButton from "../../Components/common/UserButton/UserButton";
import UserInput from "../../Components/common/UserInput/UserInput";
import classes from "./index.module.css";

import { useForm, Controller } from "react-hook-form";


const SignInPage = () => {

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password:""
    }
  });
  const onSubmit = data => console.log(data);

  return (
    <div className={"container-fluid " + classes.bg}>
      <div className={classes.cardcontainer}>
        <PublicCard>
          <div className={classes.title}>Sign in</div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <UserInput type="email" placeholder="Email Address" name="email" bs-class="mt-4" control={control} />
            <UserInput type="password" placeholder="Passcode" name="password" bs-class="my-4" control={control}  />
            <div className={"d-flex flex-wrap align-items-center justify-content-center justify-content-sm-start " + classes.sub}>
              <UserButton type="submit" bs-class="">
                Sign In
              </UserButton>
              <Link to="/signup" className={"ms-sm-5 my-3 my-sm-0 " + classes.link}>
                Create an Account
              </Link>
            </div>
          </Form>
          <SocialLogin />
        </PublicCard>
      </div>
      <span className={classes.legal}>Privacy Policy | Team of Use | Licensing Terms</span>
    </div>
  );
};

export default SignInPage;
