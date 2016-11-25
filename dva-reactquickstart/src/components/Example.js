import React from 'react';
import { Pagination } from 'antd';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import { Switch } from 'antd';

const Example = (props) => {

  function callback(key) {
    console.log(key);
  }

  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }

  return (
    <div>
        <div>
              <Pagination defaultCurrent={1} total={50} />
        </div>

        <div>
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
              </Tabs>
        </div>
        <div> <Switch defaultChecked={false} onChange={onChange} /></div>
    </div>
  );
};

Example.propTypes = {
};

export default Example;
