import React from 'react';
import styled from 'styled-components'

const Container = ({className, children})=>{
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default styled(Container)`
    max-width: 960px;
    margin: 0 auto;
    
`;