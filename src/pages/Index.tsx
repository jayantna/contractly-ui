
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, FileText, Shield, Wallet } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-contractly-blue to-contractly-purple py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Smart Contracts for Delivery Guarantees
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Contractly combines digital contract signing with blockchain enforcement,
              providing automated penalty payments when delivery deadlines are missed.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-contractly-teal hover:bg-contractly-teal/90"
                onClick={() => navigate('/templates')}
              >
                View Templates
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => navigate('/dashboard')}
              >
                Go to Dashboard
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-contractly-blue mb-12">
              How Contractly Works
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="mb-4 bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <FileText className="h-6 w-6 text-contractly-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-contractly-blue">
                  1. Create Contract
                </h3>
                <p className="text-gray-600">
                  Choose from our pre-designed templates and set delivery terms, 
                  penalties, and timeframes for your business.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="mb-4 bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-contractly-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-contractly-purple">
                  2. Stake Funds
                </h3>
                <p className="text-gray-600">
                  Brands stake funds to guarantee delivery commitments, 
                  ensuring customers are automatically compensated for delays.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="mb-4 bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Wallet className="h-6 w-6 text-contractly-teal" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-contractly-teal">
                  3. Automatic Enforcement
                </h3>
                <p className="text-gray-600">
                  Smart contracts automatically release penalty payments to 
                  customers' wallets if delivery deadlines are missed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-contractly-blue mb-4">
              Ready to guarantee your deliveries?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of D2C brands using Contractly to ensure customer satisfaction
              and build trust through guaranteed deliveries.
            </p>
            <Button
              size="lg"
              className="bg-contractly-purple hover:bg-contractly-purple/90"
              onClick={() => navigate('/create-contract')}
            >
              Create Your First Contract
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
