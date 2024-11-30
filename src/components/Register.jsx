
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const districtData = {
  Dhaka: ["Adabor", "Badda", "Banani", "Bangshal", "Bimanbandar", "Cantonment", "Dhanmondi", "Gulshan", "Mirpur", "Savar"],
  Chattogram: ["Anwara", "Banshkhali", "Boalkhali", "Fatikchhari", "Hathazari", "Patenga", "Sandwip", "Satkania", "Sitakunda"],
  Khulna: ["Batiaghata", "Dacope", "Dumuria", "Koyra", "Paikgachha", "Phultala", "Terokhada"],
  Rajshahi: ["Bagha", "Bagmara", "Charghat", "Godagari", "Mohanpur", "Paba", "Tanore"],
  Sylhet: ["Balaganj", "Beanibazar", "Fenchuganj", "Golapganj", "Jaintiapur", "Kanaighat"],
};

const Register = () => {
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [thanas, setThanas] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    district: "",
    thana: "",
    village: "",
    termsAccepted: false,
  });
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const { password, confirmPassword, termsAccepted } = formData;

    // Password and terms validation
    if (!termsAccepted) {
      setError("Please accept our terms and conditions.");
      return;
    }
    if (password.length < 6) {
      setError("Password should be at least 6 characters.");
      return;
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError("Password must include uppercase, lowercase, and a special character.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError(""); // Clear any previous error
    createUser(formData.email, formData.password)
      .then(() => {
        e.target.reset();
        navigate("/login");
      })
      .catch((error) => setError("Registration failed: " + error.message));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const updateThanas = (e) => {
    const selectedDistrict = e.target.value;
    setFormData((prev) => ({ ...prev, district: selectedDistrict, thana: "" }));
    setThanas(districtData[selectedDistrict] || []);
  };

  return (
    <div className="hero bg-base-200 w-full">
      <div className="hero-content flex-col">
        <h1 className="text-center text-5xl font-bold">Register Now!</h1>
        <div className="card bg-base-100 w-full max-w-lg shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            {/* Name Field */}
            <div className="form-control">
              <label className="label">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="input input-bordered"
                required
              />
            </div>
            {/* Email Field */}
            <div className="form-control">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="input input-bordered"
                required
              />
            </div>
            {/* Phone Field */}
            <div className="form-control">
              <label className="label">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="input input-bordered"
                required
              />
            </div>
            {/* Password Field */}
            <div className="form-control relative">
              <label className="label">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="input input-bordered"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="btn btn-xs absolute right-4 top-12"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {/* Confirm Password Field */}
            <div className="form-control relative">
              <label className="label">Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="input input-bordered"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="btn btn-xs absolute right-4 top-12"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* District and Thana Selection */}
            <div className="form-control">
              <label className="label">District</label>
              <select
                name="district"
                value={formData.district}
                onChange={updateThanas}
                className="select select-bordered"
              >
                <option value="">Select a district</option>
                {Object.keys(districtData).map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
            {/* Thana Selection */}
            {thanas.length > 0 && (
              <div className="form-control">
                <label className="label">Thana</label>
                <select
                  name="thana"
                  value={formData.thana}
                  onChange={handleInputChange}
                  className="select select-bordered"
                >
                  <option value="">Select a thana</option>
                  {thanas.map((thana) => (
                    <option key={thana} value={thana}>
                      {thana}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Village Field */}
            <div className="form-control">
              <label className="label">Village</label>
              <input
                type="text"
                name="village"
                value={formData.village}
                onChange={handleInputChange}
                className="input input-bordered"
                required
              />
            </div>

            {/* Terms and Conditions */}
            <div className="form-control mt-4">
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleInputChange}
                  className="checkbox"
                />
                <span className="label-text ml-2">Accept terms and conditions</span>
              </label>
            </div>

            {/* Error Message */}
            {error && <div className="text-red-600 mt-2">{error}</div>}

            {/* Register Button */}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="font-bold text-blue-600">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

