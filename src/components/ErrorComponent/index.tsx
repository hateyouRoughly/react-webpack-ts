import React, { useEffect } from "react";

const ErrorComponent = ({ error, resetErrorBoundary }: { error: Error, resetErrorBoundary: any }) => {
    useEffect(() => {
        console.log(error);
    }, [])

    return <>{error.stack}</>
}

export default ErrorComponent;