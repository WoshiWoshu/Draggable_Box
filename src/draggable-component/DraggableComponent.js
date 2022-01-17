import React from 'react';
import './DraggableComponent.css';

const DraggableComponent = () => {

    let offsetX;
    let offsetY;

    const moveWindow = event => {
        const eventTarget = event.target;

        eventTarget.style.left = `${event.pageX - offsetX}px`;
        eventTarget.style.top = `${event.pageY - offsetY}px`;
    }

    const addWindow = event => {
        const eventTarget = event.target;

        offsetX = event.clientX - eventTarget.getBoundingClientRect().left;
        offsetY = event.clientY - eventTarget.getBoundingClientRect().top;
        eventTarget.addEventListener('mousemove', moveWindow);
    }

    const removeWindow = event => {
        const eventTarget = event.target;

        eventTarget.removeEventListener('mousemove', moveWindow);
    }

    return (
        <div className="wrapper-box" onMouseDown={addWindow} onMouseUp={removeWindow}>
            <div className="box">Box</div>
        </div>
    );

}

export default DraggableComponent;
