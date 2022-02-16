import { Message } from 'semantic-ui-react'

const ToDo = ({ todoObject }) => {

  const users = ['Derek', 'Sean', 'Caleb', 'Jorden', 'Mel', 'Ricardo', 'Keven', 'BungaBall', 'Nomen', 'Kyle'];

  const { userId, title, done, id } = todoObject;

  return (
    <Message
      content={title}
      color={completed ? 'green' : 'red'}
      header={users[userId - 1]}
      icon={{
        name: done ? 'check square outline' : 'square outline',
      }}
    />
  );
}

export default ToDo