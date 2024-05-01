import React from "react";
import Button from '@common/Button'
import './style.css';

const Dashboard = ({className, ...props}: { className?: string }) => {
  return (
    <div className={`card-wrapper ${className}`} {...props}>
        <div className="card-container">
            <div className="row">
                <div className="col"><span className="card-title">Project Information</span></div>
                <div className="col d-flex justify-content-end"></div>
            </div>
        </div>
    </div>
  );
};

export default Dashboard;
