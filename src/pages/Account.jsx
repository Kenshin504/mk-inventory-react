import { useEffect } from "react";
import React, { useContext, useState } from "react";
import { UserContext } from "../components/UserContext";
import Layout from "../components/Layout";

function Account() {
  const {
    imageSrc,
    setImageSrc,
    fullName,
    setFullName,
    birthday,
    setBirthday,
    email,
    setEmail,
    phone,
    setPhone,
  } = useContext(UserContext);

  // Temporary states for form inputs
  const [tempFullName, setTempFullName] = useState(fullName);
  const [tempBirthday, setTempBirthday] = useState(birthday);
  const [tempEmail, setTempEmail] = useState(email);
  const [tempPhone, setTempPhone] = useState(phone);
  const [showUpload, setShowUpload] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImageSrc(reader.result); // Update image globally
        localStorage.setItem("profileImage", reader.result);
      };
    }
  };

  const handleSave = (event) => {
    event.preventDefault();

    // Save values only when "Save" is clicked
    setFullName(tempFullName);
    setBirthday(tempBirthday);
    setEmail(tempEmail);
    setPhone(tempPhone);

    // Save to localStorage
    localStorage.setItem("fullName", tempFullName);
    localStorage.setItem("birthday", tempBirthday);
    localStorage.setItem("email", tempEmail);
    localStorage.setItem("phone", tempPhone);

    alert("Profile information saved successfully!");
  };

  return (
    <Layout>
      <b className="content-header">Account</b>
      <div className="account-container">
        <form className="account-form" onSubmit={handleSave}>
          <b>Full Name</b>
          <p>
            <input
              type="text"
              className="editprofile-input"
              value={tempFullName}
              onChange={(e) => setTempFullName(e.target.value)}
            />
          </p>
          <b>Birthday</b>
          <p>
            <input
              type="date"
              className="calendar"
              value={tempBirthday}
              onChange={(e) => setTempBirthday(e.target.value)}
            />
          </p>
          <b>Email</b>
          <p>
            <input
              type="email"
              className="editprofile-input"
              value={tempEmail}
              onChange={(e) => setTempEmail(e.target.value)}
            />
          </p>
          <b>Phone Number</b>
          <p>
            <input
              type="text"
              className="editprofile-input"
              value={tempPhone}
              onChange={(e) => setTempPhone(e.target.value)}
            />
          </p>
          <input type="submit" className="saveprofile-button" value="Save" />
        </form>
        <div className="avatar-placeholder">
          <img
            src={imageSrc}
            className="avatar-placeholder"
            alt="Profile Picture"
          />
          <div className="user-dropdown">
            <button
              className="edit-button"
              style={{ border: "none", padding: "15px" }}
              onClick={() => setShowUpload(!showUpload)}
            >
              Change Picture
            </button>
            {showUpload && (
              <div className="dropdown-content">
                <input
                  type="file"
                  style={{ padding: "10px" }}
                  onChange={handleImageChange}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Account;
