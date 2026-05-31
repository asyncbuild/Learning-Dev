import React from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from './store/counter';

function Value() {
  const count = useRecoilValue(counterAtom);
  return <p>Count: {count}</p>;
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom);
  return <button onClick={() => setCount(prev => prev - 1)}>Decrease</button>;
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom);
  return <button onClick={() => setCount(prev => prev + 1)}>Increase</button>;
}

function Parent() {
  return (
    <RecoilRoot>
      <Increase />
      <Decrease />
      <Value />
    </RecoilRoot>
  );
}

export default function App() {
  return <Parent />;
}