
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import { Card, CardContent } from '@/components/ui/card';
import { AccessibilityIcon } from 'lucide-react';

const LanguageSelection = () => {
  const navigate = useNavigate();
  
  const languages = [
    { name: 'English', code: 'en' },
    { name: 'हिन्दी', code: 'hi' },
    { name: 'తెలుగు', code: 'te' },
    { name: 'ಕನ್ನಡ', code: 'kn' },
    { name: 'മലയാളം', code: 'ml' },
    { name: 'ଓଡ଼ିଆ', code: 'or' },
    { name: 'मराठी', code: 'mr' },
  ];

  const handleLanguageSelect = (languageCode: string) => {
    // In a real app, we would store the language preference
    localStorage.setItem('preferredLanguage', languageCode);
    navigate('/user-details');
  };

  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <header className="py-6 px-4">
        <div className="max-w-lg mx-auto">
          <Logo size="medium" />
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-4 animate-fade-in">
        <Card className="max-w-lg w-full">
          <CardContent className="pt-6">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-3">Select Your Preferred Language</h1>
              <p className="text-muted-foreground">
                Choose a language for a personalized experience
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {languages.map(language => (
                <Button
                  key={language.code}
                  variant="outline"
                  className="h-16 text-lg hover:bg-primary/5 hover:border-primary"
                  onClick={() => handleLanguageSelect(language.code)}
                >
                  {language.name}
                </Button>
              ))}
              <Button
                variant="outline"
                className="h-16 text-lg col-span-2 sm:col-span-3 hover:bg-primary/5 hover:border-primary flex items-center justify-center"
                onClick={() => handleLanguageSelect('sign')}
              >
                <AccessibilityIcon className="mr-2 h-5 w-5" />
                Sign Language
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <footer className="py-4 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} AYUSAKHI Healthcare. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LanguageSelection;
