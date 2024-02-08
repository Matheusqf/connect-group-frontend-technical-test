import { shallow, render, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import '@testing-library/jest-dom';

configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;
