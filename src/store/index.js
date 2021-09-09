import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedQuestion: null,
    selectedGroup: null,
    questions: [
      {
        id: 1,
        title: 'Who is the president of Ghana',
        body:
          '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sapiente perspiciatis pariatur modi iste quisquam, similique consequuntur accusamus dolore officia itaque labore harum minus quae laborum repellendus totam, ipsum autem. Magni quae temporibus quas tempora non? Neque quod qui reiciendis nesciunt quos cum sapiente saepe enim, ullam, vero quibusdam mollitia debitis laborum, consequatur quo dicta temporibus ratione earum suscipit id maxime asperiores facere quis? Nihil facilis numquam dicta qui? Minima necessitatibus sint tempora laudantium exercitationem expedita, corrupti odio cupiditate illo quae, numquam consequatur earum corporis, aut blanditiis reprehenderit culpa magni natus qui sequi labore! Beatae obcaecati odit minima nam! Aliquid quia porro, pariatur tempora exercitationem enim, non labore, fuga doloremque dicta facere voluptatibus officia dolore. Suscipit assumenda harum accusamus in pariatur cupiditate dolores ipsum ipsa, similique nesciunt et sapiente? Nemo sed corporis, nihil odio fugiat enim recusandae unde optio, ut qui quasi facilis a maiores rerum odit quas cum, nulla aliquam distinctio repellat ipsa hic maxime. A aspernatur doloremque aliquid nam dolores, distinctio ex, modi animi hic harum laborum error accusantium quae facere! Suscipit, autem exercitationem! Officiis distinctio dolor fuga quae molestiae! Maxime magni autem dignissimos nihil aliquid voluptates quibusdam sit dolorum suscipit, fugiat excepturi odio eos doloribus ullam? Tenetur!',
      },
      {
        id: 2,
        title: 'Why is React so popular',
        body:
          'What makes a JavaScript library good? Is it the number of stars on GitHub? The number of downloads on npm? Is the number of tweets that ThoughtLeadersTM write about it on a daily basis important? How do we pick the best tool to use to build the best thing? How do we know it’s worth our time? How do we know it’s good? When React was first released, there was a lot of conversation around whether it was good, and there were many skeptics. It was new, and thenew can often be upsetting. To respond to these critiques, Pete Hunt from the React team wrote an article called “Why React?” that recommended that you “give it [React] five minutes.” He wanted to encourage people to work with React first before thinking that the team’s approach was too wild. Yes, React a small library that doesn’t come with everything you might need out of the box to build your application. Give it five minutes.',
      },
      {
        id: 3,
        title: 'My vue router is not working',
        body:
          'I added a router-link element that is displayed when a product is edited and that navigates to the next product in the data store. The component displayed to the user doesn’t change, which means that Vue Router won’t destroy the existing instance of the ProductEditor component and create a new one. Components can implement methods to receive notifications from the routing system. I describe the full range of methods in Chapter 24, but for this chapter, it the beforeRouteUpdate method that is important because it is called when the route is about to change without destroying the compon',
      },
      {
        id: 4,
        title: 'What is functional programming?',
        body:
          'When you start to explore React, you’ll likely notice that the topic of functional programming comes up a lot. Functional techniques are being used more and more in JavaScript projects, particularly React projects. It’s likely that you’ve already written functional JavaScript code without thinking about it. If you’ve mapped or reduced an array, then you’re already on your way to becoming a functional JavaScript programmer. Functional programming techniques are core not only to React but to many of the libraries in the React ecosystem as well.If you’re wondering where this functional trend came from, the answer is the 1930s, with the invention of lambda calculus, or λ-calculus. 1Functions have been a part of calculus since it emerged in the 17th century. Functions can be sent to functions as arguments or returned from functions as results. More complex functions, called higher-order functions, can manipulate functions and use them as either arguments or results or both. In the 1930s, Alonzo Church was at Princeton experimenting with these higher-order functions when he invented lambda calculus.',
      },
    ],
    groups: [
      {
        id: 1,
        name: 'Physics Boyz',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, nam!',
      },
      {
        id: 2,
        name: 'Rails Developers Zim',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, nam!',
      },
      {
        id: 3,
        name: 'Business Enterpreneurs',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, nam!',
      },
    ],
  },

  mutations: {
    setQuestion(state, id) {
      state.selectedQuestion = state.questions.find((q) => q.id == id);
    },
    setGroup(state, id) {
      state.selectedGroup = state.groups.find((g) => g.id == id);
    },
  },
});
