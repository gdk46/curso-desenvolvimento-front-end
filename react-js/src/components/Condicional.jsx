import React from 'react';


export default props => {
    return (
        <div>
            <h3>
                O número é {props.num}
            </h3>

            {
                props.num % 2 == 0 ? 
                    <span>par</span>
                :
                    <span>impar</span>
            }
        </div>
    )

}