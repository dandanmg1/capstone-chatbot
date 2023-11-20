// import React, { useState, useEffect } from 'react';

// const App = () => {
//   const [value, setValue] = useState('');
//   const [message, setMessage] = useState(null);
//   const [previousChats, setPreviousChats] = useState([]);
//   const [currentTitle, setCurrentTitle] = useState(null);

//   const createNewChat = () => {
//     setMessage(null);
//     setValue('');
//     setCurrentTitle(null);
//   };

//   const handleClick = (uniqueTitle) => {
//     setCurrentTitle(uniqueTitle);
//     setMessage(null);
//     setValue('');
//   };

//   const getMessages = async () => {
//     const options = {
//       method: 'POST',
//       body: JSON.stringify({
//         message: value,
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };

//     try {
//       const response = await fetch('http://localhost:8000/completions', options);
//       const data = await response.json();

//       console.log('OpenAI API Response:', data);

//       if (data.error) {
//         return window.alert('Please try again later');
//       }

//       // Extract the generated message from the API response
//       const generatedMessage = data.choices[0].message.content;

//       // Update the state with the generated message
//       setMessage({
//         role: 'AI', // Assuming 'AI' as the role for generated messages
//         content: generatedMessage,
//       });

//       // Update the previous chats state with the user's input and the generated message
//       setPreviousChats((prevChats) => [
//         ...prevChats,
//         {
//           title: currentTitle,
//           role: 'user',
//           content: value,
//         },
//         {
//           title: currentTitle,
//           role: 'AI',
//           content: generatedMessage,
//         },
//       ]);

//       // Clear the input field
//       setValue('');

//     } catch (error) {
//       console.error('Error in fetch:', error);
//     }
//   };

//   useEffect(() => {
//     if (!currentTitle && value && message) {
//       setCurrentTitle(value);
//     }
//     if (currentTitle && value && message) {
//       setPreviousChats((prevChats) => [
//         ...prevChats,
//         {
//           title: currentTitle,
//           role: 'user',
//           content: value,
//         },
//         {
//           title: currentTitle,
//           role: 'AI',
//           content: message.content,
//         },
//       ]);
//     }
//   }, [message, currentTitle, value]);

//   const currentChat = previousChats.filter((chatMessage) => chatMessage.title === currentTitle);
//   const uniqueTitles = Array.from(new Set(previousChats.map((previousChat) => previousChat.title)));

//   return (
//     <div className="app">
//       <section className="side-bar">
//         <button onClick={createNewChat}>+ New Chat</button>
//         <ul className="history">
//           {uniqueTitles?.map((uniqueTitle, index) => (
//             <li key={index} onClick={() => handleClick(uniqueTitle)}>
//               {uniqueTitle}
//             </li>
//           ))}
//         </ul>
//         <nav>
//           <p>Made by Innergy</p>
//         </nav>
//       </section>
//       <section className="main">
//         {!currentTitle && <h1>InnergyGPT</h1>}
//         <ul className="feed">
//           {currentChat?.map((chatMessage, index) => (
//             <li key={index}>
//               <p className="role">{chatMessage.role}</p>
//               <p>{chatMessage.content}</p>
//             </li>
//           ))}
//         </ul>
//         <div className="bottom-section">
//           <div className="input-container">
//             <input value={value} onChange={(e) => setValue(e.target.value)} />
//             <div id="submit" onClick={getMessages}>
//               ➢
//             </div>
//           </div>
//           <p className="info">
//             Chat GPT Mar 14 Version. Free Research Preview. Our goal is to make AI systems more natural and safe to interact with.
//             Your feedback will help us improve.
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default App;
