import React from 'react';

import { PureTaskList } from './TaskList';
import {
  defaultTasks,
  withPinnedTasks,
  loadingTasks,
  emptyTasks,
} from '../dummyData/taskList';

export default {
  component: PureTaskList,
  title: 'TaskList',
  decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>],
};

const Template = (props) => <PureTaskList {...props} />;

export const Default = () => <Template {...defaultTasks} />;
export const WithPinnedTasks = () => <Template {...withPinnedTasks} />;
export const Loading = () => <Template {...loadingTasks} />;
export const Empty = () => <Template {...emptyTasks} />;
