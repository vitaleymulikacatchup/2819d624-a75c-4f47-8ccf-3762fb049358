"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import ImageFAQ from '@/components/sections/layouts/faq/ImageFAQ';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import YearRoadmapTimeline from '@/components/sections/layouts/roadmap/YearRoadmapTimeline';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 2, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          logoSrc="/images/logo.svg"
          logoWidth={100}
          logoHeight={50}
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "FAQ", id: "faq" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Roadmap", id: "roadmap" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" },
          ]}
          buttonText="Join the waitlist"
          onButtonClick={() => { /* your action here */ }}
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <BillboardHero title="Welcome to Memecoin Fiesta" subtitle="Join the ultimate celebration of memes and crypto!"/>
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout title="What is Memecoin Fiesta?" descriptions={["A vibrant community for meme lovers and crypto enthusiasts.", "Join us for fun, games, and unique opportunities!"]}/>
      </div>

      <div id="faq" data-section="faq" className="scroll-mt-24">
        <ImageFAQ items={[{ title: "What is a memecoin?", content: "Memecoins are cryptocurrencies that gain popularity through memes." }, { title: "How do I buy memecoins?", content: "You can buy memecoins through various exchanges or P2P platforms." }, { title: "Can I earn from memecoins?", content: "Yes, by trading or holding for long-term value!" }]} />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D title="How to Buy Memecoins" steps={[{ title: "Step 1", description: "Choose a reputable exchange or wallet.", image: "/images/placeholder1.avif", position: "left", isCenter: false }, { title: "Step 2", description: "Create an account and fund it with your preferred currency.", image: "/images/placeholder2.avif", position: "center", isCenter: true }, { title: "Step 3", description: "Purchase memecoins and join our community!", image: "/images/placeholder3.avif", position: "right", isCenter: false }]}/>
      </div>

      <div id="roadmap" data-section="roadmap" className="scroll-mt-24">
        <YearRoadmapTimeline items={[{ year: "2023", title: "Launch", description: "Initial release of Memecoin Fiesta and memberships open." }, { year: "2024", title: "Community Growth", description: "Focus on expanding our community and features." }]} className="my-10" />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <PatternTokenomics title="Tokenomics Overview" description="Learn about the structure of our tokens and their uses in the ecosystem." kpiItems={[{ value: "1 Billion", description: "Total Supply", icon: LucideIcon }, { value: "40%", description: "Liquidity", icon: LucideIcon }, { value: "30%", description: "Marketing", icon: LucideIcon }]} />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasisBackgroundGradient logoSrc="/images/logo.svg" logoAlt="Memecoin Fiesta" logoText="Memecoin Fiesta" items={[{ label: "Home", onClick: () => {} }, { label: "About", onClick: () => {} }, { label: "Contact", onClick: () => {} }]} className="p-4" />
      </div>
    </SiteThemeProvider>
  );
}