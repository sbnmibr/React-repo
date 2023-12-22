import React from "react";
import Table from "../../assets/componets/table";

function HomePage({ users }) {
  return (
    <>
      <Table users={users} />
    </>
  );
}

export default HomePage;
