import styles from '../styles/Home.module.css';
import { useState } from 'react';



interface PanelData {
    title: string;
    content: string;
    image: string;
    
}

interface PanelComponentProps {
    panel: PanelData;
    onClick: () => void;
    active: boolean;
}


export const testPanels: PanelData[] = [
    {
        title: 'Panel 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: 'Panel 2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.2',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: 'Panel 3',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.3',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: 'Panel 4',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.4',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: 'Panel 5',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.5',
        image: 'https://via.placeholder.com/150',
    }
    
]

function PanelDisplay(props: PanelComponentProps) {
    return (
        <div className={styles.accordionPanel} onClick={props.onClick} >
            <h2 id='panel1-title' >
                <button
                    className={styles.accordionTrigger}
                    aria-controls='panel1-content'
                    aria-expanded={props.active}>
                    <span className={styles.accordionTitle}>{props.panel.title}</span>
                    <svg className={styles.accordionIcon} aria-hidden="true">
                        <use xlinkHref="#boat"></use>
                    </svg>
                </button>
            </h2>

            <div
                className={styles.accordionContent}
                id='panel1-content'
                aria-labelledby='panel1-title'
                aria-hidden='false'
                role='region'>
                <p>{props.panel.content}.</p>
                <img src={props.panel.image} alt="" className={styles.accordionImage} />
            </div>
        </div>
    )
}


interface AccordionProps {
    title: string;
    items: PanelData[];
}


export function Accordion(props: AccordionProps) {

    const [activeIndex, setActiveIndex] = useState(0);


    return (
        <div className={styles.accordion}>
            {props.items.map((panel, index) => {
                return (
                    <PanelDisplay
                        key={index}
                        panel={panel}
                        onClick={() => {
                            setActiveIndex(index)
                        }}
                        active={index === activeIndex}
                    />
                )
            } )}
        </div>
    )
}