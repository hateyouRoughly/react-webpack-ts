import React, { useEffect } from "react";

const ErrorComponent = ({ error, resetErrorBoundary }: { error: Error, resetErrorBoundary: any }) => {
    useEffect(() => {
        console.log(error);
    }, [])

    return <div className="text-error">{error.stack}</div>
}

export default ErrorComponent;