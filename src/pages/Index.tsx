
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, FileText, Shield, Wallet, CheckCircle, Scale, Zap, Clock, LockKeyhole } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-contractly-blue to-contractly-purple py-16 md:py-24 dark:from-contractly-blue dark:to-contractly-purple">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Smart Contracts with Automatic Enforcement
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Contractly combines digital contract signing with blockchain enforcement, 
              providing automated execution across various business agreements.
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
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-contractly-blue dark:text-white mb-12">
              How Contractly Works
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="mb-4 bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center">
                  <FileText className="h-6 w-6 text-contractly-blue dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-contractly-blue dark:text-blue-400">
                  1. Create Contract
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Choose from our pre-designed templates and set terms, 
                  conditions, and verification methods for your agreement.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="mb-4 bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-contractly-indigo dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-contractly-indigo dark:text-purple-400">
                  2. Stake Funds
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Parties stake funds to guarantee commitments, 
                  ensuring automatic compensation if terms aren't met.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="mb-4 bg-teal-100 dark:bg-teal-900/30 w-12 h-12 rounded-full flex items-center justify-center">
                  <Wallet className="h-6 w-6 text-contractly-teal dark:text-teal-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-contractly-teal dark:text-teal-400">
                  3. Automatic Enforcement
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Smart contracts automatically execute payments and penalties 
                  based on verified conditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-contractly-blue dark:text-white mb-12">
              Benefits of Smart Contract Enforcement
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-5 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="mb-3 text-contractly-indigo dark:text-indigo-400">
                  <Scale className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-2">Reduced Disputes</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Automated enforcement eliminates ambiguity and reduces the need for 
                  costly legal disputes.
                </p>
              </div>
              
              <div className="p-5 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="mb-3 text-contractly-teal dark:text-teal-400">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-2">Automated Compliance</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Contract terms execute automatically, ensuring all parties 
                  comply with their obligations.
                </p>
              </div>
              
              <div className="p-5 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="mb-3 text-blue-600 dark:text-blue-400">
                  <LockKeyhole className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-2">Increased Trust</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Build stronger business relationships with transparent, 
                  immutable contract terms.
                </p>
              </div>
              
              <div className="p-5 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="mb-3 text-green-600 dark:text-green-400">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-2">Cost Savings</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Eliminate intermediaries and reduce administrative overhead with 
                  self-executing contracts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-contractly-blue dark:text-white mb-12">
              Explore Use Cases
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="h-3 bg-blue-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">E-commerce Delivery</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Guarantee on-time deliveries with automatic compensation for delays, 
                    building customer trust and loyalty.
                  </p>
                  <div className="flex items-center text-sm text-blue-600 dark:text-blue-400">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Delivery contracts</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="h-3 bg-purple-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Professional Services</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Establish clear SLAs with clients and automate penalties or 
                    rewards based on measurable performance metrics.
                  </p>
                  <div className="flex items-center text-sm text-purple-600 dark:text-purple-400">
                    <FileText className="h-4 w-4 mr-1" />
                    <span>Service agreements</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="h-3 bg-green-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Software Development</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Create milestone-based contracts with automatic payment releases 
                    upon verification of development deliverables.
                  </p>
                  <div className="flex items-center text-sm text-green-600 dark:text-green-400">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    <span>Milestone contracts</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="h-3 bg-indigo-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Subscription Businesses</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Automate subscription management with guaranteed service levels 
                    and automatic refunds for interruptions.
                  </p>
                  <div className="flex items-center text-sm text-indigo-600 dark:text-indigo-400">
                    <Wallet className="h-4 w-4 mr-1" />
                    <span>Subscription contracts</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="h-3 bg-amber-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Property Leasing</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Secure rental agreements with automatic security deposit handling 
                    and penalty enforcement for late payments.
                  </p>
                  <div className="flex items-center text-sm text-amber-600 dark:text-amber-400">
                    <Shield className="h-4 w-4 mr-1" />
                    <span>Leasing contracts</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="h-3 bg-teal-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Creative Services</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Protect freelancers and clients with escrow-based contracts that 
                    release payments upon approved delivery of creative work.
                  </p>
                  <div className="flex items-center text-sm text-teal-600 dark:text-teal-400">
                    <FileText className="h-4 w-4 mr-1" />
                    <span>Delivery verification</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-contractly-blue dark:text-white mb-4">
              Ready to automate your agreements?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using Contractly to ensure compliance and build trust 
              through automatically enforced smart contracts.
            </p>
            <Button
              size="lg"
              className="bg-contractly-indigo hover:bg-contractly-indigo/90"
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
