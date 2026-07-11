import AppointmentForm from "@/components/AppointmentForm";
import ChatbotCard from "@/components/ChatbotCard";
import DietPlanner from "@/components/DietPlanner";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import UserOptions from "@/components/UserOptions";
import { useToast } from "@/hooks/use-toast";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import { auth, db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

const Dashboard = () => {
  const { toast } = useToast();
  const [userName, setUserName] = useState("User");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "AYUSAKHI - Dashboard";

    const fetchUserProfile = async () => {
      try {
        const user = auth.currentUser;
        if (!user) return;

        const userRef = doc(db, "users", user.uid);
        const snap = await getDoc(userRef);

        if (snap.exists()) {
          const data = snap.data();
          if (data.name) {
            setUserName(data.name.split(" ")[0]); // First name only
          }
        }
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const carouselImages = [
    {
      title: "Health Checkup Packages",
      description: "Comprehensive health packages starting at ₹1999",
      color: "from-blue-500 to-indigo-600",
      action: () =>
        toast({
          title: "Health Checkups",
          description: "View our comprehensive health checkup packages",
        }),
    },
    {
      title: "Pregnancy Care",
      description: "Specialized care for expecting mothers",
      color: "from-pink-400 to-rose-500",
      action: () =>
        toast({
          title: "Pregnancy Care",
          description: "View our pregnancy care services and packages",
        }),
    },
    {
      title: "Mental Wellness",
      description: "Talk to our certified mental health professionals",
      color: "from-green-400 to-teal-500",
      action: () =>
        toast({
          title: "Mental Wellness",
          description: "Connect with our mental health professionals",
        }),
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <NavBar userName={userName} />

      {/* Banner Carousel */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Carousel className="w-full">
          <CarouselContent>
            {carouselImages.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="border-0 overflow-hidden">
                    <CardContent className="p-0">
                      <div
                        className={`bg-gradient-to-r ${item.color} text-white p-8 sm:p-10 rounded-xl`}
                      >
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-2">
                              {item.title}
                            </h3>
                            <p className="text-sm sm:text-base opacity-90">
                              {item.description}
                            </p>
                          </div>
                          <Button
                            className="mt-4 sm:mt-0 bg-white/20 hover:bg-white/30 text-white"
                            onClick={item.action}
                          >
                            Learn More
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="space-y-6">
            <AppointmentForm />
            <UserOptions />
          </div>

          {/* Right column */}
          <div className="md:col-span-2 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <DietPlanner />
              <ChatbotCard />
            </div>

            {/* Premium Preview */}
            <Card className="border-2 border-dashed border-primary/40 bg-gradient-to-br from-white to-primary/5">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-bold text-primary">
                    Upgrade to Premium
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Get access to personalized AI chatbot, exclusive diet plans,
                    and up to 20% discount on appointments
                  </p>
                  <Button
                    className="bg-gradient-to-r from-primary to-accent"
                    onClick={() =>
                      toast({
                        title: "Premium Features",
                        description: "Premium features coming soon!",
                      })
                    }
                  >
                    View Premium Benefits
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

