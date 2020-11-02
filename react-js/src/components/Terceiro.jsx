import React from 'react';


// componente filho
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) =>
    <>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse felis nisi, tincidunt a maximus luctus, ornare pellentesque felis. Suspendisse ac pulvinar neque. Quisque efficitur arcu non arcu malesuada, vehicula aliquet nisi lacinia
        </p>
        <div>
            {props.children}
        </div>
    </>