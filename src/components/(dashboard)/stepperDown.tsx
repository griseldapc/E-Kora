'use client';

import { Title } from '@mantine/core';
import { IconWorldCheck } from '@tabler/icons-react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function StepperDown() {
  return (
    <VerticalTimeline>
      <Title order={3}>Detail Penyelidikan Perkara</Title>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', border: '1px solid rgba(0,0,0,0.5)' }}
    icon={<IconWorldCheck />}
    visible={true}
  >
    <h3 className="vertical-timeline-element-title">Penyelidikan 1</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi corrupti, deleniti dolorum aliquam voluptatem sed maxime. Eligendi quam ad dolorum doloribus? Quam quasi, rem nostrum aliquid natus doloribus expedita nam.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IconWorldCheck />}
    visible={true}
  >
    <h3 className="vertical-timeline-element-title">Penyelidikan 2</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, aut dolores? Quae dolores repellendus blanditiis, nemo animi voluptatem nisi dolorem aperiam nesciunt libero, ducimus adipisci molestias, eaque quidem harum recusandae!
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IconWorldCheck />}
    visible={true}
  >
    <h3 className="vertical-timeline-element-title">Penyelidikan 3</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam corrupti molestiae magni unde veritatis voluptatum tempore, culpa eum quae. Voluptatem quae ea doloribus? Quibusdam nostrum omnis fuga accusamus et ipsa.
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
  )
}


export default StepperDown;