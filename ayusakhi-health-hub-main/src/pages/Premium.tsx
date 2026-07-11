
import React from 'react';
import NavBar from '@/components/NavBar';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';

const Premium = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem('userData') || '{}').name || 'User';
  
  const premiumFeatures = [
    'Visually enhanced interactive UI',
    'Personalized AI health assistant',
    'Custom pregnancy diet plans',
    '20% discount on product purchases',
    '10% discount on appointment fees',
    'Priority customer support',
  ];
  
  const handleUpgrade = () => {
    toast({
      title: "Premium Upgrade",
      description: "Payment gateway integration coming soon!",
    });
  };
  
  const handleContinueFree = () => {
    navigate('/dashboard');
  };
  
  return (
    <div className="min-h-screen bg-muted/30">
      <NavBar userName={userName} />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-3">
            Upgrade to <span className="gradient-text">AYUSAKHI Premium</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take your healthcare experience to the next level with premium features designed to provide personalized care and exclusive benefits.
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto border-2 border-primary/40 bg-gradient-to-br from-white to-primary/5 animate-fade-in">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">Premium Membership</CardTitle>
                <CardDescription>Unlock exclusive health benefits</CardDescription>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">₹899</div>
                <div className="text-xs text-muted-foreground">per year</div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {premiumFeatures.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3">
                    <Check className="h-3 w-3" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex-col space-y-3">
            <Button 
              onClick={handleUpgrade}
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
              size="lg"
            >
              Upgrade Now
            </Button>
            <Button 
              variant="link" 
              onClick={handleContinueFree}
              className="text-muted-foreground"
            >
              Continue with Free Plan
            </Button>
          </CardFooter>
        </Card>
        
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Questions about Premium? <a href="#" className="text-primary hover:underline">Contact our support team</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Premium;
