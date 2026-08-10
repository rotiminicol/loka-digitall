import Layout from "@/components/layout/Layout";
import { products } from "@/data/products";
import { Star, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NewsletterSignup from "@/components/NewsletterSignup";

const Shop = () => {
  return (
    <Layout>
      <section className="bg-muted py-16 md:py-24 text-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Our Digital Platforms</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Our Products</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            LOKA is not an agency. Alongside our consulting work, we build and operate our own digital platforms — each solving a real operational problem at scale. Deployed, configured, and supported for your organization.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <Link to={`/shop/${product.id}`} className="block overflow-hidden aspect-[4/3]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </Link>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  <Link to={`/shop/${product.id}`} className="hover:text-primary transition">{product.name}</Link>
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className={`w-4 h-4 ${j < Math.floor(product.rating) ? "text-secondary fill-secondary" : "text-muted-foreground"}`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">({product.rating})</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-muted-foreground">{product.format}</span>
                  <a
                    href={product.url ?? `/shop/${product.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-primary-foreground px-3 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition inline-flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-4 h-4" /> Visit
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <NewsletterSignup />
      </section>
    </Layout>
  );
};

export default Shop;
