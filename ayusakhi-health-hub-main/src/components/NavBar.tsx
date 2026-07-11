
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Phone, 
  LogOut, 
  UserRound, 
  Home as HomeIcon, 
  MessageCircle, 
  Info
} from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

interface NavBarProps {
  userName: string;
}

const NavBar: React.FC<NavBarProps> = ({ userName }) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchValue, setSearchValue] = useState('');
  
  // Mock user data (in a real app, this would come from context/state)
  const userInfo = JSON.parse(localStorage.getItem('userData') || '{}');
  const userCoins = 750; // Mock coin value
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Search",
      description: `Searching for: ${searchValue}`,
    });
    setSearchValue('');
  };
  
  const handleLogout = () => {
    // In a real app, would clear authentication state
    navigate('/');
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
  };
  
  const handleCallAssistant = () => {
    toast({
      title: "AI Voice Assistant",
      description: "Connecting to our customer care assistant...",
    });
  };
  
  const handleUpgradeToPremium = () => {
    navigate('/premium');
  };

  return (
    <nav className="sticky top-0 bg-white border-b z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo className="mr-4" />
          </div>
          
          {/* Center section */}
          <div className="flex flex-1 items-center justify-center lg:justify-start lg:ml-8">
            <form onSubmit={handleSearch} className="max-w-md w-full lg:max-w-xs relative">
              <Input
                type="search"
                placeholder="Search for doctors, symptoms..."
                className="pr-10"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <Button 
                type="submit" 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 top-0 h-full"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
            
            <div className="hidden lg:flex items-center ml-6 space-x-4">
              <Link to="/dashboard" className="text-sm font-medium flex items-center hover:text-primary">
                <HomeIcon className="h-4 w-4 mr-1" />
                Home
              </Link>
              <Link to="/about" className="text-sm font-medium flex items-center hover:text-primary">
                <Info className="h-4 w-4 mr-1" />
                About Us
              </Link>
              <Link to="/contact" className="text-sm font-medium flex items-center hover:text-primary">
                <MessageCircle className="h-4 w-4 mr-1" />
                Contact
              </Link>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-sm flex items-center"
                onClick={handleCallAssistant}
              >
                <Phone className="h-4 w-4 mr-1" />
                Call Assistant
              </Button>
            </div>
          </div>
          
          {/* Right section */}
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative">
                  <UserRound className="h-5 w-5 mr-1" />
                  <span className="hidden sm:inline-block">{userName}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-72">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <div className="px-2 py-2">
                  <p className="text-sm font-medium">{userInfo.name || userName}</p>
                  <p className="text-xs text-muted-foreground">
                    {userInfo.gender && userInfo.bloodGroup && 
                      `${userInfo.gender.charAt(0).toUpperCase() + userInfo.gender.slice(1)} • ${userInfo.bloodGroup}`
                    }
                  </p>
                </div>
                
                <DropdownMenuSeparator />
                
                <div className="px-2 py-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">AYUSAKHI Coins</span>
                    <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                      {userCoins} coins
                    </Badge>
                  </div>
                  <Button 
                    onClick={handleUpgradeToPremium}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                  >
                    Upgrade to PREMIUM
                  </Button>
                </div>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="cursor-pointer">
                    Profile Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      
      {/* Mobile menu for center section items */}
      <div className="lg:hidden border-t px-4 py-2">
        <div className="flex justify-between">
          <Link to="/dashboard" className="flex flex-col items-center text-xs">
            <HomeIcon className="h-5 w-5" />
            Home
          </Link>
          <Link to="/about" className="flex flex-col items-center text-xs">
            <Info className="h-5 w-5" />
            About
          </Link>
          <Link to="/contact" className="flex flex-col items-center text-xs">
            <MessageCircle className="h-5 w-5" />
            Contact
          </Link>
          <button 
            className="flex flex-col items-center text-xs"
            onClick={handleCallAssistant}
          >
            <Phone className="h-5 w-5" />
            Call
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
