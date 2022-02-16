import { useEffect, useState } from "react";
import axios from "axios";
import { Divider } from "semantic-ui-react";
import { Message } from "semantic-ui-react";
// import listArray from "../todo_text_holder"
import TodoMessage from "./components/common/TodoMessage"


export default function Home() {
  
  const [list, setList] = useState([]);
  
  
  useEffect(async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setList(res.data);
  }, []);

  // const TodoList = ({ }) => {
  //   return (
  //     <Message
  //       content={list.title}
  //       color={list.completed ? "green" : "red"}
  //       header={users[list.userId - 1]}
  //       icon={{
  //         name: list.completed ? "check square outline" : "square outline",
  //       }}
  //     />
  //   );
  // };
  
  return (
    <TodoMessage list={item} key={item.id} />
        
    
    
    
    //   {list.map((item) => {
    //     return (
    //       <div key={item.id}>
    //         <p>
    //           <h1>{item.title}</h1> {users[item.userId - 1]}
    //         </p>
    //         <p>{`${item.completed}`}</p>
    //         <Divider />
    //       </div>
    //     );
    //   })}
    // </>
  );
}

// export default Home;
