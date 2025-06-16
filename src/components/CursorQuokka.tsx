import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import idle from "../public/sprites/idle.gif";
import walk from "../public/sprites/walk.gif";
import run from "../public/sprites/run.gif";

interface Position {
    x: number;
    y: number;
}

const FollowCursor: React.FC = () => {
    const [pos, setPos] = useState<Position>({ x: 0, y: 0 });
    const [prevPos, setPrevPos] = useState<Position>({ x: 0, y: 0 });
    const [speed, setSpeed] = useState(0);
    const [facingLeft, setFacingLeft] = useState(false);
    const [animation, setAnimation] = useState<"idle" | "walk" | "run">("idle");

    const lastMoveTime = useRef(performance.now());

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            const now = performance.now();
            const dx = e.clientX - prevPos.x;
            const dy = e.clientY - prevPos.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const dt = now - ((window as any).__lastTime || now);
            (window as any).__lastTime = now;

            const pxPerSec = (dist / dt) * 1000;

            setSpeed(pxPerSec);
            setPos({ x: e.clientX, y: e.clientY });
            setPrevPos({ x: e.clientX, y: e.clientY });
            lastMoveTime.current = now;

            if (Math.abs(dx) > 1) {
                setFacingLeft(dx < 0);
            }

            // Immediately update animation based on speed
            if (speed < 150) setAnimation("walk");
            else setAnimation("run");
        };

        window.addEventListener("mousemove", handleMove);

        // 👇 check every 360ms for inactivity
        const interval = setInterval(() => {
            const now = performance.now();
            if (now - lastMoveTime.current > 520) {
                setSpeed(0);
                setAnimation("idle");
            }
        }, 100);

        return () => {
            window.removeEventListener("mousemove", handleMove);
            clearInterval(interval);
        };
    }, [prevPos]);

    const getCharacterImage = () => {
        switch (animation) {
            case "idle": return idle;
            case "walk": return walk;
            case "run": return run;
        }
    };

    return (
        <motion.div
            className="fixed pointer-events-none z-50"
            animate={{ x: pos.x, y: pos.y }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
        >
            <img
                src={getCharacterImage()}
                alt={animation}
                className={`${animation == "idle" ? "w-14 h-14" : "w-20 h-20"} transform ${facingLeft ? "-scale-x-100" : ""}`}
            />
        </motion.div>
    );
};

export default FollowCursor;
