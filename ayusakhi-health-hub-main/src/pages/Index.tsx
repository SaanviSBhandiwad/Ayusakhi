
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { UserRound, Hospital } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  
  const handleUserTypeSelection = (type: 'patient' | 'hospital') => {
    navigate(`/login?type=${type}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-muted">
      <header className="py-6 px-4 flex justify-center">
        <Logo size="large" />
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="mb-8 text-center animate-fade-in">
          <h1 className="text-4xl font-bold mb-3">
            Welcome to <span className="gradient-text">AYUSAKHI</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Your trusted healthcare companion for comprehensive medical assistance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Card className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <UserRound className="mr-2 h-6 w-6 text-primary" />
                Patient
              </CardTitle>
              <CardDescription>
                Book appointments, manage your health records, and access personalized healthcare services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Access your medical history, book appointments with specialists, and get personalized
                health recommendations tailored to your needs.
              </p>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                onClick={() => handleUserTypeSelection('patient')}
              >
                Continue as Patient
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-2 hover:border-accent hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Hospital className="mr-2 h-6 w-6 text-accent" />
                Hospital
              </CardTitle>
              <CardDescription>
                Manage appointments, patient records, and staff scheduling from a centralized dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Streamline your hospital operations, manage patient data securely, and optimize staff schedules
                with our comprehensive hospital management system.
              </p>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                variant="outline"
                onClick={() => handleUserTypeSelection('hospital')}
              >
                Continue as Hospital
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>

      <footer className="py-6 text-center text-sm text-muted-foreground">
        <p>© {currentYear} AYUSAKHI Healthcare. Established 2023. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
