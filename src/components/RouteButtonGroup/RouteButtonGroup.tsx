import useRouteButtons from './useRouteButtonGroup';

const RouteButtonGroup = () => {
  const getButtons = useRouteButtons();
  const buttons = getButtons();

  return <>{buttons}</>;
};

export default RouteButtonGroup;
