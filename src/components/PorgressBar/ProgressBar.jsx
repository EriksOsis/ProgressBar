import classes from './ProgressBar.module.css';

export function ProgressBar({steps, progress}) {

    const lineStyle = {
        animation: `${classes.barProgress} 1s forwards`
    };

    const stepStyle = {
        animation: `${classes.stepProgress} .3s forwards`,
        animationDelay: '.9s'
    };

    const headingStyle = {
        animation: `${classes.headingProgress} .3s forwards`,
        animationDelay: '.9s'
    };

    const mappedData = steps.map((step, index) => {

        const actualStepId = index + 1;

        return (
            index !== steps.length - 1 &&
            <div className={classes.container} key={index}>
                <div className={classes['step-container']}>
                    <div className={classes['step-counter']} style={actualStepId <= progress ? stepStyle : null}>
                        {progress > actualStepId ? <p>&#10004;</p> : <p>{actualStepId}</p>}
                    </div>
                    <div className={classes['step-heading']}
                         style={actualStepId <= progress ? headingStyle : null}>
                        <p>{step}</p>
                    </div>
                </div>
            </div>
        )
    });

    const elements = mappedData.reduce((acc, step) => acc.concat(step,
        <div key={acc} className={classes['line-between']}>
            <div className={classes['line-between-filled']}
                 style={progress - 1 > step.key ? lineStyle : null}/>
        </div>), []
    );

    return (
        <section className={classes['progress-bar-container']}>
            <div className={classes['progress-line']}>
                <div className={classes['progress-line-filled']} style={lineStyle}/>
            </div>
            {elements.slice(0, -3)}
            <div className={classes['progress-line']}>
                <div className={classes['progress-line-filled']}
                     style={progress >= elements.slice(0, -steps.length).length ? lineStyle : null}/>
            </div>
        </section>
    )
}