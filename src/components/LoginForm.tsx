import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginForm.css';

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [ipAddress, setIpAddress] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('IP Address:', ipAddress);
        // Aquí puedes agregar la lógica de autenticación
        navigate('/dashboard');
    };

    return (
        <div className="login-form-background">
            <div className="login-form-container">
                <form onSubmit={handleSubmit}>
                    <h2>Iniciar sesión</h2>
                    <div className="input-group">
                        <label htmlFor="username">Nombre del usuario</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="ipAddress">Address o MAC</label>
                        <input
                            type="text"
                            id="ipAddress"
                            value={ipAddress}
                            onChange={(e) => setIpAddress(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Iniciar sesión</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
