import React from 'react'

const UpdatedComponent = WrapperComponent => {
    class NewComponent extends React.Component {
        render(){
            return <WrapperComponent />
        }
    }
    return NewComponent
}

export default UpdatedComponent