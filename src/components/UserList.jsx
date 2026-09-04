import UserCard from './UserCard';

function UserList({ users, onEdit, onDelete }) {
  const localUsers = users.filter(u => u.source !== 'api');
  const apiUsers = users.filter(u => u.source === 'api');

  if (users.length === 0) {
    return (
      <div className="text-center py-16 text-gray-400 dark:text-gray-500">
        <div className="text-6xl mb-4">📭</div>
        <p className="text-xl font-semibold">No users found</p>
        <p className="text-sm mt-1">Add your first user using the form above</p>
      </div>
    );
  }

  return (
    <div id="userTableBody">
      {localUsers.length > 0 && (
        <>
          <div className="section-divider">
            📋 Local Users ({localUsers.length})
          </div>
          {localUsers.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              isLocal={true}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </>
      )}

      {apiUsers.length > 0 && (
        <>
          <div className="section-divider mt-4">
            🌐 API Users ({apiUsers.length})
          </div>
          {apiUsers.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              isLocal={false}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default UserList;