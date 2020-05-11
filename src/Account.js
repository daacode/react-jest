import React from "react";

const style = {
  width: "15rem",
  margin: "2rem 0rem 0rem 15rem",
};

const Account = ({ user }) => {
  return (
    <React.Fragment>
      <div key={user.username} style={style}>
        <h4>{user.name}</h4>
        <p>{user.email}</p>
        <hr />
      </div>
    </React.Fragment>
  );
};

export default Account;
