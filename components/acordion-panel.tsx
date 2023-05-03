import { useState } from 'react';
import styles from '../styles/Home.module.css';


export const testPanels: PanelComponentData[] = [
    {
        title: 'Panel 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        image: 'https://via.placeholder.com/150',
        imageDescription:'asd'
    },
    {
        title: 'Panel 2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.2',
        image: 'https://via.placeholder.com/150',
        imageDescription:'asd'
    },
    {
        title: 'Panel 3',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.3',
        image: 'https://via.placeholder.com/150',
        imageDescription:'asd'
    },
    {
        title: 'Panel 4',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.4',
        image: 'https://via.placeholder.com/150',
        imageDescription:'asd'
    },
    {
        title: 'Panel 5',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.5',
        image: 'https://via.placeholder.com/150',
        imageDescription:'asd'
    }
    
]



interface PanelComponentData {
    title: string;
    content: string;
    image: string;
    imageDescription: string;
}

interface PanelData {
    panel: PanelComponentData;
    active: boolean;
    onClick: () => void;
}

function PanelItem(props:PanelData) {

    return (
        <div className={styles.accordionPanel}>
            <h2 id='panel3-title' >
                <button
                    className={styles.accordionTrigger}
                    aria-controls='panel3-content'
                    aria-expanded='false'>
                    <span className={styles.accordionTitle}>props.panel.title</span>
                    <svg className={styles.accordionIcon} aria-hidden="true">
                        <use xlinkHref="#boat"></use>
                    </svg>
                </button>
            </h2>

            <div
                className={styles.accordionContent}
                id='panel3-content'
                aria-labelledby='panel3-title'
                aria-hidden='true'
                role='region'>
                <p>props.panel.content</p>
                <img src={props.panel.image} alt={props.panel.imageDescription} className={styles.accordionImage} />
            </div>
        </div>
    )
}


interface AccordionData {
    content: string;
    items: PanelData[];
}

export function Accordion(props:AccordionData) {

    const [activeIndex, setActiveIndex] = useState(false);

    return (
        <div className={styles.firstCarousel}>
            {props.items.map(
                (active, index) => {
                    return (
                        <PanelItem
                            key={index}
                            panel={panel}
                            onClick={() => {
                                setActiveIndex(true)
                            }}
                            active={index == activeIndex }               
                        />
                    )
                }
            )    
            }
            
        </div>
    )
}