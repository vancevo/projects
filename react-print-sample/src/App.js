import './App.css';
import { useRef, useCallback } from 'react';
import { useReactToPrint } from 'react-to-print';
import PrinterForm from './components/PrinterForm';

export default function App() {
    const contentRef = useRef(null);
    const reactToPrintFn = useReactToPrint({ contentRef });

    return (
        <div>
            <button onClick={reactToPrintFn}>Print</button>
            <PrinterForm ref={contentRef} />
        </div>
    );
}
