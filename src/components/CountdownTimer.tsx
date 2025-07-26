import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  // Set contest end date (30 days from now for demo)
  const contestEndDate = new Date();
  contestEndDate.setDate(contestEndDate.getDate() + 30);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +contestEndDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="text-center">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Contest Ends In:
      </h3>
      <div className="flex justify-center gap-2 md:gap-4">
        {timeUnits.map((unit, index) => (
          <Card key={unit.label} className="p-3 md:p-4 min-w-[60px] md:min-w-[80px] bg-card/80 backdrop-blur-sm">
            <div className="text-xl md:text-2xl font-bold text-primary">
              {String(unit.value).padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground">
              {unit.label}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;