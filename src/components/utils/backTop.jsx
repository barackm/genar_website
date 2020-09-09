import { Component } from "react";
import { withRouter } from "react-router-dom";

class BackTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      // window.Animation({ scrollTo: 0 }, 500);
      // window.scrollTo(0, 0);
      window.scrollTo(0, 0);
      // $("window").animate({ scrollTo: 0 }, 500);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(BackTop);
