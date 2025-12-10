import { Link, useLocation } from 'react-router-dom';
import { Home, Code2, Github, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export const BottomNav = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/scripting', icon: Code2, label: 'Scripting' },
    { path: 'https://github.com/BludosDevv/ITsYourBuddy', icon: Github, label: 'GitHub', external: true },
    { path: '/about', icon: User, label: 'About Me' },
  ];
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4">
      <div className="max-w-2xl mx-auto glass-nav rounded-2xl px-6 py-3">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            if (item.external) {
              return (
                <a
                  key={item.path}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-300 hover:bg-primary/10 group"
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                    {item.label}
                  </span>
                </a>
              );
            }
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-300",
                  isActive 
                    ? "bg-primary/20 text-primary" 
                    : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
                )}
              >
                <Icon className={cn(
                  "w-5 h-5 transition-all duration-300",
                  isActive && "glow-effect"
                )} />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;