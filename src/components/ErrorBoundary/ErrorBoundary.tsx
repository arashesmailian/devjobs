import React, {Component} from 'react'
import {Link, Navigate} from 'react-router-dom'
import {IErrorBoundary} from '@typings/IErrorBoundary'
import NotFoundPage from '../../pages/NotFoundPage'

class ErrorBoundary extends Component<any> {
  // constructor(props: any) {
  //   super(props)

  //   this.state = {
  //     hasError: false,
  //     error: null,
  //     errorInfo: null,
  //   }
  // }
  // componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
  //   console.log(error)
  //   this.setState({
  //     hasError: true,
  //     error: error,
  //     errorInfo: errorInfo,
  //   })
  // }

  // render(): React.ReactNode {
  //   if (this.state.hasError) return <div>oops!</div>
  //   return this.props.children
  // }
  state = {hasError: false}
  static getDerivedStateFromError() {
    return {hasError: true}
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log('ErrorBoundary caught an error', error, errorInfo)
  }

  render(): any {
    if (this.state.hasError) {
      return <NotFoundPage />
    }

    return this.props.children
  }
}

export default ErrorBoundary
