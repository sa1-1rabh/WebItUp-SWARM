import React, { useEffect, useState } from "react";

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);

  const fetchAllUsers = async () => {
    const response = await fetch("http://localhost:8000/all-users-details", {
      method: "GET",
      credentials: "include",
    });
    const res = await response.json();
    setAllUsers(res.data);
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div className="w-full h-full p-2">
      <table className="w-full">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Username</th>
            <th>Email</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user, idx) => {
            return (
              <tr
                className={
                  "text-center " +
                  (user.username == "ss" ? "text-red-500" : null)
                }
              >
                <td>{idx + 1}.</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
