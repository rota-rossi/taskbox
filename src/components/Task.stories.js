import React from 'react';

import Task from './Task';
import { defaultTask, pinnedTask, archivedTask } from '../dummyData/tasks';

export default {
  component: Task,
  title: 'Task',
};

const Template = (props) => <Task {...props} />;

export const Default = () => <Template task={defaultTask} />;
export const Pinned = () => <Template task={pinnedTask} />;
export const Archived = () => <Template task={archivedTask} />;

// export const Default = Template.bind({});
// Default.args = {
//   task: {
//     id: '1',
//     title: 'Test Task',
//     state: 'TASK_INBOX',
//     updatedAt: new Date(2018, 0, 1, 9, 0),
//   },
// };

// export const Pinned = Template.bind({});
// Pinned.args = {
//   task: {
//     ...Default.args.task,
//     state: 'TASK_PINNED',
//   },
// };

// export const Archived = Template.bind({});
// Archived.args = {
//   task: {
//     ...Default.args.task,
//     state: 'TASK_ARCHIVED',
//   },
// };
