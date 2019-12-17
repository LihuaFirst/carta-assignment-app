import React from 'react';

class ErrorBoundary extends React.Component {
   constructor(props) {
     super(props);
     this.state = { hasError: false };
   }
 
   static getDerivedStateFromError(error) {
     // Update state so the next render will show the fallback UI.
     return { hasError: true };
   }
 
   componentDidCatch(error, errorInfo) {
      this.setState({hasError: true});

     // You can also log the error to an error reporting service
     // try https://sentry.io/welcome/
     // FIXME: pseudo-method 'logErrorToMyService' is not defined  no-undef
    //  logErrorToMyService(error, errorInfo);
   }
 
   render() {
     if (this.state.hasError) {
       // You can render any custom fallback UI
       return <h1>Something went wrong.</h1>;
     }
 
     return this.props.children; 
   }
 }

 export default ErrorBoundary;