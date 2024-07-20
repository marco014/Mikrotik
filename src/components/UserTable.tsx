import React from 'react';
import './UserTable.css';

const users = [
  { comment: "system default admin", name: "admin", group: "full", allowedAddress: "", lastLoggedIn: "2024-07-10 17:26:41" }
];

const UserTable: React.FC = () => {
  return (
    <div className="user-table-container">
      <h2>Usuarios</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Comment</th>
            <th>Name</th>
            <th>Group</th>
            <th>Allowed Address</th>
            <th>Last Logged In</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.comment}</td>
              <td>{user.name}</td>
              <td>{user.group}</td>
              <td>{user.allowedAddress}</td>
              <td>{user.lastLoggedIn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
