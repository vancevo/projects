import { Button, Checkbox, Form, Input, Select, Col, Row } from 'antd';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
const onFinish = (values) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang'
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu'
    }
];

const initStoraged = {
    username: 'zhejiang',
    address: '',
    problem: '',
    description: ''
};

function PrinterForm({ props }, ref) {
    const storageRef = useRef(initStoraged);

    const handleFieldsChange = (field) => {
        const [key, value] = [Object.keys(field)[0], Object.values(field)[0]];
        storageRef.current[key] = value;
    };

    const [isButton, setIsButton] = useState(false);
    // useImperativeHandle(
    //     ref,
    //     () => {
    //         return storageRef.current;
    //     },
    //     []
    // );

    return (
        <>
            <div onClick={() => setIsButton(!isButton)}>Edit</div>
            <div className="flex justify-center h-screen w-screen items-center text-blue-500" ref={ref}>
                {isButton ? (
                    <Form
                        name="basic"
                        colon={false}
                        layout="vertical"
                        labelAlign="right"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        // onValuesChange={handleFieldsChange}
                        autoComplete="off"
                        className="text-white w-[700px]"
                    >
                        <Row
                            gutter={{
                                xs: 8,
                                sm: 16,
                                md: 24,
                                lg: 32
                            }}
                        >
                            <Col xs={24} md={12}>
                                <Form.Item
                                    label="Username"
                                    name="username"
                                    initialValue="Zhejiang"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Select
                                        name="username"
                                        className="text-left"
                                        defaultValue="Zhejiang"
                                        options={options}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12}>
                                <Form.Item
                                    label="Address"
                                    name="address"
                                    rules={[{ required: true, message: 'Please input your address!' }]}
                                >
                                    <Input placeholder="Please fill address" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item
                            label="Problem"
                            name="problem"
                            rules={[{ required: true, message: 'Please input your problem!' }]}
                        >
                            <Input placeholder="Please fill problem" />
                        </Form.Item>
                        <Form.Item
                            label="Description"
                            name="description"
                            rules={[{ required: true, message: 'Please input your description!' }]}
                        >
                            <Input.TextArea rows={4} placeholder="Please fill description" />
                        </Form.Item>

                        <Form.Item label={null} className="test">
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                ) : (
                    <div>Edit Form</div>
                )}
            </div>
        </>
    );
}

export default forwardRef(PrinterForm);
