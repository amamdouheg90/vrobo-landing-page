export function Schema() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Vrobo",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "IVR-powered Robo calls Order Confirmation and shipping verification system for e-commerce businesses",
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "EGP",
              "lowPrice": "1.50",
              "highPrice": "3.00",
              "priceValidUntil": "2024-12-31",
              "seller": {
                "@type": "Organization",
                "name": "Vrobo"
              }
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "url": "https://Vrobo",
            "name": "Vrobo",
            "logo": "https://Vrobo/images/vrobo-logo.png",
            "description": "Vrobo helps e-commerce businesses reduce failed deliveries through IVR-powered Robo calls Order Confirmation and shipping verification.",
            "sameAs": [
              "https://twitter.com/vrobo_co",
              "https://linkedin.com/company/vrobo-co",
              "https://facebook.com/Vrobo"
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://Vrobo",
            "name": "Vrobo",
            "description": "IVR-powered Robo calls Order Confirmation and shipping verification",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://Vrobo/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What are Vrobo's main services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Vrobo offers two main services: 1) Order Confirmation - verifying orders with customers before shipping through IVR-powered Robo calls, WhatsApp, SMS, and email, and 2) Shipping Verification - checking shipping companies' reports when orders are marked as undelivered to detect fake updates."
                }
              },
              {
                "@type": "Question",
                "name": "How does Vrobo's communication process work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Vrobo follows a smart communication sequence: First, it makes up to 3 IVR-powered Robo calls call attempts with customized messages for your brand. If calls are unsuccessful, it switches to WhatsApp messaging with smart response analysis. If WhatsApp fails, SMS messages are sent. As a final step, email notifications ensure maximum reach."
                }
              },
              {
                "@type": "Question",
                "name": "How much can Vrobo reduce failed deliveries?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our customers typically see a 35-45% reduction in failed deliveries within the first month. Results vary based on your current processes, but our pre-shipping validation and shipping verification services help maximize delivery success rates."
                }
              }
            ]
          })
        }}
      />
    </>
  )
}

