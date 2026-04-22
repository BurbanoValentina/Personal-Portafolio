import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navbar, Footer } from "@/components";
import { Hero, About, Experience, Projects, Testimonials, ProcessAndGrowth, ServicesAndFAQ, Contact } from "@/components";

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen overflow-x-hidden">
          <Navbar />
          <main className="content-format">
            <Hero />
            <About />
            <Projects />
            <Experience />
            <ProcessAndGrowth />
            <Testimonials />
            <ServicesAndFAQ />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
