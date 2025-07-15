import React, { useState } from "react";
import KalorethPage from "./KalorethPage";
import "../styles/password.css";

const ProtectedKalorethPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Senha configurada - você pode alterar aqui
  const correctPassword = "teste";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Senha incorreta. Tente novamente.");
      setPassword("");
    }
  };

  if (isAuthenticated) {
    return <KalorethPage />;
  }

  return (
    <div className="password-container">
      <div className="password-box">
        <h2>Acesso Restrito</h2>
        <p>Digite a senha para acessar a página:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite a senha"
            className="password-input"
            autoFocus
          />
          <button type="submit" className="password-submit">
            Entrar
          </button>
        </form>
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

export default ProtectedKalorethPage;
