/* eslint-disable react/prop-types */
import RequestReset from '../components/RequestReset';
import Reset from '../components/Reset';

export default function ResetPage({ query }) {
  if (!query?.token) {
    return (
      <div>
        <p>Sorry you must supply a token</p>
        <RequestReset />
      </div>
    );
  }
  return (
    <div>
      <p>RESET YOUR PASSWORD</p>
      <Reset token={query?.token} />
    </div>
  );
}

export async function getServerSideProps(ctx) {
  console.log(ctx.query);
  if (Object.keys(ctx.query).length === 0) {
    return {
      props: {
        token: null,
      },
    };
  }
  return {
    props: {
      token: null,
    },
  };
}
