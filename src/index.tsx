import * as React from 'react';
import * as ReactDOM from 'react-dom';


class Hello extends React.Component<{}, { clickedCount: number }> {
    constructor(props) {
        super(props);

        this.state = {
            clickedCount: 0
        }
    }

    increment() {
        this.setState({
            clickedCount: this.state.clickedCount + 1
        })
    }

    render() {
        return(
            <div>test 2</div>
        )
    }
}

ReactDOM.render(<Hello/>, document.getElementById('root'))