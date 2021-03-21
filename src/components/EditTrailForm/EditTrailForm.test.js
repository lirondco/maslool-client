import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import EditTrailForm from "./EditTrailForm";
import { withContext } from "shallow-with-context";

describe(`EditTrailForm component`, () => {
  const context = {
    setAllTrails: () => {},
    setError: () => {},
    clearError: () => {},
    error: null,
    trail: {
        id: 1,
        name: 'test',
        website: 'test.web.si.te',
        description: 'test',
        safety: null,
        difficulty: 'Beginner',
        location: {
            address_line: '111 Te St.',
            city: 'Test City',
            region: 'Testxas',
            postal_code: '44444'
        }
    },
    allTrails: [
        {
            id: 1,
            name: 'test',
            website: 'test.web.si.te',
            description: 'test',
            safety: null,
            difficulty: 'Beginner',
            location: {
                address_line: '111 Te St.',
                city: 'Test City',
                region: 'Testxas',
                postal_code: '44444'
            }
        }
    ]
  };
  const ComponentWithContext = withContext(EditTrailForm, context);

  it("renders the form", () => {
    const wrapper = shallow(<ComponentWithContext />, { context });
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("form submits when submitted", () => {
    const wrapper = shallow(<ComponentWithContext />, { context });
    const mockedEvent = {
      preventDefault: () => {},
      target: { trailId: { value: 2 } },
    };
    wrapper.find("form").at(0).simulate("submit", mockedEvent);
  });
});
