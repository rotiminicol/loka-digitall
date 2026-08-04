import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { products } from "@/data/products";

const Footer = () => {
  return (
    <footer className="bg-earth-dark text-primary-foreground/70">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <span className="font-display text-xl font-bold text-primary-foreground italic block mb-4">
              LOKA Digital
            </span>
            <p className="text-xs leading-relaxed text-primary-foreground/50">
              LOKA is a Nigerian technology company focused on Digital Transformation, AI Strategy, and Product Engineering. We combine business strategy, design, software engineering, cloud infrastructure, and artificial intelligence to help organizations create measurable business outcomes.
            </p>
            <div className="flex gap-3 mt-4">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary/30 transition text-primary-foreground/50 hover:text-primary-foreground">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4 text-sm">Contact</h4>
            <p className="text-xs text-primary-foreground/50 mb-2">
              Innovation starts with a conversation.
            </p>
            <p className="text-xs text-primary-foreground/50">
              Lagos, Nigeria<br />
              Email: hello@loka.africa<br />
              Phone: +234 XXX XXX XXXX
            </p>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4 text-sm">Capabilities</h4>
            <ul className="space-y-2">
              {["Digital Transformation", "Artificial Intelligence", "Product Engineering", "Enterprise Solutions", "Cloud & Automation"].map((cat) => (
                <li key={cat}>
                  <Link to="/destinations" className="text-xs text-primary-foreground/40 hover:text-primary transition">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4 text-sm">Our Products</h4>
            <div className="space-y-2">
              {products.map((product) => (
                <Link key={product.id} to={`/shop/${product.id}`} className="flex items-center gap-3 bg-primary-foreground/5 rounded-md p-2 hover:bg-primary-foreground/10 transition">
                  <img src={product.image} alt={product.name} className="w-10 h-10 rounded object-cover" loading="lazy" />
                  <div>
                    <p className="text-xs font-medium text-primary-foreground/80">{product.name}</p>
                    <p className="text-[10px] text-primary">{product.format}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-[10px] text-primary-foreground/30 tracking-wide">© LOKA Digital. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
