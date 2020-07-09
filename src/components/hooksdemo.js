import * as React from 'react';

export const HooksDemo = ({counter}) => {
    const [count, setCount] = React.useState(counter);
    React.useEffect(() => {
        console.log(`Counter Değişti ${counter}`)
    });
    return (
        <>
            <h1>
                Hooks = {count}
            </h1>
            <button onClick={() => setCount(count + 1)}>Hooksda Artır</button>
            <button onClick={() => setCount(counter + 1)}>Hooksda Redux Artır</button>
        </>
    )
}