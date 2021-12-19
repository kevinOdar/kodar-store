import Button from '../components/shared/Button';
import '../index.css';

export default {
  title: 'kodarStore/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: 'primary',
  size: 'large',
  label: 'Primary button',
};

const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  size: 'medium',
  label: 'Secondary button',
};

const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Large button',
};

const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Medium button',
};

const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Small button',
};

export { Primary, Secondary, Large, Medium, Small };
