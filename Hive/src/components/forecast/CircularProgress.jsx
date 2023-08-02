import { useEffect, useState } from "react"


export default function CircularProgress({ targetProgress, duration }){
    const [currentProgress, setCurrentProgress] = useState(0);

    useEffect(() =>{
        const increment = (targetProgress / duration) * 16;
        let animationFrameId;

        const updateProgress = (percent) =>{
            const radius = 45;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (percent / 100) * circumference;

            progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
            progressCircle.style.strokeDashoffset = offset;
            progressText.textContent = `${percent.toFixed(0)}%`;
        }

        const animateProgress = ()=>{
            if(currentProgress < targetProgress){
                setCurrentProgress((curProgress) =>{
                    return Math.min(curProgress + increment, targetProgress)
                })
                animationFrameId = requestAnimationFrame(animateProgress);
            }else {
                setCurrentProgress(targetProgress);
                updateProgress(targetProgress);
            }
        }
        const progressCircle = document.querySelector(".progress-ring");
        const progressText = document.querySelector(".progress-text");
        animateProgress();
        return ()=>{
            return cancelAnimationFrame(animationFrameId);
        }
    }, [currentProgress, targetProgress, duration]);

    

    return (
        <>
          <div className="progress-container">
            <p className="chance">Chance <br /> Of Rain</p>
            <svg className="progress-circle" width={100} height={100}>
                <circle className="progress-ring" cx={50} cy={50} r={45}>
                </circle>
            </svg>
            <h1 className="progress-text">{currentProgress.toFixed(0)}%</h1>
          </div>  
        </>
    )
}