import { routes } from './app.routes';
import { UsersComponent } from './users/users.component';

xdescribe('routes', () => {
  it('should contain a route for /users', () => {
    let usersRoute = { path: 'users', component: UsersComponent };
    expect(routes).toContain(usersRoute);
  });
});
