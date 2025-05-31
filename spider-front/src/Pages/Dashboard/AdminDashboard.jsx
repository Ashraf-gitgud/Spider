import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [games, setGames] = useState([]);
  const [apps, setApps] = useState([]);
  const [activeTab, setActiveTab] = useState('games');
  const [formData, setFormData] = useState({});
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchGames();
    fetchApps();
  }, []);

  const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });

  const fetchGames = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/games');
      setGames(response.data);
    } catch (error) {
      console.error('Error fetching games: ', error);
    }
  };

  const fetchApps = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/applications');
      setApps(response.data);
    } catch (error) {
      console.error('Error fetching applications: ', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axiosInstance.put(`/${activeTab}/${editingId}`, formData);
      } else {
        await axiosInstance.post(`/${activeTab}`, formData);
      }
      fetchGames();
      fetchApps();
      resetForm();
    } catch (error) {
      console.error('Error submitting form: ', error);
    }
  };

  const handleEdit = (item) => {
    setFormData(item);
    setEditingId(item._id);
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/${activeTab}/${id}`);
      fetchGames();
      fetchApps();
    } catch (error) {
      console.error('Error deleting item: ', error);
    }
  };

  const resetForm = () => {
    setFormData({});
    setEditingId(null);
  };

  const renderForm = () => {
  const fields = activeTab === 'games' 
    ? ['title', 'description', 'imageUrl', 'releaseDate', 'platform', 'storelink']
    : ['title', 'description', 'imageUrl', 'releaseDate', 'category', 'storelink'];

  const placeholders = {
    title: 'Enter title',
    description: 'Enter description',
    imageUrl: 'Enter image URL',
    releaseDate: 'YYYY-MM-DD',
    platform: 'Enter platform(s), comma-separated for multiple',
    category: 'Enter category',
    storelink: 'Enter store link'
  };

  return (
    <form onSubmit={handleSubmit} className="admin-form">
      {fields.map(field => (
        <div key={field} className="form-group">
          <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
          <input
            type={field === 'releaseDate' ? 'date' : 'text'}
            id={field}
            name={field}
            value={formData[field] || ''}
            onChange={handleInputChange}
            required
            placeholder={placeholders[field]}
          />
        </div>
      ))}
      <div className="form-actions">
        <button type="submit" className="submit-btn">{editingId ? 'Update' : 'Add'}</button>
        {editingId && <button type="button" onClick={resetForm} className="rollback-btn">Cancel</button>}
      </div>
    </form>
  );
};



  const renderList = () => {
    const items = activeTab === 'games' ? games : apps;
    return (
      <div className="item-list">
        {items.map(item => (
          <div key={item._id} className="item-card">
            <img src={item.imageUrl} alt={item.title} className="item-image" />
            <h3>{item.title}</h3>
            <p>{item.description.substring(0, 100)}...</p>
            <div className="item-actions">
              <button onClick={() => handleEdit(item)} className="edit-btn">Update</button>
              <button onClick={() => handleDelete(item._id)} className="delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="admin-dashboard">
      <div className="tab-buttons">
        <button 
          className={`tab-btn ${activeTab === 'games' ? 'active' : ''}`}
          onClick={() => setActiveTab('games')}
        >
          Games
        </button>
        <button 
          className={`tab-btn ${activeTab === 'applications' ? 'active' : ''}`}
          onClick={() => setActiveTab('applications')}
        >
          Applications
        </button>
      </div>
      <div className="dashboard-content">
        <h2>{activeTab === 'games' ? 'Games' : 'Applications'}</h2>
        {renderForm()}
        {renderList()}
      </div>
    </div>
  );
};

export default AdminDashboard;
