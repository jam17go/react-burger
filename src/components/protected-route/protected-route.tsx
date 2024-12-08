import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

type TProtectedProps = {
  onlyUnAuth?: boolean;
  component: JSX.Element;
};

const Protected = ({ onlyUnAuth = false, component }: TProtectedProps): JSX.Element => {
  // @ts-ignore
  const isAuthChecked = useSelector((store) => store.user.isAuthChecked);
  // @ts-ignore
  const user = useSelector((store) => store.user.user);
  const location = useLocation();

  if (!isAuthChecked) {
    return <></>;
  }

  if (onlyUnAuth && user) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return component;
};

export const OnlyAuth = Protected;
export const OnlyUnAuth = ({ component }: Omit<TProtectedProps, "onlyUnAuth"> ): JSX.Element => (
  <Protected onlyUnAuth={true} component={component} />
);
