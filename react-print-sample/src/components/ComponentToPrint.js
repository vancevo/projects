import { forwardRef } from 'react';
const ComponentToPrint = forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <h3>See console for output: print window will not open</h3>
            <p>aaaaa</p>
            <p>aaaaa</p>
            <p>aaaaa</p>
            <p>aaaaa</p>
        </div>
    );
});

export default ComponentToPrint;
