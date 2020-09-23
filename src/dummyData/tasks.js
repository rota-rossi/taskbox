export const defaultTask = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const pinnedTask = {
  ...defaultTask,
  state: 'TASK_PINNED',
};

export const archivedTask = {
  ...defaultTask,
  state: 'TASK_ARCHIVED',
};
