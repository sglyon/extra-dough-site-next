import { Head, Html, Main, NextScript } from 'next/document'

export default function Document(props) {
  return (
    <Html
      className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
      lang="en"
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
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
              fbq('init', '350769560823518');
              fbq('track', 'PageView');
            `,
          }}
        ></script>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script async src="https://player.vimeo.com/api/player.js" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@400;500&display=swap"
        />
        <meta
          name="description"
          content="Craving homemade treats? Find a delightful array of local fresh baked goods near you with Extra Dough. Connect, explore, and indulge in the best your community has to offer!"
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <img height="1" width="1" style="display:none"
              src="https://www.facebook.com/tr?id=350769560823518&ev=PageView&noscript=1"/>
            `,
          }}
        />
      </Head>
      <body className="flex h-full flex-col">
        {/* Noscript tag for Facebook Pixel */}

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
