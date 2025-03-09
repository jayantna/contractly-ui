import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FilePenLine, PlusSquare, LogIn } from 'lucide-react';
import { usePrivy } from '@privy-io/react-auth';

const Navbar = () => {
  const navigate = useNavigate();
  const { ready, authenticated, login, logout, user } = usePrivy();
  const disableLogin = !ready || (ready && authenticated);

  // Login function
  const handleLogin = async () => {
    await login();
    if (user) {
      console.log("User logged in", user?.email);
    }
  };

  // Logout function
  const handleLogout = async () => {
    await logout();
    console.log("User logged out");
  };


  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FilePenLine className="h-6 w-6 text-contractly-purple" />
          <h1 className="text-xl font-bold text-contractly-blue" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            Contractly
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            className="text-contractly-blue"
            onClick={() => navigate('/templates')}
          >
            Templates
          </Button>
          <Button
            variant="ghost"
            className="text-contractly-blue"
            onClick={() => navigate('/dashboard')}
          >
            Dashboard
          </Button>
          <Button
            variant="ghost"
            className="text-contractly-blue"
            onClick={() => navigate('/transactions')}
          >
            Transactions
          </Button>
          <Button
            variant="outline"
            className="text-contractly-purple border-contractly-purple"
            onClick={() => navigate('/create-contract')}
          >
            <PlusSquare className="h-4 w-4 mr-2" />
            New Contract
          </Button>


          {authenticated ? (<Button
            variant="default"
            className="bg-contractly-teal hover:bg-contractly-teal/90"
            onClick={handleLogout}
          >
            <LogIn className="h-4 w-4 mr-2" />
            Sign Out
          </Button>) : (<Button
            variant="default"
            className="bg-contractly-teal hover:bg-contractly-teal/90"
            onClick={handleLogin}
          >
            <LogIn className="h-4 w-4 mr-2" />
            Log In
          </Button>)}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;