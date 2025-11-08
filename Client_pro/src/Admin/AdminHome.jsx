import axios from "axios";
import React, { useEffect, useState } from "react";

import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";


const AdminHome = () => {
    // Sample data (you will replace this with API data later)
    // const dashboardStats = {
    //     totalTasks: 50,
    //     completedTasks: 30,
    //     partiallyCompleted: 10,
    //     pendingTasks: 10,
    //     totalUsers: 8,
    // };


    const [dashboardStats, setDashboardStats] = useState({
        totalTasks: 0,
        completedTasks: 0,
        partiallyCompleted: 0,
        pendingTasks: 0,
        totalUsers: 0,
    });

    const loadDashboardData = async () => {
        try {
            let api = `${import.meta.env.VITE_BACK_URL}/admin/dashboard-stats`;
            const response = await axios.get(api);
            console.log(response.data);
            setDashboardStats(response.data);

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        loadDashboardData();
    }, []);



    const pieData = [
        { name: "Completed", value: dashboardStats.completedTasks },
        { name: "Partially Completed", value: dashboardStats.partiallyCompleted },
        { name: "Pending", value: dashboardStats.pendingTasks },
    ];

    const COLORS = ["#4CAF50", "#FF9800", "#F44336"];

    const barData = [
        { name: "Users", users: dashboardStats.totalUsers, tasks: dashboardStats.totalTasks },
    ];

    return (
        <>
            <div style={{ padding: "20px" }}>
                <h1>Admin Dashboard</h1>

                {/* Stats Cards                                     boxes */}
                <div style={{
                    display: "flex",
                    gap: "20px",
                    marginTop: "20px",
                    flexWrap: "wrap",
                    // border: "1px solid black"
                }}> 
                    <div className="card">Total Tasks: {dashboardStats.totalTasks}</div>  
                    <div className="card">Completed Tasks: {dashboardStats.completedTasks}</div>
                    <div className="card">Partially Completed: {dashboardStats.partiallyCompleted}</div>
                    <div className="card">Pending Tasks: {dashboardStats.pendingTasks}</div>
                    <div className="card">Total Users: {dashboardStats.totalUsers}</div>
                </div>

                {/* Charts Section                      circle */}
                <div style={{
                    display: "flex",
                    marginTop: "40px",
                    gap: "40px",
                    flexWrap: "wrap",
                }}>
                    {/* Pie Chart */}
                    <div style={{ width: "400px", height: "350px", }}>
                        <h3>Task Distribution</h3>
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    dataKey="value"
                                    nameKey="name"
                                    outerRadius={120}
                                    label
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Bar Chart                                               bar building */}
                    <div style={{ width: "400px", height: "300px", }}>
                        <h3>User vs Tasks</h3>
                        <ResponsiveContainer>
                            <BarChart data={barData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="users" fill="#2196F3" />
                                <Bar dataKey="tasks" fill="#4CAF50" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

            </div>

            {/* Styling */}
            <style>{`
        .card {
          padding: 20px;
          background: #f4f4f4;
          border-radius: 10px;
          width: 200px;
          font-size: 18px;
          font-weight: bold;
          box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
        }
      `}</style>
        </>
    );
};

export default AdminHome;
