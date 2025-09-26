import React from 'react';
import { TaskStatusItem } from '../types';

interface TaskStatusProps {
  tasks: TaskStatusItem[];
  resolvedTasks: TaskStatusItem[];
  onCompleteTask: (taskId: string) => void;
}

const TaskStatus: React.FC<TaskStatusProps> = ({ tasks, resolvedTasks, onCompleteTask }) => {
  return (
    <div className="bg-white rounded-xl border-2 border-dashed border-blue-300 p-6 h-fit">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Task Status</h2>
      
      {/* Active Tasks */}
      <div className="space-y-4 mb-8">
        {tasks.map((task) => (
          <div key={task.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="font-medium text-gray-900 mb-3 text-sm leading-relaxed">{task.title}</h3>
            <button
              onClick={() => onCompleteTask(task.id)}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors font-medium text-sm"
            >
              Complete
            </button>
          </div>
        ))}
        
        {tasks.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <p className="text-sm">Click on a ticket to add it here</p>
          </div>
        )}
      </div>

      {/* Resolved Tasks Section */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Resolved Task</h3>
        {resolvedTasks.length === 0 ? (
          <p className="text-gray-500 text-center py-4 text-sm">No resolved tasks yet.</p>
        ) : (
          <div className="space-y-2">
            {resolvedTasks.slice(-5).map((task) => (
              <div key={task.id} className="bg-green-50 rounded-lg p-3 border border-green-200">
                <p className="text-green-800 font-medium text-sm flex items-center">
                  <span className="w-4 h-4 mr-2 text-green-600">✓</span>
                  {task.title}
                </p>
              </div>
            ))}
            {resolvedTasks.length > 5 && (
              <p className="text-xs text-gray-500 text-center mt-2">
                +{resolvedTasks.length - 5} more resolved tasks
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskStatus;