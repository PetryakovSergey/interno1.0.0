import { createStore } from 'vuex'

export default createStore({
  state: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
    latestPost: {
      title: 'Low Cost Latest Invented Interior Designing Ideas',
      upperText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximu posuere in.Contrary to popular belief.',
      downText: 'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
      data: '26 December,2022'
    }
  },
  getters: {
    getDescription: state => state.description,
    getLatestPost: state => state.latestPost
  },

})
