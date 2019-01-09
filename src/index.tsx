import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

class HelloData {
    @observable clickedCount = 0;

    @action
    increment() {
        this.clickedCount++;
        console.log(this)
    }
}

@observer
class Hello extends React.Component<{}> {
    data = new HelloData();

    render() {
        console.log(this.data);

        return(
            <button onClick={() => this.data.increment()}>
            Click count = {this.data.clickedCount}
            </button>
        )
    }
}

ReactDOM.render(<Hello/>, document.getElementById('root'))