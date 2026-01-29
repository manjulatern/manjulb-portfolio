import {
  Header,
  Hero,
  StatsBar,
  About,
  Services,
  Industries,
  Achievements,
  TechStack,
  CTA,
  Footer,
} from "@/components/portfolio";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Services />
        <Industries />
        <Achievements />
        <TechStack />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
