import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { randomGreeting } from '../redux/greeting';

const Greetings = () => {
  const greetings = useSelector((state) => state.greeting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(randomGreeting());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <h1>{greetings.greeting}</h1>
  );
};

export default Greetings;
