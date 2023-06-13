import { ErrorInfo } from "react";

export interface IErrorBoundary{
    hasError:boolean;
    error:Error | null;
    errorInfo:ErrorInfo | null;
}