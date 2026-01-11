import confetti from 'canvas-confetti';

function useConfetti() {
  const celebrate = () => {
    const duration = 5 * 1000; // 5 seconds
    const delayBetweenConfetti = 200; // 200ms delay between each confetti launch
    const end = Date.now() + duration;

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    // Function to launch confetti with a delay
    function launchConfetti() {
      if (Date.now() < end) {
        confetti({
          scalar: 1.5,
          spread: randomInRange(130, 180),
          particleCount: randomInRange(20, 40),
          origin: { y: -0.1 },
          startVelocity: -35,
          zIndex: 9999
        });

        // Schedule the next confetti launch
        setTimeout(launchConfetti, delayBetweenConfetti);
      }
    }

    // Start the confetti
    launchConfetti();
  };

  return { celebrate };
}

export default useConfetti;
