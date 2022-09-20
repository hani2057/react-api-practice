import React, { useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';

const App = () => {
  return <NewsList />;
};

// const App = () => {
//   const [data, setData] = useState(null);
//   // 아래와 같은 기능을 함
//   // const onClick () => {
//   //   axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
//   //     setData(response.data);
//   //   });
//   // };
//   const onClick = async () => {
//     try {
//       const response = await axios.get(
//         'https://newsapi.org/v2/top-headlines?country=kr&apiKey=c88685561b9a45de81f56862936c68a4',
//       );
//       setData(response.data);
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && (
//         <textarea
//           rows={7}
//           value={JSON.stringify(data, null, 2)}
//           readOnly={true}
//         />
//       )}
//     </div>
//   );
// };

export default App;
