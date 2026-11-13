import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";
import { services, site } from "@/content/site";
import { siteUrl } from "@/lib/url";

export default function Home() {
  const url = siteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${site.name}, ${site.role}`,
    url,
    image: `${url}/images/rabiul.jpg`,
    email: site.email,
    description: site.description,
    areaServed: ["United Kingdom", "European Union", "United States"],
    address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
    founder: { "@type": "Person", name: site.name, jobTitle: site.role, sameAs: [site.github, site.upwork] },
    makesOffer: services
      .filter((s) => s.price.startsWith("$"))
      .map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, description: s.summary },
        priceSpecification: { "@type": "PriceSpecification", minPrice: Number(s.price.slice(1)), priceCurrency: "USD" },
      })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <Services />
      <Work />
      <About />
      <Process />
      <Contact />
    </>
  );
}
