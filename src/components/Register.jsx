import { useState } from "react";
import { UserPlus } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// If you have a register function in firebase.js you can import it here
// import { register } from "../firebase/firebase.js";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    
    // Add your firebase registration logic here when needed
    console.log("Registration requested for:", email);
  };

  return (
    <div className="flex flex-col mx-auto gap-y-4 px-8 py-6 w-full max-w-md">
      <div className="flex flex-row gap-x-2 items-center mt-4 text-2xl font-bold text-black justify-center">
        <img src="../src/images/c.png" alt="Logo" className="w-8 h-8 object-contain" />
        <span>Cadence</span>
      </div>
      <h1 className="text-4xl font-bold mb-4 text-center">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 bg-zinc-200 text-black/80 border border-black/60 outline-none rounded-full"
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 bg-zinc-200 text-black/80 border border-black/60 outline-none rounded-full"
          placeholder="Password"
          required
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-4 bg-zinc-200 text-black/80 border border-black/60 outline-none rounded-full"
          placeholder="Confirm Password"
          required
        />
        <button
          className="bg-black/90 hover:bg-black/60 text-white font-bold py-3 px-12 rounded-full flex flex-row justify-center items-center gap-x-2 cursor-pointer w-full mt-2 transition-colors"
          type="submit"
        >
          <UserPlus size={20} /> Register
        </button>
      </form>
    </div>
  );
}