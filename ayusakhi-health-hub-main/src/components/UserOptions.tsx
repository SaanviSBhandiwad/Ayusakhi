
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Clock, Bell, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

const UserOptions = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const options = [
    { 
      name: 'Reports',
      icon: FileText,
      description: 'View your test reports',
      action: () => navigate('/reports'),
      color: 'bg-blue-100 text-blue-600'
    },
    { 
      name: 'History',
      icon: Clock,
      description: 'Past appointments & treatments',
      action: () => navigate('/history'),
      color: 'bg-purple-100 text-purple-600'
    },
    { 
      name: 'Reminders',
      icon: Bell,
      description: 'Medication & appointment reminders',
      action: () => navigate('/reminders'),
      color: 'bg-amber-100 text-amber-600'
    }
  ];
  
  // For MVP, these will just show a toast
  const handleOptionClick = (option: string) => {
    toast({
      title: `${option} feature`,
      description: `The ${option} feature will be implemented soon.`,
    });
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          {options.map((option) => (
            <Button 
              key={option.name}
              variant="outline" 
              className="w-full justify-start h-auto py-3 px-4 hover:bg-muted/50"
              onClick={() => handleOptionClick(option.name)}
            >
              <div className={`p-2 rounded-full mr-4 ${option.color}`}>
                <option.icon className="h-5 w-5" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-medium">{option.name}</h3>
                <p className="text-xs text-muted-foreground">{option.description}</p>
              </div>
              <ArrowRight className="h-4 w-4 opacity-50" />
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UserOptions;
