import Head from 'next/head'
import Script from 'next/script'

export default function Home() {
  return (
    <div className="home_page">
      <Head>
        <title>Home Page</title>
       <meta name="description" content="Dev AT E-commerce website with Next.js"/>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" />
                    <Script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></Script>
                    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></Script>
                    <Script src="https://kit.fontawesome.com/a076d05399.js"></Script>
                    <Script src={`https://www.paypal.com/sdk/js?client-id=${process.env.PAYPAL_CLIENT_ID}`}></Script>
                
      </Head>
      
    </div>
  )
}
