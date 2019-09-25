import React from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {admin} from "../../api/admin"

class Login extends React.Component{
    constructor(){
        super();
    }
    handleLogin = e => {
        console.log(e)
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
          if (!err) {
            let res = await admin.adminLogin(values)
            sessionStorage.setItem("currentUser",JSON.stringify(res.data[0]))
            window.location.reload()
          }
        });
      };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div id="login" align="center" >
                <div className="box-center box">
                    <h1>找房子项目后台管理系统</h1>
                    <Form onSubmit={this.handleLogin} className="login-form">
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
                        <Button type="primary" onClick={this.handleLogin.bind(this)} style={{width:"100%"}} className="login-form-button">
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
