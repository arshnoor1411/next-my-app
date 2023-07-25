import { zodResolver } from "@hookform/resolvers/zod";
import Anchor from "components/Anchor";
import Button from "components/Button";
import Input from "components/Input";
import applicationConfig from "core/config";
import {
  CLIENT_ID_KEY,
  REDIRECT_URL_KEY,
  Routes,
  SOURCE_KEY,
} from "core/constants";
import { ClientInfo } from "core/lib";
import { SignInSchema } from "core/validations";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import PhoneInput, { CountryData } from "react-phone-input-2";

// interface Props {
//   client: ClientInfo
// }

// interface IFormInputs {
//   phone: string
//   password: string
// }

const LoginContainer = (props: Props) => {
  const { client } = props;
  const { id, clientID, redirectURL } = client;

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
      <h1 className="text-3xl font-bold  text-primaryHeading">Login</h1>
      <form
        className="my-6 w-full"
        method="POST"
        action={`${applicationConfig.NEXT_PUBLIC_API_URL}/auth/sign-in?${CLIENT_ID_KEY}=${clientID}&redirect_uri=${redirectURL}&${SOURCE_KEY}=${id}`}
      >
        <label className="block">
          <span className="label">Phone</span>
          {/* <input type="hidden" {...register('phone')} /> */}
          <PhoneInput
            countryCodeEditable={false}
            enableSearch
            disableSearchIcon
            placeholder="Enter phone number"
            searchPlaceholder="Search your country"
            country={"in"}
            // onChange={(value, country: CountryData, e, formattedValue) => {
            //   setValue('phone', `+${value}`)

            //   if (formattedValue?.length < country.format.length) {
            //     setError('phone', { message: 'Invalid phone number' })
            //     return
            //   } else {
            //     clearErrors('phone')
            //   }
            // }}
          />
        </label>
        <Input
          required
          label="Password"
          placeholder="Enter password"
          type="password"
          name="password"
          //   register={{ ...register('password') }}
          //   error={errors.password}
        />

        <div className="mb-5 -mt-2 text-right">
          <Anchor
            href={`${Routes.FORGOT_PASSWORD}?${SOURCE_KEY}=${id}&${CLIENT_ID_KEY}=${clientID}&${REDIRECT_URL_KEY}=${redirectURL}`}
            className="text-sm text-primaryLink"
          >
            Forgot Password ?
          </Anchor>
        </div>
        <Button type="submit">Sign In</Button>
      </form>
      <p className="text-center text-gray-500">
        Don&apos;t have an account?{" "}
        <Anchor
          href={`${Routes.SIGNUP}?${SOURCE_KEY}=${id}&${CLIENT_ID_KEY}=${clientID}&${REDIRECT_URL_KEY}=${redirectURL}`}
          className="font-bold text-primaryLink"
        >
          Sign up for free!
        </Anchor>
      </p>
    </>
  );
};

export default LoginContainer;
