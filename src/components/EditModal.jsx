import { useState, useEffect } from 'react';

function EditModal({ isOpen, user, onClose, onSave }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name || '');
      setEmail(user.email || '');
      setCourse(user.course || '');
    }
  }, [user]);

  if (!isOpen || !user) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !course) {
      alert('All fields are required.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email.');
      return;
    }
    onSave(user.id, name, email, course);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="modal-content">
        <div className="modal-header">
          <h2>
            <i className="fas fa-user-edit text-indigo-600 dark:text-indigo-400"></i>
            Edit User
          </h2>
          <button onClick={onClose} className="modal-close">&times;</button>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                <i className="fas fa-user text-indigo-500 mr-1"></i> Full Name
              </label>
              <input
                type="text"
                className="input-field"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                <i className="fas fa-envelope text-indigo-500 mr-1"></i> Email Address
              </label>
              <input
                type="email"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                <i className="fas fa-graduation-cap text-indigo-500 mr-1"></i> Course
              </label>
              <input
                type="text"
                className="input-field"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              />
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2.5 rounded-2xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <i className="fas fa-times mr-1"></i> Cancel
              </button>
              <button type="submit" className="flex-1 btn-primary">
                <i className="fas fa-save mr-1"></i> Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditModal;