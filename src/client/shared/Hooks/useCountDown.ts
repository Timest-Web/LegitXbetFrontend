import { useState, useEffect } from 'react';

interface CountdownProps {
  initialSeconds: number;
  initialActive: boolean;
}

const useCountdown = ({ initialSeconds, initialActive }: CountdownProps) => {
  const [countdown, setCountdown] = useState(initialSeconds);
  const [countdownActive, setCountdownActive] = useState(initialActive);

  const startCountdown = () => {
    setCountdown(initialSeconds);
    setCountdownActive(true);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (countdownActive && countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prevCountdown) =>
          prevCountdown > 0 ? prevCountdown - 1 : 0
        );
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [countdown, countdownActive]);

  return { countdown, countdownActive, startCountdown };
};

export default useCountdown;
