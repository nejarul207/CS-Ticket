# Customer Support Zone

A React-based Customer Support Zone application designed to display customer tickets, track progress, and manage ticket resolution with a modern, responsive interface.

## Features

- **Ticket Management**: Display and manage customer support tickets with priority levels
- **Status Tracking**: Track tickets through Open, In Progress, and Resolved states  
- **Interactive UI**: Click tickets to add them to the task status section
- **Toast Notifications**: Modern toast notifications using React-Toastify
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern Styling**: Clean, professional design with Tailwind CSS and gradient backgrounds
- **Real-time Updates**: Live count updates for In Progress and Resolved tickets

## Tech Stack

- React 18 with TypeScript
- Tailwind CSS for styling
- React-Toastify for notifications
- Lucide React for icons
- Vite for development and building

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open your browser to `http://localhost:5173`

## Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation bar with logo and menu
│   ├── Banner.tsx      # Statistics banner with gradients
│   ├── TicketCard.tsx  # Individual ticket card component
│   ├── TaskStatus.tsx  # Task management panel
│   └── Footer.tsx      # Footer component
├── data/
│   └── tickets.ts      # Sample ticket data (12 tickets)
├── types/
│   └── index.ts        # TypeScript interfaces
└── App.tsx             # Main application component
```

## How It Works

1. **View Tickets**: All customer tickets are displayed in a 2-column grid on the left side
2. **Add to Progress**: Click any ticket card to move it to the "In Progress" section
3. **Complete Tasks**: Click the "Complete" button to resolve tickets and move them to the resolved list
4. **Track Progress**: The banner shows real-time counts of In Progress and Resolved tickets
5. **Toast Notifications**: Get instant feedback for all actions with stylish toast messages

## React Fundamentals - FAQ

### What is JSX, and why is it used?

JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It's used in React for several reasons:

- **Declarative**: Makes it easier to describe what the UI should look like
- **Familiar**: HTML-like syntax is familiar to developers
- **Component Integration**: Seamlessly integrates with React components
- **Type Safety**: When used with TypeScript, provides compile-time type checking

Example:
```jsx
const Welcome = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};
```

### What is the difference between State and Props?

**State**:
- Internal data that belongs to a component
- Can be changed/updated by the component itself
- Triggers re-rendering when updated
- Initialized and managed within the component

**Props**:
- External data passed to a component from its parent
- Read-only (immutable) within the component
- Used to pass data and event handlers down the component tree
- Cannot be modified by the receiving component

Example:
```jsx
// Props - passed from parent
const TicketCard = ({ ticket, onAddToProgress }) => {
  // State - internal to this component
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {ticket.title} {/* Using props */}
    </div>
  );
};
```

### What is the useState hook, and how does it work?

`useState` is a React Hook that lets you add state variables to functional components. It returns an array with two elements:

1. **Current state value**
2. **Function to update the state**

How it works:
- Takes an initial state value as argument
- Returns current state and setter function
- When state is updated, component re-renders
- State updates are asynchronous and batched

Example:
```jsx
const [tickets, setTickets] = useState(initialTickets);
const [count, setCount] = useState(0);

// Update state
setCount(count + 1);
setTickets([...tickets, newTicket]);
```

### How can you share state between components in React?

There are several ways to share state between components:

1. **Lifting State Up**: Move shared state to the nearest common ancestor
2. **Props Drilling**: Pass state down through props
3. **Context API**: For deeply nested components
4. **State Management Libraries**: Redux, Zustand, etc.

Example (Lifting State Up):
```jsx
const App = () => {
  const [tickets, setTickets] = useState([]);
  
  return (
    <div>
      <TicketList tickets={tickets} />
      <TaskStatus tickets={tickets} setTickets={setTickets} />
    </div>
  );
};
```

### How is event handling done in React?

React uses SyntheticEvents, which wrap native DOM events to provide consistent behavior across browsers:

- Event handlers are passed as props
- Use camelCase naming (onClick, onChange, etc.)
- Event object is automatically passed as the first parameter
- Prevent default behavior using `event.preventDefault()`

Example:
```jsx
const TicketCard = ({ ticket, onAddToProgress }) => {
  const handleClick = (event) => {
    event.preventDefault();
    onAddToProgress(ticket);
  };

  return (
    <div onClick={handleClick}>
      {ticket.title}
    </div>
  );
};

// Usage
<TicketCard 
  ticket={ticket} 
  onAddToProgress={(ticket) => console.log('Adding:', ticket)}
/>
```

## Features Implemented

✅ **Navbar**: Logo on left, navigation menu and "New Ticket" button on right  
✅ **Banner**: Gradient backgrounds showing In Progress and Resolved counts  
✅ **Ticket Cards**: 12 sample tickets with priority levels and customer info  
✅ **Task Status**: Right sidebar for managing ticket progress  
✅ **Complete Workflow**: Click tickets → Add to progress → Complete → Move to resolved  
✅ **Toast Notifications**: React-Toastify integration for all user actions  
✅ **Responsive Design**: Mobile-first approach with proper breakpoints  
✅ **Footer**: Multi-column footer with company information  

## License

This project is licensed under the MIT License.