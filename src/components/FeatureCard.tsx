
import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="glass rounded-xl p-6 hover:border-sport-highlight/50 hover:shadow-lg hover:shadow-sport-highlight/10 transition-all">
      <div className="h-12 w-12 rounded-lg bg-sport-highlight/20 flex items-center justify-center text-sport-highlight mb-6">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
