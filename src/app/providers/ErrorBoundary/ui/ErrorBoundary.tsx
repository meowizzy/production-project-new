import React, { type ErrorInfo, type ReactNode, Suspense } from "react";
import { withTranslation } from "react-i18next";
import { PageError } from "widgets/PageError";

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor (props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    // eslint-disable-next-line n/handle-callback-err
    static getDerivedStateFromError (error: Error): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch (error: Error, errorInfo: ErrorInfo): void {
        console.log(error, errorInfo);
    }

    render (): ReactNode {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return <Suspense fallback={""}><PageError /></Suspense>;
        }

        return children;
    }
}

export default withTranslation()(ErrorBoundary);