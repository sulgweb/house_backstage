import { Layout, Menu, Icon ,Button} from 'antd';
import React from 'react'
import "../../common/css/index.scss"


const { Header, Content, Footer, Sider } = Layout;
export default class Index extends React.Component{
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount(){
    console.log(this.props)
  }
  render(){
    return(
      <div>
        111<br />
        111<br />
        111<br />
        111<br />
        <Button>111</Button>
      </div>
    );
  }
}
