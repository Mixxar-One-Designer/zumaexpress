import { Typography } from '@mui/material';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>zumaexpress</title>
        <meta
          name="description"
          content="The Biggest African Online Ecommerce Store"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography component="h1" variant="h1">
        Zuma-Express
      </Typography>
    </div>
  );
}
