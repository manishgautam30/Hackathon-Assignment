import React from "react";
import icon from '../images/eye-slash-regular.svg';
import logoimage from '../images/logo.png';

const Login = () => {
  return (

    <div class="w-[1728px] h-[1117px] bg-cover bg-no-repeat text-poppins  flex bg-[url('https://s3-alpha-sig.figma.com/img/4f8b/6e9d/609c7731d037f1b65d00906a7bc1e241?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mMHOV6bM~y4bqTnBnONOQY0FRKrpgKMSWAOCB7JGGhRz30~0Es0rwlqWwQfX-FvnIQj~L-yZ1KkyrtF6S1UZah8V2Za4bqPHGzEd2hP4Xw2WMU9uuNSUtGgpipc0AQTtlUG-cxfpUjM1HW9WhGJwQVyZnz8ohibRqEffk87iPypGfedR3-ZNHNoPclfUJa4XSZBbWFbLq96fi~rzS43RfwqSEaQnWPMYytsF5xegDhE3ejLvHed41UFzOr6u~G5pNGj7HJ6VsD3a3jvY0WVL0WiqWquoT7NP8KCorfdA6X77ScPXibbvA8eUDQ4fBamkzJ1DefzxIWPxO5CqYLviFw__')] ">

      <div  class="w-195 h-237.5 mt-26 ml-11.25 rounded-lg bg-white flex flex-col shadow-boxShadow">

        <img id="logo" src={logoimage} alt="logoimage" class="w-75.25 h-39.5 mt-14.25 ml-59.75"/> 
        

        <p id="logoText" class="font-poppins text-4.25xl font-normal leading-1 text-blueOar w-123 h-12 ml-36 ">Welcome to Digitalflake Admin</p>
        
        
        <div className="w-[673px] h-[85px] ml-[49px] mt-[91px] rounded-[5px] border border-appleLine"> 
          <p className="w-[116px] h-[16px] mt-[-8px] ml-[16px] pl-[4px] text-[27px] text-purplePleasures bg-white leading-[18px]">Email ID</p>
        </div>

        <div className="w-[673px] h-[85px] ml-[49px] mt-[91px] rounded-[5px] border border-appleLine">
          <p className="w-[116px] h-[16px] mt-[-8px] ml-[16px] pl-[4px] text-[27px] text-purplePleasures bg-white leading-[18px]">Password</p>
          <div className="w-[24px] w-[24px] ml-[637px] mt-[20px]"><img class="opacity-60 " src={icon} alt="icon" /></div> 
        </div>

        <div className="w-[212px] h-[36px] ml-[506px] mt-[31px] text-lime leading-[36px] font-normal text-[24px] float-end	"> 
        Forgot Password?
          </div>

          <div className="w-[673px] h-[85px] ml-[49px] mt-[113px] rounded-[5px] bg-wonderPurple">
          <p className="w-[94px] h-[48px] mt-[20px] ml-[289px] text-[32px] font-medium text-white leading-[48px] ">Log In</p>
        </div>

      </div>
  </div>

  

  );
};

export default Login;
