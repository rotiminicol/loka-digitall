import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ArticleCard from "@/components/ArticleCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import { continents, featuredArticles } from "@/data/destinations";



const heroSlides = [
  { image: "/hero1.png", alt: "LOKA Digital Transformation — We build the future of business", subtitle: "We build the future of business..." },
  { image: "/hero2.png", alt: "LOKA AI Strategy — Turn Artificial Intelligence into measurable business value", subtitle: "Transform faster. Operate smarter..." },
  { image: "/hero3.png", alt: "LOKA Product Engineering — From idea to launch", subtitle: "Technology that solves business problems..." },
  { image: "/hero4.png", alt: "LOKA Enterprise Solutions — Helping organizations run smarter", subtitle: "Grow better with enterprise-grade technology..." },
  { image: "/hero5.png", alt: "LOKA Intelligent Automation — Automate repetitive work, focus on innovation", subtitle: "Automate. Innovate. Accelerate." },
];

const continentTags = ["Digital Transformation", "AI Strategy", "Product Engineering", "Enterprise Solutions", "Intelligent Automation", "Industries", "Who We Work With"];
const months = ["Strategy", "Discovery", "Design", "Architecture", "Build", "Integration", "Automation", "AI Enablement", "Cloud", "Security", "Launch", "Optimization"];


