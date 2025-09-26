import React from 'react';
import { Ticket } from '../types';

interface TicketCardProps {
  ticket: Ticket;
  onAddToProgress: (ticket: Ticket) => void;
}

const TicketCard: React.FC<TicketCardProps> = ({ ticket, onAddToProgress }) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'Open' 
      ? 'bg-green-100 text-green-800 border-green-200'
      : 'bg-blue-100 text-blue-800 border-blue-200';
  };

  return (
    <div 
      className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-blue-300 hover:-translate-y-1"
      onClick={() => onAddToProgress(ticket)}
    >
      <div className="flex justify-between items-start mb-3">
        <span className="text-sm font-medium text-gray-500">{ticket.id}</span>
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(ticket.priority)}`}>
          {ticket.priority.toUpperCase()} PRIORITY
        </span>
      </div>
      
      <h3 className="font-semibold text-gray-900 mb-2 text-lg leading-tight">{ticket.title}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">{ticket.description}</p>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(ticket.status)}`}>
            {ticket.status}
          </span>
          <span className="text-sm text-gray-700 font-medium">{ticket.customer}</span>
        </div>
        <span className="text-xs text-gray-400">{ticket.createdAt}</span>
      </div>
    </div>
  );
};

export default TicketCard;