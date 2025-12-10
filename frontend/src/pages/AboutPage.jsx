import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Instagram, MessageCircle } from 'lucide-react';

export const AboutPage = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/BludosDevv',
      username: '@BludosDevv',
      color: 'from-gray-500 to-gray-700'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/gorthodoxie',
      username: '@gorthodoxie',
      color: 'from-pink-500 to-purple-600'
    },
    {
      name: 'Discord',
      icon: MessageCircle,
      url: '#',
      username: 'greek_orthodoxy',
      color: 'from-indigo-500 to-blue-600'
    }
  ];
  
  return (
    <div className={`min-h-screen relative transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-4 pt-12 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-slide-up">
            <div className="w-24 h-24 rounded-full glass-card flex items-center justify-center mx-auto mb-6 animate-glow-pulse">
              <span className="text-5xl">👨‍💻</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Bludos Dev
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Developer & Creator of ITs Magic Engine
            </p>
          </div>
          
          {/* About Card */}
          <div className="glass-card rounded-2xl p-8 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a passionate developer dedicated to creating powerful and intuitive scripting tools 
              for mobile game development. ITs Magic Engine is my flagship project, designed to make 
              Java scripting accessible and efficient for developers of all skill levels.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With over 2000+ methods and classes, ITs Magic Engine empowers developers to bring their 
              creative visions to life on Android devices.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="space-y-4 mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="glass-card rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${link.color} flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                            {link.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">{link.username}</p>
                        </div>
                      </div>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
          
          {/* GitHub Repository */}
          <div className="glass-card rounded-2xl p-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                <Github className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">Open Source</h2>
                <p className="text-muted-foreground mb-4">
                  This website is open source! Feel free to explore the code, contribute, or customize it for your own projects.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <a
                href="https://github.com/BludosDevv/ITsYourBuddy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                  size="lg"
                >
                  <Github className="w-5 h-5 mr-2" />
                  <span>View Repository</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
              
              <div className="glass-card rounded-xl p-4 bg-primary/5 border border-primary/20">
                <h3 className="font-semibold mb-2 text-sm">How to Edit & Deploy:</h3>
                <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                  <li>Fork or clone the repository</li>
                  <li>Customize the code as needed</li>
                  <li>Deploy to Vercel with one click</li>
                  <li>Share your version with the community!</li>
                </ol>
              </div>
            </div>
          </div>
          
          {/* Footer Note */}
          <div className="text-center mt-12 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <p className="text-sm text-muted-foreground">
              Made with 💙 by Bludos Dev
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;