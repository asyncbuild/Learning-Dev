import { useDebounce } from "./hooks/useDebounce";
function App() {

  function sendDataToBackeend(){
    fetch('api.amazon.com/search/')
  }
  
  const debouncedFunction = useDebounce(sendDataToBackeend,200);
  return (
    <div>
      <input type="text" onChange={debouncedFunction} />
    </div>
  )
}

export default App
