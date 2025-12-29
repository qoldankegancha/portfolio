import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-4xl font-bold font-display uppercase tracking-tighter mb-2"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="h-1 w-20 bg-black"
      />
    )}
  </div>
);

export default SectionHeader;
