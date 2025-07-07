
import React from 'react';

interface TwoColumnLayoutProps {
  leftColumn: React.ReactNode;
  rightColumn: React.ReactNode;
}

const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({ leftColumn, rightColumn }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8" style={{ height: 'calc(100vh - 120px)' }}>
      <aside className="w-full md:w-1/3 lg:w-1/4 bg-aoe-med/50 p-4 rounded-lg border border-gray-700 overflow-y-auto">
        {leftColumn}
      </aside>
      <main className="w-full md:w-2/3 lg:w-3/4 bg-aoe-med/50 p-6 rounded-lg border border-gray-700 overflow-y-auto">
        {rightColumn}
      </main>
    </div>
  );
};

export default TwoColumnLayout;
