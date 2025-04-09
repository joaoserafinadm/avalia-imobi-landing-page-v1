import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" >
      <Head >

        <title>Avaliação do imóvel</title>
        <meta property="og:title" content="Avaliação do imóvel" />
        <meta property="og:description" content="Avaliação do seu imóvel está pronta!" />
        <meta property="og:image" content="https://res.cloudinary.com/joaoserafinadm/image/upload/v1694998829/AVALIA%20IMOBI/LOGOS/LOGO_02_wkzqga.png" />

        {/* Facebook Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1417191295830741');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1417191295830741&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Facebook Pixel */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
