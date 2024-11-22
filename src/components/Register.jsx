import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const districtData = {
  "Dhaka": ["Adabor", "Badda", "Banani", "Bangshal", "Bimanbandar", "Cantonment", "Chawkbazar", "Demra", "Dhamrai", "Dhanmondi", "Dohar", "Gendaria", "Gulshan", "Hazaribagh", "Jatrabari", "Kadamtali", "Kafrul", "Kalabagan", "Kamrangirchar", "Keraniganj", "Khilkhet", "Khilgaon", "Lalbagh", "Mirpur", "Mohammadpur", "Motijheel", "Nawabganj", "New Market", "Pallabi", "Paltan", "Ramna", "Savar", "Shahbagh", "Shyampur", "Sutrapur", "Tejgaon", "Turag", "Uttara", "Uttarkhan"],
  "Chattogram": ["Anwara", "Banshkhali", "Boalkhali", "Chandanaish", "Fatikchhari", "Hathazari", "Lohagara", "Mirsharai", "Patiya", "Rangunia", "Raozan", "Sandwip", "Satkania", "Sitakunda", "Chattogram City", "Bakalia", "Kotwali", "Double Mooring", "Patenga"],
  "Khulna": ["Batiaghata", "Dacope", "Dumuria", "Dighalia", "Koyra", "Paikgachha", "Phultala", "Rupsa", "Terokhada", "Khulna Sadar", "Sonadanga", "Daulatpur"],
  "Rajshahi": ["Bagha", "Bagmara", "Charghat", "Durgapur", "Godagari", "Mohanpur", "Paba", "Puthia", "Tanore", "Boalia", "Rajpara", "Shah Makhdum"],
  "Sylhet": ["Balaganj", "Beanibazar", "Bishwanath", "Companiganj", "Fenchuganj", "Golapganj", "Gowainghat", "Jaintiapur", "Kanaighat", "Sylhet Sadar", "Zakiganj"],
  "Barishal": ["Agailjhara", "Babuganj", "Bakerganj", "Banaripara", "Gaurnadi", "Hizla", "Mehendiganj", "Muladi", "Wazirpur"],
  "Rangpur": ["Badarganj", "Gangachara", "Kaunia", "Mithapukur", "Pirgachha", "Pirganj", "Rangpur Sadar", "Taraganj"],
  "Mymensingh": ["Bhaluka", "Dhobaura", "Fulbaria", "Gaffargaon", "Gauripur", "Haluaghat", "Ishwarganj", "Muktagachha", "Nandail", "Phulpur"],
  "Cumilla": ["Barura", "Brahmanpara", "Burichang", "Chandina", "Chauddagram", "Daudkandi", "Debidwar", "Homna", "Laksam", "Monohorgonj", "Meghna", "Muradnagar", "Nangalkot", "Titas"],
  "Jessore": ["Abhaynagar", "Bagherpara", "Chaugachha", "Jhikargachha", "Keshabpur", "Manirampur", "Sharsha"],
  "Cox's Bazar": ["Chakaria", "Kutubdia", "Maheshkhali", "Pekua", "Ramu", "Teknaf", "Ukhia"],
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
  });
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    createUser(formData.email, formData.password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const updateThanas = (e) => {
    const selectedDistrict = e.target.value;
    setFormData((prev) => ({ ...prev, district: selectedDistrict, thana: "" }));
    setThanas(districtData[selectedDistrict] || []);
  };

  return (
    <div className="hero bg-base-200 w-f">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register Now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-lg shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
              <button
                type="button"
                onClick={handleShowPassword}
                className="btn btn-xs absolute right-4 top-12"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm your password"
                className="input input-bordered"
                required
              />
              <button
                type="button"
                onClick={handleShowConfirmPassword}
                className="btn btn-xs absolute right-4 top-12"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {error && <div className="text-red-600 mt-2">{error}</div>}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">District</span>
              </label>
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
            {formData.district && (
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Thana</span>
                </label>
                <select
                  name="thana"
                  value={formData.thana}
                  onChange={handleInputChange}
                  className="select select-bordered"
                  required
                >
                  <option value="">Select a thana</option>
                  {thanas.map((thana, index) => (
                    <option key={index} value={thana}>
                      {thana}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Village/House No./Holing No.</span>
              </label>
              <input
                type="text"
                name="village"
                value={formData.village}
                onChange={handleInputChange}
                placeholder="Enter your village"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/login" className="font-bold text-blue-600">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
