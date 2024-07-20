import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Cambiado de useHistory a useNavigate
import '../styles/Dashboard.css';

const Dashboard: React.FC = () => {
    const [comment, setComment] = useState('');
    const [name, setName] = useState('');
    const [group, setGroup] = useState('full');
    const [allowedAddress, setAllowedAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate(); // Cambiado de useHistory a useNavigate

    const handleApply = () => {
        // Validar y aplicar lógica aquí
        // Luego navegar a la tabla de usuarios
        navigate('/user-table');
    };

    const handleCancel = () => {
        // Manejar lógica de cancelación aquí
    };

    return (
        <div className="dashboard-background">
            <div className="dashboard-container">
                <h2>MikroTik</h2>
                <div className="input-group">
                    <label htmlFor="enabled">Enabled</label>
                    <input type="checkbox" id="enabled" />
                </div>
                <div className="input-group">
                    <label htmlFor="comment">Comment</label>
                    <input
                        type="text"
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="group">Group</label>
                    <select
                        id="group"
                        value={group}
                        onChange={(e) => setGroup(e.target.value)}
                    >
                        <option value="full">full</option>
                        <option value="read">read</option>
                        <option value="write">write</option>
                    </select>
                </div>
                <div className="input-group">
                    <label htmlFor="allowedAddress">Allowed Address</label>
                    <input
                        type="text"
                        id="allowedAddress"
                        value={allowedAddress}
                        onChange={(e) => setAllowedAddress(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="lastLoggedIn">Last Logged In</label>
                    <input type="text" id="lastLoggedIn" disabled />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <div className="button-group">
                    <button onClick={handleCancel}>Cancel</button>
                    <button onClick={handleApply}>Apply</button>
                    <button onClick={handleApply}>OK</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
