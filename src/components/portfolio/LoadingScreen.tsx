import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1100);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <div className="flex flex-col items-center gap-5">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-brand opacity-50 blur-2xl animate-pulse-glow" />
              <div className="relative grid h-16 w-16 place-items-center rounded-2xl bg-gradient-brand text-2xl font-bold text-primary-foreground shadow-glow">
                A
              </div>
            </motion.div>
            <div className="h-1 w-32 overflow-hidden rounded-full bg-secondary">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                className="h-full w-1/2 rounded-full bg-gradient-brand"
              />
            </div>
            <div className="font-mono text-xs text-muted-foreground">Loading portfolio...</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
