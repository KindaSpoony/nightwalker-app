import { motion } from 'framer-motion';

export default function Loader({ text = "Initializing..." }: { text?: string }) {
  return (
    <motion.div
      className="text-sm text-muted-foreground italic"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      ?? {text}
    </motion.div>
  );
}
