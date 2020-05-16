import React from 'react';
import { RouteProps, Route as RouteDom, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

interface MainRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<MainRouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  return (
    <RouteDom
      {...rest}
      render={() => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
            }}
          />
        );
      }}
    />
  );
};

export default Route;
