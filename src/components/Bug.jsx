import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bug as BugIcon } from 'lucide-react';

const Bug = ({ id, x, y, size = 20, delay = 0 }) => {
    const [isSquashed, setIsSquashed] = useState(false);

    const handleSquash = () => {
        setIsSquashed(true);
    };

    return (
        <AnimatePresence>
            {!isSquashed && (
                <motion.div
                    key={id}
                    style={{
                        position: 'absolute',
                        left: x,
                        top: y,
                        zIndex: 0,
                        cursor: 'crosshair',
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0.4, 0.8, 0.4],
                        y: [y, y - 20, y],
                        scale: 1,
                    }}
                    exit={{ opacity: 0, scale: 2, rotate: 180 }}
                    transition={{
                        opacity: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay },
                        y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay },
                        default: { duration: 0.5 },
                    }}
                    onHoverStart={handleSquash}
                    onClick={handleSquash}
                    whileHover={{ scale: 1.2 }}
                >
                    <BugIcon size={size} color="#ef4444" />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Bug;
