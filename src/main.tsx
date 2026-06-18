import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TasksList } from './TaskList.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TasksList />
  </StrictMode>,
);
