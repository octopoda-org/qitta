import Task from 'types/task'
import * as React from 'react'
import Tasks from './tasks'

export interface OwnProps {
  tasks: Task[],
}

export default (props: OwnProps) => {

  const tasks = props.tasks

  return (
    <div id={ 'task-app' }>
      <h2>{ 'task app' }</h2>
      <Tasks value={ tasks } />
    </div>
  )
}
