import React from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';

class Login extends React.Component{
    constructor(){
        super();
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div align="center">
                <div style={{width:"400px"}}>
                    <h1>找房子项目后台管理系统</h1>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                            />,
                        )}
                        </Form.Item>
                        <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                            />,
                        )}
                        </Form.Item>
                        <div>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                        </div>
                    </Form>
                </div>
            </div>
        );
      }
}

export default Form.create({ name: 'Login' })(Login);
