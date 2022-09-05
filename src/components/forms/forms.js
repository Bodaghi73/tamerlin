//pages & component
import SignUp from './signUp';
// import SignIn from './signInEmail';
// import SignInNumber from './signInNumber';
// import VerificationCode from './verificationCode';

//styles
import './forms.scss';

import google from "../../assets/imgs/google.svg";

function Forms() {
    return (
        <div className='forms'>
            <div className='forms__tabs'>
                <div className='forms__tabs--signUp'>
                    <a href="/authentication">ثبت نام</a>
                </div>
                <div className='forms__tabs--signIn'>
                    <a href="/authentication">ورود</a>
                </div>
            </div>
            <div className='forms__form'>
                <SignUp></SignUp>
                {/* <SignIn></SignIn> */}
                {/* <SignInNumber></SignInNumber> */}
                {/* <VerificationCode></VerificationCode> */}
                
            </div>
            <div className='forms__google'>
                <a href='/authentication'>
                    <img src={google} alt=""></img>
                    با حساب کاربری گوگل ثبت نام کنید
                </a>
            </div>
        </div>
    );

}

export default Forms;