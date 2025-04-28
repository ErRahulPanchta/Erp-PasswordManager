import React, { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
    const ref = useRef();
    const passwordRef = useRef();
    const [form, setForm] = useState({ site: "", username: "", password: "" });
    const [passwordArray, setPasswordArray] = useState([]);

    const getPasswords = async () => {
        const res = await fetch('http://localhost:3000/');
        const data = await res.json();
        setPasswordArray(data);
    };

    useEffect(() => {
        getPasswords();
    }, []);

    const copyText = (text) => {
        navigator.clipboard.writeText(text);
        toast.success('Copied to clipboard!');
    };

    const showPassword = () => {
        passwordRef.current.type = passwordRef.current.type === 'password' ? 'text' : 'password';
        ref.current.src = passwordRef.current.type === 'password' ? 'icons/eye.png' : 'icons/eyecross.png';
    };

    const savePassword = async () => {
        if (form.site && form.username && form.password) {
            await fetch('http://localhost:3000/', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: form.id }) });
            const newPassword = { ...form, id: uuidv4() };
            await fetch('http://localhost:3000/', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newPassword) });
            setPasswordArray([...passwordArray, newPassword]);
            setForm({ site: "", username: "", password: "" });
            toast.success('Password saved!');
        } else {
            toast.error('Please fill all fields correctly.');
        }
    };

    const deletePassword = async (id) => {
        if (window.confirm('Do you really want to delete this password?')) {
            await fetch('http://localhost:3000/', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) });
            setPasswordArray(passwordArray.filter(item => item.id !== id));
            toast.success('Password deleted!');
        }
    };

    const editPassword = (id) => {
        const toEdit = passwordArray.find(item => item.id === id);
        setForm({ ...toEdit });
        setPasswordArray(passwordArray.filter(item => item.id !== id));
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <>
            <ToastContainer />
            <div className="p-5 max-w-5xl mx-auto">
                <h1 className="text-4xl text-center font-bold mb-4">
                    <span className="text-green-500">&lt;</span>Pass<span className="text-green-500">OP/&gt;</span>
                </h1>
                <p className="text-center text-green-800 mb-8">Your Personal Password Manager</p>
                <div className="flex flex-col gap-4 mb-8">
                    <input type="text" name="site" value={form.site} onChange={handleChange} placeholder="Website URL" className="rounded-full p-2 border border-green-500" />
                    <input type="text" name="username" value={form.username} onChange={handleChange} placeholder="Username" className="rounded-full p-2 border border-green-500" />
                    <div className="relative">
                        <input ref={passwordRef} type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" className="rounded-full p-2 border border-green-500 w-full" />
                        <img ref={ref} onClick={showPassword} src="icons/eye.png" alt="toggle password" className="w-7 absolute right-3 top-2 cursor-pointer" />
                    </div>
                    <button onClick={savePassword} className="bg-green-500 hover:bg-green-400 text-white rounded-full p-2 mt-2 w-1/3 mx-auto">Save Password</button>
                </div>

                <h2 className="text-2xl font-bold mb-2">Saved Passwords</h2>
                {passwordArray.length === 0 ? <p>No passwords saved yet.</p> : (
                    <table className="w-full bg-white shadow rounded-md overflow-hidden">
                        <thead className="bg-green-700 text-white">
                            <tr>
                                <th className="p-2">Site</th>
                                <th className="p-2">Username</th>
                                <th className="p-2">Password</th>
                                <th className="p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {passwordArray.map((item, idx) => (
                                <tr key={idx} className="text-center border-b">
                                    <td className="p-2">{item.site}</td>
                                    <td className="p-2">{item.username}</td>
                                    <td className="p-2">{"*".repeat(item.password.length)}</td>
                                    <td className="flex justify-center gap-2 p-2">
                                        <img src="copy.svg" alt="copy" className="w-6 cursor-pointer" onClick={() => copyText(item.password)} />
                                        <img src="/icons/edit.svg" alt="edit" className="w-6 cursor-pointer" onClick={() => editPassword(item.id)} />
                                        <img src="/icons/delete.svg" alt="delete" className="w-6 cursor-pointer" onClick={() => deletePassword(item.id)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
};

export default Manager;
