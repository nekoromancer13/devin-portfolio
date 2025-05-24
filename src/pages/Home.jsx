import { About, Contact, Hero, Navbar, Tech} from "../components";

const Home = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="relative z-10 bg-hero-pattern">
        <Navbar />
        <Hero />
      </div>
      <div className="relative z-10">
        <About />
        <Tech />
        <Contact />
      </div>
    </div>

  );
};


export default Home;
