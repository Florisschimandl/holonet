import { shallowMount } from '@vue/test-utils';
import App from "@/App.vue";
import fetchMock from "jest-fetch-mock";
import TvShow from ",,/../src/types/tvShow.type"

const showsMock: TvShow =   {
  "id": 1,
  "url": "http://www.tvmaze.com/shows/1/under-the-dome",
  "name": "Under the Dome",
  "type": "Scripted",
  "language": "English",
  "genres": ["Drama", "Science-Fiction", "Thriller"],
  "status": "Ended",
  "runtime": 60,
  "premiered": "2013-06-24",
  "officialSite": "http://www.cbs.com/shows/under-the-dome/",
  "schedule": {
    "time": "22:00",
    "days": ["Thursday"]
  },
  "rating": {
    "average": 6.5
  },
  "weight": 97,
  "network": {
    "id": 2,
    "name": "CBS",
    "country": {
      "name": "United States",
      "code": "US",
      "timezone": "America/New_York"
    }
  },
  "webChannel": null,
  "externals": {
    "tvrage": 25988,
    "thetvdb": 264492,
    "imdb": "tt1553656"
  },
  "image": {
    "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
    "original": "http://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
  },
  "summary": "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
  "updated": 1573667713,
  "_links": {
    "self": {
      "href": "http://api.tvmaze.com/shows/1"
    },
    "previousepisode": {
      "href": "http://api.tvmaze.com/episodes/185054"
    }
  }
};

describe("App.vue", () => {
  const wrapper = shallowMount(App);

  fetchMock.mockResponse(JSON.stringify(showsMock)); 
  // TODO: fix fetch for future tests - fails on invalid-json while json checks out valid

  it('toggle visibility of the modal component', () => {

      expect(wrapper.vm.showModal).toBe(false); //initial
      wrapper.vm.toggleModal();  // call function
      expect(wrapper.vm.showModal).toBe(true); // modal
  });
});
