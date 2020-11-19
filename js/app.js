var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: true,
  },
  // Add default routes
  routes: [
    {
	  path: '/home/',
	  url: 'index.html',
    },
    {
	  path: '/user/',
	  url: './pages/user.html',
    }
  ],
  // ... other parameters
});

var mainView = app.views.create('.view-main');
