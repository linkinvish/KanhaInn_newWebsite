import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const stats = [
  { value: 19, label: "Comfortable Rooms", suffix: "" },
  { value: 24, label: "Security & Service", suffix: "/7" },
  { value: 100, label: "Guest Satisfaction", suffix: "%" },
  { value: 5, label: "Premium Service", suffix: "★", isStar: true },
];

function CountUp({
  end,
  suffix,
  inView,
  duration = 1500,
  isStar = false
}: {
  end: number; 
  suffix: string; 
  inView: boolean; 
  duration?: number;
  isStar?: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [inView, end, duration]);

  return (
    <span>
      {count}
      {isStar ? (
        <Star className="w-8 h-8 inline-block ml-1 fill-current" />
      ) : (
        suffix
      )}
    </span>
  );
}

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-amber-500 py-16" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-white">
              <div className="text-4xl sm:text-5xl font-bold mb-2 flex items-center justify-center">
                <CountUp
                  end={stat.value}
                  suffix={stat.suffix}
                  inView={isInView}
                  isStar={stat.isStar}
                />
              </div>
              <p className="text-white/90 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
