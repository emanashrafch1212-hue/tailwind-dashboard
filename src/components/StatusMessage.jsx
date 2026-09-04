function StatusMessage({ message, type }) {
  if (!message) return null;

  let className = 'text-center py-3 px-4 mb-4 text-base font-medium rounded-2xl ';
  if (type === 'loading') className += 'message-loading';
  else if (type === 'error') className += 'message-error';
  else if (type === 'success') className += 'message-success';

  return <div id="statusMessage" className={className}>{message}</div>;
}

export default StatusMessage;