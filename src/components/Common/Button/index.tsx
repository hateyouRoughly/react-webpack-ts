import React, { ReactNode } from "react";
import './style.css';

const Dashboard = ({title, icon, className, ...props}: { title: string, icon?: ReactNode, className?: string }) => {
  return (
    <div className={`button ${className}`} {...props}>
        
    </div>
  );
};

export default Dashboard;
