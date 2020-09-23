import { defaultTask } from './tasks';

export const defaultTasks = {
  tasks: [
    { ...defaultTask, id: '1', title: 'Task 1' },
    { ...defaultTask, id: '2', title: 'Task 2' },
    { ...defaultTask, id: '3', title: 'Task 3' },
    { ...defaultTask, id: '4', title: 'Task 4' },
    { ...defaultTask, id: '5', title: 'Task 5' },
    { ...defaultTask, id: '6', title: 'Task 6' },
  ],
};

export const withPinnedTasks = {
  tasks: [
    ...defaultTasks.tasks.slice(0, 5),
    { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
  ],
};

export const loadingTasks = {
  tasks: [],
  loading: true,
};

export const emptyTasks = {
  tasks: [],
  loading: false,
};
