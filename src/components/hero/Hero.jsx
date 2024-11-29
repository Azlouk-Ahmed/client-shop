import { useEffect, useState } from "react";
import { useHoneyContext } from "../../hooks/useAuthContext";

function Hero() {
    const { selectedHoney } = useHoneyContext();
    const [positionBee1, setPositionBee1] = useState({ x: 0, y: 0 });
    const [positionBee2, setPositionBee2] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const container = document.querySelector('.hero');

        function getRandomPosition() {
            const containerRect = container.getBoundingClientRect();
            const beeSize = 50; // Assuming bee width and height are 50px

            const maxX = containerRect.width - 1000;
            const maxY = containerRect.height - beeSize;

            // Generate random positions within the container's adjusted boundaries
            const x = Math.random() * maxX;
            const y = Math.random() * maxY;

            return { x, y };
        }

        // Move Bee 1
        const intervalId1 = setInterval(() => {
            setPositionBee1(getRandomPosition());
        }, 1000); // Move every second

        // Move Bee 2
        const intervalId2 = setInterval(() => {
            setPositionBee2(getRandomPosition());
        }, 1000); // Move every second

        return () => {
            clearInterval(intervalId1);
            clearInterval(intervalId2);
        }; // Cleanup on component unmount
    }, []);

    return (
        <div className="hero pr container-padding ta-c flex justify-center"> 
            <div className="df justify-center pr w-fit mx-auto">
                <div className="w-2/5">
                <div className="primary-title pr underlin">
   <strong>{selectedHoney}</strong>

  </div>
                    <p className="mt-12 text-base text-right font-bold">
                        نحن في عسل الزهور نسعى لتقديم العسل الطبيعي النقي المستخرج من أجود أنواع الزهور البرية. يتميز عسلنا بجودته العالية وطعمه الغني الذي يأتي مباشرة من الطبيعة بدون أي إضافات أو مواد حافظة.
                    </p>
                </div>
                    <img src="/img/herohoney.png" className="" alt=""/>
                
                </div> 
            {/* <img
                src="/img/bee.png"
                className="bee"
                alt="Bee 1"
                style={{
                    transform: `translate(${positionBee1.x}px, ${positionBee1.y}px)`,
                }}
            />
            <img
                src="/img/bee.png"
                className="bee"
                alt="Bee 2"
                style={{
                    transform: `translate(-${positionBee2.x}px, ${positionBee2.y}px)`,
                }}
            /> */}
            <img src="/img/flower.webp" className="flower" alt="" />
            <img src="/img/flr.png" className="flowerleft" alt="" />
            <img src="/img/beedash-.png" className="flowerleft dir dashed1" alt="" />
        </div>
    );
}

export default Hero;
