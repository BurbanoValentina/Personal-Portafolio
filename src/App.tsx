import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Testimonials } from "@/sections/Testimonials";

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen overflow-x-hidden">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Testimonials />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
