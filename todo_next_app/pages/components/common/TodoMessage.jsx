import { Message } from 'semantic-ui-react'

const TodoMessage = (list) => {

  const users = [
    "Derek",
    "Sean",
    "Caleb",
    "Jorden",
    "Mel",
    "Ricardo",
    "Keven",
    "BungaBall",
    "Nomen",
    "Momo",
  ];

  const { userId, title, completed, id } = list;

  return <Message
  content={title}
    color={completed ? 'green' : 'red'}
    header={users[userId - 1]}
    icon={{
      name: completed ? 'check square outline' : 'square outline',
    }}
  />}

  export default TodoMessage