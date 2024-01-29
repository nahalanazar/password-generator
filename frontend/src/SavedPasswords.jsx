const SavedPasswords = ({ savedPasswords }) => {
 

  if (savedPasswords.length === 0) {
    return null; 
  }

  return (
    <div>
      <h2>Saved Passwords</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {savedPasswords.map((password) => (
            <tr key={password._id}>
              <td>{password._id}</td>
              <td>{password.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SavedPasswords;
