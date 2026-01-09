import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm">
              Built with security in mind
            </span>
          </div>
          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} Alex Chen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
