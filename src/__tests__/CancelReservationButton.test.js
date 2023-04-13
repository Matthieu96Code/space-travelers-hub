import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { CancelReservationButton } from '../components';

const mockStore = configureMockStore();
const store = mockStore({
  rocket: {
    name: 'rocket',
    rockets: [
      {
        Active: false,
        boosters: 0,
        company: 'SpaceX',
        cost_per_launch: 6700000,
        country: 'Republic of the Marshall Islands',
        description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
        first_flight: '2006-03-24',
        flickr_images: ['https://imgur.com/DaCfMsj.jpg', 'https://imgur.com/azYafd8.jpg'],
        id: 1,
        reserved: false,
        rocket_id: 'falcon1',
        rocket_name: 'Falcon 1',
        rocket_type: 'rocket',
        stages: 2,
        success_rate_pct: 40,
        wikipedia: 'https://en.wikipedia.org/wiki/Falcon_1',
      },
    ],
  },
});

describe('Cancel Reservation Button', () => {
  it('should render cancel reservation button', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <CancelReservationButton reservationId="falcon1" />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
