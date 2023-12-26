export default {
  name: 'VueHome',
  data() {
    return {
      title: 'VueHome'
    }
  },
  mounted() {
    
  },
  template: `
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <a class="navbar-brand" href="#/">{{title}}</a>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#/manage">manage</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/insert">insert</a>
      </li>
    </ul>
    <a class="btn btn-outline-success ml-auto" href="#/sign">LogIn</a>
  </nav>
  `,
  methods: {
    
  },
  computed: {
    
  }
}