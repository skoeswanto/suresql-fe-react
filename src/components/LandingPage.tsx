import React from 'react';
import { Database, Shield, Zap, Code } from 'lucide-react';

const features = [
  { icon: Database, title: 'Easy and Fast Deployment', description: 'Get your database up and running in minutes, not hours.' },
  { icon: Shield, title: 'High Availability and Redundancy', description: 'Ensure your data is always accessible with our robust infrastructure.' },
  { icon: Zap, title: 'Customizable', description: 'Tailor your database to your specific needs with ease.' },
  { icon: Code, title: 'Easy Integration', description: 'Seamlessly integrate with your projects using our Go and JavaScript SDKs.' },
];

const pricingPlans = [
  { name: 'Free', price: '$0', features: ['1 Database', '100MB Storage', 'Community Support'] },
  { name: 'Basic', price: '$20', features: ['5 Databases', '1GB Storage', 'Email Support', 'Daily Backups'] },
  { name: 'Pro', price: '$50', features: ['Unlimited Databases', '10GB Storage', 'Priority Support', 'Hourly Backups', 'Custom Domain'] },
  { name: 'Enterprise', price: 'Contact Us', features: ['Custom Storage', 'Dedicated Support', 'SLA', 'On-Premise Options'] },
];

const LandingPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to SureSQL</h1>
          <p className="text-xl mb-8">The easiest way to deploy and manage your SQLite databases in the cloud</p>
          <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-full hover:bg-blue-100 transition duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose SureSQL?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold mb-6">{plan.price}<span className="text-sm font-normal">/month</span></p>
                <ul className="mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="mb-2 flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                  {plan.name === 'Enterprise' ? 'Contact Us' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;