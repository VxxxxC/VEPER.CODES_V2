import { useRouteError } from "react-router";

const ErrorBoundary = () => {
  const error = useRouteError();

  return (
    <section>
      <h1>Errpr Boundary :</h1>
      <small>{error?.message}</small>
    </section>
  );
};

export default ErrorBoundary;
