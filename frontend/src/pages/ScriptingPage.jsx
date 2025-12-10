import { useState, useEffect, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, ChevronRight, Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { scriptingData } from '@/data/scriptingData';

export const ScriptingPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [copiedMethod, setCopiedMethod] = useState(null);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Get unique categories
  const categories = useMemo(() => {
    return [...new Set(scriptingData.map(item => item.category))];
  }, []);
  
  // Filter classes based on search and category
  const filteredData = useMemo(() => {
    let filtered = scriptingData;
    
    if (selectedCategory) {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(item => 
        item.className.toLowerCase().includes(query) ||
        item.methods.some(method => method.name.toLowerCase().includes(query))
      );
    }
    
    return filtered;
  }, [searchQuery, selectedCategory]);
  
  const handleCopyMethod = (methodSignature) => {
    navigator.clipboard.writeText(methodSignature);
    setCopiedMethod(methodSignature);
    toast.success('Copied to clipboard!');
    setTimeout(() => setCopiedMethod(null), 2000);
  };
  
  return (
    <div className={`min-h-screen relative transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-4 pt-8 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Scripting Reference
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Browse through 2000+ methods and classes
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search classes or methods..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 rounded-xl glass-card text-base border-primary/20 focus:border-primary/50 transition-all"
              />
            </div>
          </div>
          
          {/* Category Filter */}
          <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => setSelectedCategory(null)}
                variant={selectedCategory === null ? 'default' : 'outline'}
                className={cn(
                  "rounded-full transition-all duration-300",
                  selectedCategory === null 
                    ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                    : "glass-card hover:bg-primary/10"
                )}
              >
                All Categories
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className={cn(
                    "rounded-full transition-all duration-300",
                    selectedCategory === category 
                      ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                      : "glass-card hover:bg-primary/10"
                  )}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Results Count */}
          <div className="mb-4 text-sm text-muted-foreground animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Found {filteredData.length} classes
          </div>
          
          {/* Class List */}
          {!selectedClass ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              {filteredData.map((item, index) => (
                <div
                  key={item.className}
                  onClick={() => setSelectedClass(item)}
                  className="glass-card rounded-xl p-6 cursor-pointer hover:scale-[1.02] transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                      {item.className}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                  <p className="text-xs text-muted-foreground">
                    {item.methods.length} methods
                  </p>
                </div>
              ))}
            </div>
          ) : (
            /* Class Details */
            <div className="animate-slide-up">
              <Button
                onClick={() => setSelectedClass(null)}
                variant="outline"
                className="mb-6 glass-card hover:bg-primary/10"
              >
                ← Back to Classes
              </Button>
              
              <div className="glass-card rounded-2xl p-8 mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-3xl font-bold mb-2 text-primary">
                      {selectedClass.className}
                    </h2>
                    <p className="text-muted-foreground">{selectedClass.category}</p>
                  </div>
                  <div className="px-4 py-2 rounded-full glass-card">
                    <span className="text-sm font-semibold">{selectedClass.methods.length} methods</span>
                  </div>
                </div>
              </div>
              
              {/* Methods List */}
              <div className="space-y-3">
                {selectedClass.methods.map((method, index) => (
                  <div
                    key={index}
                    className="glass-card rounded-xl p-5 hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <code className="text-sm font-mono text-primary break-all">
                          {method.name}
                        </code>
                        {method.description && (
                          <p className="text-sm text-muted-foreground mt-2">
                            {method.description}
                          </p>
                        )}
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleCopyMethod(method.name)}
                        className="shrink-0 hover:bg-primary/10"
                      >
                        {copiedMethod === method.name ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {filteredData.length === 0 && (
            <div className="text-center py-12 glass-card rounded-2xl">
              <p className="text-lg text-muted-foreground">No results found</p>
              <p className="text-sm text-muted-foreground mt-2">Try a different search term</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScriptingPage;