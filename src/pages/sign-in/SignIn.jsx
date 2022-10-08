import './SignIn.css'

const SignIn = () => {
  return (
    <div className='sign-in-form'>
      <h1>Instagram</h1>
       <form action="">
        <input type="text" placeholder='Phone number, username or email address' />
        <input type="text" placeholder='Password' />
        <button className="sign-in-btn">Log In</button>
        <p><span><hr/></span>OR<span><hr/></span></p>
        <button className='sign-in-btn ex'>Explore Instagram</button>
       </form>
     
    </div>
  )
}
export default SignIn