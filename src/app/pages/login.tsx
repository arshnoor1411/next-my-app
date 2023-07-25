// import Layout from 'components/Layout'
// import { ClientInfo, getValidClient } from 'core/lib'
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import LoginContainer from "../containers/login";

// interface Props {
//   client: ClientInfo
// }

const Login: NextPage = (props) => {
  //const { client } = props;
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer />
    </>
  );
};

// export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
//   return getValidClient(context)
// }

export default Login;
