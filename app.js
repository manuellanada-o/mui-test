"use strict";

class MainReact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <strong>app.js</strong> is loaded<br/>
            <SubComponent />
        </div>
    )
  }
}

ReactDOM.render(<MainReact />, document.getElementById("root-react"));
