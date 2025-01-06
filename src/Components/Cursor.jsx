import { gsap } from "gsap";
import { useEffect } from "react";

function Cursor() {
    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;

            gsap.to("#cursor", {
                x: clientX - 10, // Offset by half of cursor size
                y: clientY - 10,
                duration: 0.3,
                delay: 0,
                ease: "power4.out",
            });
        };
        

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            id="cursor"
            className="h-[20px] w-[20px] bg-white drop-shadow-md rounded-full z-10 fixed pointer-events-none mix-blend-difference"
        />
    );
}

export default Cursor;
