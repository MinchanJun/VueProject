import { shallowMount } from '@vue/test-utils'
import Photographer from '@/components/Photographer.vue'


const factory = (values = {}) => {
  return shallowMount(Photographer, {
    propsData: values,
    data () {
      return {
        
      }
    }
  })
}

describe('Photographer.vue', () => {
  it('renders props when passed', () => {
    const link = 'https://google.com';
    const name = 'Minchan Jun';

    const wrapper = factory({link, name});

    expect(wrapper.props().link).toMatch(link);
    expect(wrapper.props().name).toMatch(name);
  })

})

// describe('Photographer.vue', () => {
//   it('renders props when passed', () => {
//     const link = 'https://google.com';
//     const name = 'Minchan Jun'
//     const wrapper = shallowMount(Photographer, {
//       propsData: { link, name }
//     })
//     expect(wrapper.props().link).toMatch(link);
//     expect(wrapper.props().name).toMatch(name);
//   })

// })