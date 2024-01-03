import Alert from 'react-bootstrap/Alert';

function AlertWarning({ alertText }) {
  return (
    <>
      {[
        'warning',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          {alertText}
        </Alert>
      ))}
    </>
  );
}

export default AlertWarning;