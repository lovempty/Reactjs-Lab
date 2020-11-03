import { Component } from "react";
import { Row, Col } from "antd";
import "./organizations.css";
import { Table, Tag, Space } from 'antd';
import logo1 from 'F:/ReactJS/hello-world/src/images/logoProject.png'
import logo2 from 'F:/ReactJS/hello-world/src/images/logoProject2.png'
import logo3 from 'F:/ReactJS/hello-world/src/images/logoProject3.png'

import avatar1 from 'F:/ReactJS/hello-world/src/images/avatar1.jpg'
import avatar2 from 'F:/ReactJS/hello-world/src/images/avatar2.jpg'
import avatar3 from 'F:/ReactJS/hello-world/src/images/avatar3.jpg'
import avatar4 from 'F:/ReactJS/hello-world/src/images/avatar4.jpg'
import avatar5 from 'F:/ReactJS/hello-world/src/images/avatar5.jpg'
import avatar6 from 'F:/ReactJS/hello-world/src/images/avatar6.jpg'
import avatar7 from 'F:/ReactJS/hello-world/src/images/avatar7.jpg'
import avatar8 from 'F:/ReactJS/hello-world/src/images/avatar8.jpg'
import avatar9 from 'F:/ReactJS/hello-world/src/images/avatar9.jpg'
import avatar10 from 'F:/ReactJS/hello-world/src/images/avatar10.jpg'

class Organizations extends Component {
  render = () => {
    const listAvatar1 = [avatar1,avatar2,avatar3,avatar4,avatar5,avatar6,avatar7,avatar8,avatar9,avatar10]
    const listAvatar2 = [avatar1,avatar2,avatar3,avatar4,avatar5,avatar6]
    const listAvatar3 = []
    const dataSource = [
      {
        key: '1',
        name: 'Trames pte ltd',
        avatars: listAvatar1,
        numberOfMember: 13,
        numberOfTeam: 6,
        logo: logo1
      },
      
      {
        key: '2',
        name: 'Richland logistics',
        avatars: listAvatar2,
        numberOfMember: 9,
        numberOfTeam: 0,
        logo: logo2
      },
      {
        key: '3',
        name: 'Damco pte ltd',
        avatars: listAvatar3,
        numberOfMember: 0,
        numberOfTeam: 0,
        logo: logo3
      }
    ];

    const columns = [
      {
        title: 'Logo',
        dataIndex: 'logo',
        key: 'logo',
        align: 'right',
        render: img => <img src={img} />,
        width: 30
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <h2 style={{color: 'rgb(14 38 71)', fontSize: 22}}>{text}</h2>
      },
      {
        title: 'Avatars',
        dataIndex: 'avatars',
        key: 'avatars',
        align: 'right',
        render: listAvatars => (
          <>
            {listAvatars.map(avatar => {
              return (
                <img alt="Avatar" class="avatar" src={avatar} />
              );
            })}
          </>
        )
      },
      {
        title: 'Member',
        dataIndex: 'numberOfMember',
        key: 'numberOfMember',
        align: 'center',
        render: text => <h3 style={{color: 'rgb(105 127 164)', fontSize: 18}}>{text} members</h3>
      },
      {
        title: 'Team',
        dataIndex: 'numberOfTeam',
        key: 'numberOfTeam',
        width: 100,
        render: text => <h3 style={{color: 'rgb(105 127 164)', fontSize: 18}}>{text} teams</h3>
      },

    ];

    return (
      <div>
          <Table showHeader={false} pagination={false} columns={columns} dataSource={dataSource} />
      </div>
    );
  };
}

export default Organizations;
