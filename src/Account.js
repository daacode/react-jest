import React from "react";

const cardWidth = {
  width: "20rem",
};

const Account = ({ user }) => {
  return (
    <React.Fragment>
      <div key={user.username} className="card" style={cardWidth}>
        <h4>
          <p>{user.name}</p>
        </h4>
        {/* <div>
          <img src={user.image} alt={user.name} />
        </div> */}
        <p>{user.email}</p>
        <hr />
      </div>
    </React.Fragment>
  );
};

export default Account;
