import LandingPage from '@/Components/LandingPage/LandingPage';
import Head from 'next/head';

export default function Home() {
  const image =
    'https://res.cloudinary.com/demonicirfan/image/upload/v1676739259/Group_2_oltl7o.png';
  const description =
    'Cubik is a platform which supports public good on Solana by providing Grants using Quadratic Funding.';
  const title = 'Quadratic Funding Platform on Solana';
  const config = {
    general: {
      name: 'Cubik',
      twitterHandle: '_cubik',
      domain: 'https://cubik.so',
    },
  };
  return (
    <>
      <Head>
        <title>Cubik</title>
        <meta name='description' content={description} />
        <meta name='image' content={image} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={image} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={`https://${config.general.domain}/`} />
        <meta property='og:site_name' content={config.general.name} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={image} />
        <meta name='twitter:image:alt' content={description} />
        <meta name='twitter:site' content={config.general.twitterHandle} />
        <meta name='twitter:creator' content={config.general.twitterHandle} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <LandingPage />
      </main>
    </>
  );
}
