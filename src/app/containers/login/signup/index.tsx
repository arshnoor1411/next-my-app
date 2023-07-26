// import { zodResolver } from '@hookform/resolvers/zod'
// import Anchor from 'components/Anchor'
// import Button from 'components/Button'
// import Input from 'components/Input'
// import applicationConfig from 'core/config'
// import { CLIENT_ID_KEY, REDIRECT_URL_KEY, Routes, SOURCE_KEY } from 'core/constants'
// import { ClientInfo } from 'core/lib'
// import { SignInSchema } from 'core/validations'
// import { useEffect } from 'react'
// import { useForm } from 'react-hook-form'
import PhoneInput, { CountryData } from "react-phone-input-2";

// interface Props {
//   client: ClientInfo
// }

// interface IFormInputs {
//   phone: string
//   password: string
// }

const SignUpContainer = () => {
  //const { client } = props
  // const { id, clientID, redirectURL } = client

  //   const {
  //     register,
  //     setValue,
  //     setError,
  //     clearErrors,
  //     formState: { errors, isValid },
  //   } = useForm<IFormInputs>({
  //     resolver: zodResolver(SignInSchema),
  //     mode: 'onChange',
  //   })

  //   useEffect(() => {
  //     setError('phone', { message: 'Required' })
  //   }, [setError])

  return (
    <>
      <form>
        <label>
          <span>Phone Number</span>
          <input type="hidden"></input>
          <PhoneInput
            country={"us"}
            //value={this.state.phone}
            //onChange={phone => this.setState({ phone })}
          />
        </label>
        <div className="mb-5 -mt-2 text-right">
          <a
            //href={`${Routes.FORGOT_PASSWORD}?${SOURCE_KEY}=${id}&${CLIENT_ID_KEY}=${clientID}&${REDIRECT_URL_KEY}=${redirectURL}`}
            className="text-sm text-primaryLink"
          >
            Forgot Password ?
          </a>
        </div>
        <button type="submit">Sign In</button>
      </form>
    </>
  );
};

export default SignUpContainer;
