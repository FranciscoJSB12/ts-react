import { ReactNode } from "react";

type CounterProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>,
    children: ReactNode 
}

export const Counter = ({children, setCount}: CounterProps) => {
      return (
        <div>
            <p>{children}</p>
            <button onClick={() => setCount(prev => prev + 1)}>Add</button>
        </div>
    );
}