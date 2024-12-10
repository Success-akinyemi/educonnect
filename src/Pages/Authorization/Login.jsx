import { useState } from "react"
import Logo from "../../Components/Helpers/Logo"
import Swiper from "../../Components/Helpers/Swiper"
import LoginCard from "../../Components/Authorization/LoginCard"
import ErrorCard from "../../Components/Helpers/ErrorCard"
import SuccessCard from "../../Components/Helpers/SuccessCard"

function Login() {
    const [ errorText, setErrorText ] = useState()
    const [ successText, setSuccessText ] = useState()

  return (
    <div className="page flex-row">

      <div className="h-full w-full flex flex-col items-center">
        <div className="flex flex-col items-start gap-[3rem]">

            <Logo style={`mt-[50px]`} />

            <LoginCard setErrorText={setErrorText} setSuccessText={setSuccessText} />

        </div>

      </div>

      <div className="w-[608px] min-h-[100vh]">
        <Swiper />
      </div>

      {
        errorText && (
            <ErrorCard errorText={errorText} />
        )}
    
        {
            successText && (
                <SuccessCard successText={successText} />
            )
        }

    </div>
  )
}

export default Login