const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/50" />

        {/* Stamp badge */}
        <div className="absolute top-8 right-8 md:top-12 md:right-16 stamp-badge text-primary-foreground border-primary-foreground/60 hidden md:flex">
          <span>LOKA<br/>Digital<br/>Africa</span>
        </div>


        <div className="relative h-full flex flex-col justify-end pb-20 px-6 md:px-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary-foreground/60 text-xs uppercase tracking-[0.3em] mb-3 font-medium">Digital Transformation • AI Strategy • Product Engineering</p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground tracking-tight mb-4 max-w-3xl italic leading-[1.1]">
              We build the future of business
            </h1>
            <p className="text-primary-foreground/70 text-xs uppercase tracking-[0.2em] mb-8">Transform faster. Operate smarter. Grow better.</p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/routes"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold text-sm hover:opacity-90 transition"
              >
                Book a Strategy Session <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/destinations"
                className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/40 text-primary-foreground px-6 py-3 rounded-md font-semibold text-sm hover:bg-primary-foreground/20 transition backdrop-blur-sm"
              >
                Start Your Digital Transformation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Wavy bottom edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 30C240 60 480 0 720 30C960 60 1200 0 1440 30V60H0V30Z" fill="hsl(40, 33%, 96%)" />
          </svg>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="text-center mb-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2 font-medium">
            We don't simply build software — we solve business problems using technology
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground italic">
            Latest thinking from LOKA
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <ArticleCard article={article} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Where to Next - World Map */}
      <section className="relative py-24 overflow-hidden">
        <img src="/hero1.png" alt="LOKA Digital" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-earth-dark/90" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
          {/* Small stamp */}
          <div className="stamp-badge text-primary-foreground/60 border-primary-foreground/30 mx-auto mb-6 w-16 h-16 text-[8px]">
            <span>What<br/>We Do</span>
          </div>
          <p className="text-primary-foreground/50 text-[10px] uppercase tracking-[0.3em] mb-2">What we do</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-10 italic">
            Choose your capability
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {continentTags.map((tag) => (
              <Link
                key={tag}
                to={`/destinations/${tag.toLowerCase().replace(/ /g, "-")}`}
                className="bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground/80 px-6 py-2 rounded-full text-xs font-medium tracking-wide hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Promotion */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2 font-medium">Featured product</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 italic leading-snug">
              LOKA Logistics — smart mobility, smarter commerce
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
              LOKA Logistics is our intelligent logistics and delivery ecosystem built to power modern commerce. Designed for businesses, marketplaces, logistics providers, airports, estates, and cities, it connects customers, merchants, dispatch riders, and fleet operators through one integrated digital ecosystem.
            </p>
            <a
              href="https://loka-product-page-elevate.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold text-sm hover:opacity-90 transition"
            >
              Explore the platform <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-md"
          >
            <img src="/hero2.png" alt="LOKA Logistics delivery and mobility platform" className="w-full h-80 object-cover" />
          </motion.div>

        </div>
      </section>

      {/* About / Meet the Team */}
      <section className="bg-earth-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                src="/work3.png"
                alt="The LOKA Digital team"
                className="rounded-lg shadow-md w-full h-96 object-cover"
              />
              {/* Team member badges */}
              <div className="absolute -top-4 -right-4 bg-card rounded-full w-20 h-20 shadow-lg flex flex-col items-center justify-center text-center border-2 border-border">
                <span className="text-[9px] font-medium text-muted-foreground">Based in</span>
                <span className="text-xs font-bold text-foreground font-display">Lagos</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card rounded-full w-20 h-20 shadow-lg flex flex-col items-center justify-center text-center border-2 border-border">
                <span className="text-[9px] font-medium text-muted-foreground">Built for</span>
                <span className="text-xs font-bold text-foreground font-display">Africa</span>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2 font-medium">About LOKA</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 italic">
                Engineering tomorrow's businesses
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                LOKA is a Nigerian technology company focused on Digital Transformation, AI Strategy, and Product Engineering. We combine business strategy, user-centered design, software engineering, cloud infrastructure, and artificial intelligence to help organizations create measurable business outcomes.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                Our multidisciplinary team works with startups, SMEs, government agencies, logistics companies, healthcare providers, educational institutions, financial organizations, and large enterprises across Africa. Our philosophy is simple: technology should simplify complexity, not create it.
              </p>
              <Link
                to="/destinations"
                className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Explore what we do <ArrowRight className="w-3.5 h-3.5" />
              </Link>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Travel Books */}
      <section className="bg-muted">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2 font-medium">Our Products</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 italic">
                Platforms we build and operate
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                LOKA is not an agency. Alongside our consulting work we build and run our own digital platforms — LOKA Logistics, Payraty, eSecondarySchool, and the LOKA AI Platform — each solving a real operational problem at scale.
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all"
              >
                See our products <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img src="/logistic3.png" alt="LOKA digital platforms and products" className="w-full h-80 object-cover" />

            </div>
          </div>
        </div>
      </section>

      {/* Our Core Capabilities */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2 font-medium">What We Do</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground italic">Our Core Capabilities</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {continents.slice(0, 4).map((continent) => (
            <div key={continent.slug} className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-display text-2xl font-bold text-foreground mb-1 italic">{continent.name}</h3>
              <ul className="space-y-3 mt-4">
                {continent.countries.slice(0, 3).map((country) => (
                  <li key={country.slug} className="flex items-start gap-3">
                    <span className="text-primary font-display font-bold text-sm uppercase tracking-wide mt-0.5 min-w-[80px]">{country.name}</span>
                    <span className="text-xs text-muted-foreground leading-relaxed">
                      {country.articles[0]?.title}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                to={`/destinations/${continent.slug}`}
                className="inline-flex items-center gap-1 text-primary font-semibold text-xs mt-5 border border-primary rounded-full px-4 py-1.5 hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Explore {continent.name} <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement Journey */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <div className="text-center mb-10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2 font-medium">Our Process</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground italic">Where are you in your journey?</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {months.map((month) => (
              <button
                key={month}
                className="px-5 py-2 rounded-full border border-border text-xs font-medium text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all tracking-wide"
              >
                {month}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Why LOKA? */}
      <section className="bg-earth-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2 font-medium">Why Choose Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground italic">Why LOKA?</h2>
            <p className="text-muted-foreground text-sm mt-3">Because technology should deliver business results.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Business First", desc: "We understand business before writing code." },
              { title: "AI Ready", desc: "Every solution is designed with AI in mind." },
              { title: "Enterprise Grade", desc: "Secure, scalable, and built for growth." },
              { title: "User-Centered Design", desc: "Simple experiences people enjoy using." },
              { title: "Local Knowledge", desc: "Built in Africa for Africa with global engineering standards." },
              { title: "Long-term Partnership", desc: "We stay with you after launch." },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg p-6 border border-border"
              >
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2 font-medium">Industries</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground italic">Industries We Serve</h2>
          <p className="text-muted-foreground text-sm mt-3">Every industry is becoming a technology company.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {["Logistics & Transportation", "Aviation", "Government", "Healthcare", "Education", "Financial Services", "Retail & Commerce", "Manufacturing", "Agriculture", "Hospitality", "Professional Services"].map((industry) => (
            <span
              key={industry}
              className="bg-card border border-border text-foreground/70 px-5 py-2.5 rounded-full text-xs font-medium tracking-wide hover:border-primary hover:text-foreground transition-all cursor-default"
            >
              {industry}
            </span>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <NewsletterSignup />
      </section>
    </Layout>
  );
};

export default Index;