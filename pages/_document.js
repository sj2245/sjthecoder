import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => <App {...props} />,
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
          </>
        ),
      };
    } finally {
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="icon" href="/assets/icons/awLogo.svg" type="image/x-icon"></link>
          <meta name="description" content={`SJ Coder!`} />
          <meta property="og:title" content={`SJ The Coder`} />
          <meta property="og:type" content={`website`} />
          <meta property="og:site_name" content={`SJ The Coder`} />
          <meta property="og:description" content={`Description goes here`}  />
          <meta property="og:image" content={`/assets/icons/awLogo.svg`} />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="482" />
          <meta name="twitter:card" content={`/assets/icons/awLogo.svg`} />
          <meta name="twitter:site" content="@creativeworkshop" />
          <meta name="twitter:title" content={`SJ The Coder`} />
          <meta name="twitter:description" content={`Description goes here`}  />
          <meta name="twitter:image" content={`/assets/icons/awLogo.svg`} />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.css" />
          <link href="https://fonts.googleapis.com/css2?family=Sofia+Sans:ital,wght@0,1..1000;1,1..1000&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        </Head>
        <body id={`sjTheCoder`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}