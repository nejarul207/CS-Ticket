import React from 'react';

interface BannerProps {
  inProgressCount: number;
  resolvedCount: number;
}

const Banner: React.FC<BannerProps> = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="px-6 py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-500/20"></div>
            <div className="relative z-10">
              <h2 className="text-lg font-medium mb-2">In-Progress</h2>
              <p className="text-5xl font-bold">{inProgressCount}</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-500/20"></div>
            <div className="relative z-10">
              <h2 className="text-lg font-medium mb-2">Resolved</h2>
              <p className="text-5xl font-bold">{resolvedCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;