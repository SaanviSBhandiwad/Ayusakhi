
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from "@/hooks/use-toast";

const DietPlanner = () => {
  const { toast } = useToast();
  
  const dietTypes = [
    { 
      id: 'pregnancy', 
      name: 'Pregnancy Diet',
      description: 'Month-wise diet plans for pregnant women with precautionary items and purchase links.'
    },
    { 
      id: 'keto', 
      name: 'Keto Diet',
      description: 'High-fat, low-carb diet plans to help your body burn fat for energy.'
    },
    { 
      id: 'intermittent', 
      name: 'Intermittent Fasting',
      description: 'Eating patterns where you cycle between periods of eating and fasting.'
    },
    { 
      id: 'carnivore', 
      name: 'Carnivore Diet',
      description: 'Animal products-focused diet with limited or no plant foods.'
    },
    { 
      id: 'sirtfood', 
      name: 'Sirtfood Diet',
      description: 'Diet focusing on foods rich in sirtuins to boost metabolism and reduce inflammation.'
    }
  ];

  const handleDietPlanClick = (dietType: string) => {
    toast({
      title: `${dietType} Plan`,
      description: `The detailed ${dietType} plan will be available soon.`,
    });
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl">Diet Planner</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <Tabs defaultValue="pregnancy">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="pregnancy">Pregnancy</TabsTrigger>
            <TabsTrigger value="weight-loss">Weight Loss</TabsTrigger>
            <TabsTrigger value="specialized">Specialized</TabsTrigger>
          </TabsList>
          
          <TabsContent value="pregnancy" className="mt-0">
            <Card className="border-0 shadow-none">
              <CardContent className="p-0">
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Monthly diet plans for expecting mothers with recommended nutrition and precautionary items.
                  </p>
                  <Button 
                    onClick={() => handleDietPlanClick('Pregnancy')}
                    className="w-full"
                  >
                    View Pregnancy Diet Plans
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="weight-loss" className="mt-0">
            <Card className="border-0 shadow-none">
              <CardContent className="p-0">
                <div className="space-y-3">
                  <div className="grid grid-cols-1 gap-3">
                    {['Keto Diet', 'Intermittent Fasting'].map(diet => (
                      <Button 
                        key={diet}
                        variant="outline"
                        onClick={() => handleDietPlanClick(diet)}
                        className="justify-start h-auto py-3"
                      >
                        <div className="text-left">
                          <p className="font-medium">{diet}</p>
                          <p className="text-xs text-muted-foreground">
                            {diet === 'Keto Diet' 
                              ? 'High-fat, low-carb meal plans' 
                              : 'Strategic eating & fasting windows'}
                          </p>
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="specialized" className="mt-0">
            <Card className="border-0 shadow-none">
              <CardContent className="p-0">
                <div className="space-y-3">
                  <div className="grid grid-cols-1 gap-3">
                    {['Carnivore Diet', 'Sirtfood Diet'].map(diet => (
                      <Button 
                        key={diet}
                        variant="outline"
                        onClick={() => handleDietPlanClick(diet)}
                        className="justify-start h-auto py-3"
                      >
                        <div className="text-left">
                          <p className="font-medium">{diet}</p>
                          <p className="text-xs text-muted-foreground">
                            {diet === 'Carnivore Diet' 
                              ? 'Animal product-focused nutrition' 
                              : 'Sirtuin-activating food diet'}
                          </p>
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default DietPlanner;
