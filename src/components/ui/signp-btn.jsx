
const SignUpBtn = (props) => {
    return (
    
        <button className="text-white bg-primary px-3 py-0.5 text-sm font-medium font-manrope rounded-3xl border border-primary cursor-pointer hover:text-primary hover:bg-white hidden md:block lg:px-5 lg:py-2 xl:px-6 xl:py-2.5">
            {props.title}
          </button>
      
    );
  };
  
  export default SignUpBtn;