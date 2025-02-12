"use client"

import {useOverlay} from "@/contexts/OverlayContext";
import {motion, AnimatePresence} from "framer-motion";

const Overlay = () => {
    const {isOpen} = useOverlay();

    return (<AnimatePresence>
        {isOpen && (
            <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10 pointer-events-none"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.25}}
            >
            </motion.div>
        )}
    </AnimatePresence>)
}
export default Overlay;