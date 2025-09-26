import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketCard from './components/TicketCard';
import TaskStatus from './components/TaskStatus';
import Footer from './components/Footer';
import { initialTickets } from './data/tickets';
import { Ticket, TaskStatusItem } from './types';

function App() {
  const [tickets, setTickets] = useState<Ticket[]>(initialTickets);
  const [inProgressTasks, setInProgressTasks] = useState<TaskStatusItem[]>([]);
  const [resolvedTasks, setResolvedTasks] = useState<TaskStatusItem[]>([]);

  const handleAddToProgress = (ticket: Ticket) => {
    // Check if task is already in progress
    const existingTask = inProgressTasks.find(task => task.id === ticket.id);
    if (existingTask) {
      toast.warning('This ticket is already in progress!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    // Add to in-progress tasks
    const newTask: TaskStatusItem = {
      id: ticket.id,
      title: ticket.title
    };
    
    setInProgressTasks(prev => [...prev, newTask]);
    
    // Update ticket status
    setTickets(prev => 
      prev.map(t => 
        t.id === ticket.id 
          ? { ...t, status: 'In-Progress' as const }
          : t
      )
    );

    toast.success('Ticket added to In Progress!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleCompleteTask = (taskId: string) => {
    // Find the task being completed
    const completedTask = inProgressTasks.find(task => task.id === taskId);
    if (!completedTask) return;

    // Remove from in-progress
    setInProgressTasks(prev => prev.filter(task => task.id !== taskId));
    
    // Add to resolved
    setResolvedTasks(prev => [...prev, completedTask]);
    
    // Remove from tickets list
    setTickets(prev => prev.filter(ticket => ticket.id !== taskId));

    toast.success('Task completed and moved to resolved!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Banner 
        inProgressCount={inProgressTasks.length} 
        resolvedCount={resolvedTasks.length} 
      />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Customer Tickets - Left Side */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Customer Tickets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tickets.map((ticket) => (
                <TicketCard
                  key={ticket.id}
                  ticket={ticket}
                  onAddToProgress={handleAddToProgress}
                />
              ))}
            </div>
            
            {tickets.length === 0 && (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-500 text-lg font-medium">All tickets have been resolved!</p>
                <p className="text-gray-400 text-sm mt-2">Great job on clearing the queue.</p>
              </div>
            )}
          </div>
          
          {/* Task Status - Right Side */}
          <div className="lg:col-span-1">
            <TaskStatus
              tasks={inProgressTasks}
              resolvedTasks={resolvedTasks}
              onCompleteTask={handleCompleteTask}
            />
          </div>
        </div>
      </div>
      
      <Footer />
      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastClassName="rounded-lg"
      />
    </div>
  );
}

export default App;