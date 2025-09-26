export interface Ticket {
  id: string;
  title: string;
  description: string;
  customer: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Open' | 'In-Progress';
  createdAt: string;
}

export interface TaskStatusItem {
  id: string;
  title: string;
}