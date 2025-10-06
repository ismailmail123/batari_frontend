// import Routers from "./routes";
// import { Toaster } from "react-hot-toast";

// const App = () => {
//   return (
//     <div>
//       <Routers />    
//       <Toaster />
//     </div>
//   );
// };

// export default App;

import Routers from "./routes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        overflowY: 'auto',
        paddingRight: '20px',
      }}
      className="premium-scrollbar"
    >
      <style>
        {`
          .premium-scrollbar::-webkit-scrollbar {
            width: 20px;
          }
          .premium-scrollbar::-webkit-scrollbar-track {
            background: linear-gradient(180deg, 
              #FFFFFF 0%, 
              #F9FAFB 30%, 
              #F3F4F6 70%, 
              #FFFFFF 100%);
            border-radius: 25px;
            margin: 15px 0;
            border: 5px solid #F1F5F9;
            box-shadow: 
              inset 0 4px 8px rgba(0,0,0,0.05),
              0 2px 4px rgba(0,0,0,0.1);
          }
          .premium-scrollbar::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, 
              #10B981 0%, 
              #059669 25%, 
              #047857 50%, 
              #065F46 75%, 
              #064E3B 100%);
            border-radius: 25px;
            border: 6px solid transparent;
            background-clip: padding-box;
            box-shadow: 
              0 8px 25px rgba(16, 185, 129, 0.4),
              inset 0 4px 8px rgba(255,255,255,0.3),
              inset 0 -4px 8px rgba(0,0,0,0.2);
            position: relative;
          }
          .premium-scrollbar::-webkit-scrollbar-thumb::after {
            content: '';
            position: absolute;
            top: 2px;
            left: 2px;
            right: 2px;
            bottom: 2px;
            background: linear-gradient(90deg, 
              transparent 0%, 
              rgba(255,255,255,0.1) 50%, 
              transparent 100%);
            border-radius: 19px;
          }
          .premium-scrollbar::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(180deg, 
              #41a3d0ff 0%, 
              #3182ceff 25%, 
              #1181bdff 50%, 
              #1130bbff 75%, 
              #1e065fff 100%);
            box-shadow: 
              0 10px 30px rgba(52, 211, 153, 0.5),
              inset 0 4px 8px rgba(255,255,255,0.4),
              inset 0 -4px 8px rgba(0,0,0,0.2);
          }
          .premium-scrollbar::-webkit-scrollbar-button {
            height: 20px;
            background: linear-gradient(180deg, #F8FAFC, #E2E8F0);
            border: 5px solid transparent;
            background-clip: padding-box;
            border-radius: 10px;
          }
          .premium-scrollbar::-webkit-scrollbar-button:hover {
            background: linear-gradient(180deg, #E2E8F0, #CBD5E1);
          }
          .premium-scrollbar::-webkit-scrollbar-button:single-button:decrement {
            border-bottom: 2px solid #64748B;
          }
          .premium-scrollbar::-webkit-scrollbar-button:single-button:increment {
            border-top: 2px solid #64748B;
          }
        `}
      </style>
      <Routers />    
      <Toaster />
    </div>
  );
};

export default App;