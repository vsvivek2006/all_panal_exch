import React from "react";

export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "All Panel Exch",
    "url": "https://allpaanelexch.org",
    "logo": "https://allpaanelexch.org/logo.png",
    "foundingDate": "2010",
    "description": "India's premier sports exchange and cricket ID platform. Fast payouts, 24/7 dedicated customer care, and verified user accounts.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-xxxxxxxxxx",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Hindi"],
      "areaServed": "IN"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "All Panel Exch Official",
    "url": "https://allpaanelexch.org",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://allpaanelexch.org/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is All Panel Exch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All Panel Exch is a sports betting exchange and gaming platform providing live cricket markets, sports exchanges, casino games, and 24/7 support."
        }
      },
      {
        "@type": "Question",
        "name": "How do I make an All Panel ID?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Visit the official site, tap on Get ID, provide your basic details, and receive your unique verified All Panel ID."
        }
      },
      {
        "@type": "Question",
        "name": "How fast are withdrawals processed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Verified accounts receive fast withdrawals via UPI and standard banking channels, with round-the-clock support."
        }
      }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "All Panel Exch Official ID",
    "image": "https://allpaanelexch.org/og-image.png",
    "description": "Verified sports exchange & live casino ID with 24/7 support and rapid settlements.",
    "brand": {
      "@type": "Brand",
      "name": "All Panel Exch"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
}
