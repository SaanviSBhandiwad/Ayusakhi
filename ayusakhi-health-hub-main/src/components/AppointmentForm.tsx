
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useToast } from "@/hooks/use-toast";
import { format } from 'date-fns';
import { CalendarIcon, ArrowRight, Coins } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const AppointmentForm = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [timeSlot, setTimeSlot] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Mock user coins
  const userCoins = 750;
  const appointmentCost = 200;
  const discountPercentage = userCoins >= 1000 ? 10 : 0;
  const discountedCost = appointmentCost - (appointmentCost * discountPercentage / 100);
  
  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', 
    '11:00 AM', '11:30 AM', '12:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
    '05:00 PM', '05:30 PM', '06:00 PM'
  ];
  
  const handleBookAppointment = () => {
    if (!date || !timeSlot) {
      toast({
        title: "Missing information",
        description: "Please select both date and time for your appointment",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulating API call
    setTimeout(() => {
      setIsLoading(false);
      
      toast({
        title: "Proceeding to payment",
        description: `Appointment scheduled for ${format(date, 'PPP')} at ${timeSlot}`,
      });
      
      // In a real app, this would redirect to payment gateway
      window.location.href = "#payment";
    }, 1500);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl flex items-center">
          Book a Random Appointment
          <span className="ml-3 px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
            ₹{appointmentCost}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="date">Select Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => {
                    // Disable dates in the past and more than 30 days in the future
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    const thirtyDaysFromNow = new Date();
                    thirtyDaysFromNow.setDate(today.getDate() + 30);
                    return date < today || date > thirtyDaysFromNow;
                  }}
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="time">Select Time</Label>
            <Select onValueChange={setTimeSlot} value={timeSlot}>
              <SelectTrigger id="time">
                <SelectValue placeholder="Select a time slot" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((slot) => (
                  <SelectItem key={slot} value={slot}>
                    {slot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* User coins info */}
          <div className="bg-muted/50 rounded-md p-3 flex justify-between items-center">
            <div className="flex items-center">
              <Coins className="h-5 w-5 mr-2 text-yellow-600" />
              <span className="text-sm font-medium">Your coins: {userCoins}</span>
            </div>
            {discountPercentage > 0 && (
              <Badge variant="outline" className="bg-green-100 text-green-800">
                {discountPercentage}% discount applied
              </Badge>
            )}
          </div>
          
          {/* Final cost after discount */}
          {discountPercentage > 0 && (
            <div className="flex justify-between items-center text-sm">
              <span>Final cost:</span>
              <div>
                <span className="line-through text-muted-foreground mr-2">₹{appointmentCost}</span>
                <span className="font-bold">₹{discountedCost}</span>
              </div>
            </div>
          )}
          
          <Button 
            onClick={handleBookAppointment} 
            className="w-full"
            disabled={isLoading || !date || !timeSlot}
          >
            {isLoading ? 'Processing...' : (
              <>
                Proceed to Payment
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppointmentForm;
