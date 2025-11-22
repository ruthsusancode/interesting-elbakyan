import { useState } from "react";

export default function App() {
  const [role, setRole] = useState("");

  return (
    <div>
      <h1>Micro Project 6 - User Role Display</h1>

      <button onClick={() => setRole("admin")}>Admin</button>
      <button onClick={() => setRole("user")}>User</button>
      <button onClick={() => setRole("guest")}>Guest</button>

      <div style={{ marginTop: "20px" }}>
        {role && (
          <>
            {role === "admin && <p>You have full access.</p>"}
            {role === "user" && <p>You have limited access.</p>}
            {role === "guest" && <p>You can only view public content.</p>}
          </>
        )}
      </div>
    </div>
  );
}
