import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import axios from "axios";
import { toast } from "react-toastify";

const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    if (response.status === 200) {
      setData(response.data);
    }
  };

  const onDeleteUser = async (id) => {
    if (window.confirm("Are You Sure That You Wanted To Delete That User Record")) {
      const response = await axios.delete(`http://localhost:5000/user/${id}`);
      if (response.status === 200){
        toast.success(response.data);
        getUsers();
      }
    }
  }

  console.log("data=>", data);

  return (
    <div style={{ marginTop: "150px" }}>
      <table className="style-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>FullName</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Contact</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.contact}</td>
                  <td>
                    <Link to={`/update/${item.id}`}>
                      <button className="btn btn-edit">Edit</button>
                    </Link>
                    <button className="btn btn-delete" onClick={() => onDeleteUser(item.id)}>Delete</button>
                    <Link to={`/view/${item.id}`}>
                      <button className="btn btn-view">View</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
