import React, { useState, ReactNode, ReactElement } from 'react';
import { cn } from '../utils/cn';

interface TabProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  children: ReactNode;
  classList: string;
}

const Tab: React.FC<TabProps> = ({ label, isActive, classList, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex-1 py-2.5 px-4',
        classList,
        isActive && 'bg-black dark:bg-white text-white dark:text-primary cursor-default',
        !isActive && 'hover:text-muted-foreground'
      )}
    >
      {label}
    </button>
  );
};

interface TabContainerProps {
  children: ReactElement<TabProps>[];
  classList: string;
  title: boolean;
}

const TabContainer: React.FC<TabContainerProps> = ({ children, classList, title }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      {title && (
        <h2 className={'uppercase text-center text-[22px] 2xl:text-2xl font-bold mb-9'}>
          {activeTab === 0 || activeTab === 1 ? <span>Payment</span> : <span>History</span>}
        </h2>
      )}
      <div
        className={`${classList} flex items-stretch justify-between mx-auto mb-9 bg-black/15 dark:bg-white/15 max-w-5xl`}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            isActive: index === activeTab,
            onClick: () => setActiveTab(index),
          });
        })}
      </div>
      <div className="mt-4">
        {React.Children.map(children, (child, index) => {
          if (index === activeTab) {
            return <div>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export { Tab };
export { TabContainer };
