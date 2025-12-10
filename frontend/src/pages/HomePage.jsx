import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Sparkles } from 'lucide-react';

export const HomePage = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const apps = [
    {
      title: "ITs Magic 2.0",
      description: "Latest version with enhanced features and performance",
      url: "https://play.google.com/store/apps/details?id=com.itsmagic.engine2",
      version: "2.0",
      badge: "Latest"
    },
    {
      title: "ITs Magic 1.0",
      description: "Stable release for reliable performance",
      url: "https://play.google.com/store/apps/details?id=com.itsmagic.enginestable",
      version: "1.0",
      badge: "Stable"
    }
  ];
  
  return (
    <div className={`min-h-screen relative transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="max-w-5xl mx-auto">
          {/* Main Title with Glow Effect */}
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Scripting Made Simple</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 neon-text">
              ITs Your
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Buddy
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your ultimate companion for Java scripting in ITs Magic Engine
            </p>
          </div>
          
          {/* App Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {apps.map((app, index) => (
              <div
                key={app.version}
                className="glass-card rounded-2xl p-8 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-primary">Version {app.version}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    app.badge === 'Latest' 
                      ? 'bg-primary/20 text-primary border border-primary/30' 
                      : 'bg-secondary/20 text-secondary border border-secondary/30'
                  }`}>
                    {app.badge}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {app.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {app.description}
                </p>
                
                {/* Button */}
                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 group-hover:scale-[1.02]"
                    size="lg"
                  >
                    <span>Download on Play Store</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            ))}
          </div>
          
          {/* Feature Highlights */}
          <div className="glass-card rounded-2xl p-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl font-bold mb-6 text-center">Why Choose ITs Magic?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold mb-2">Fast & Efficient</h3>
                <p className="text-sm text-muted-foreground">Optimized performance for smooth scripting</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="font-semibold mb-2">2000+ Methods</h3>
                <p className="text-sm text-muted-foreground">Comprehensive library at your fingertips</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="font-semibold mb-2">Easy to Use</h3>
                <p className="text-sm text-muted-foreground">Intuitive interface for all skill levels</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;