# Web application with registration and authentication

## Requirements and description

1. Non-authenticated users should not have access to the user management (admin panel) - **done**

2. Only authenticated users should have access the user management table - **done**

3. Table should have the following columns:

   - id, name, e-mail, last login time, registration time, status (active/blocked) - **done**

4. The leftmost column of the table should contains checkboxes without labels for multiple selection - **done**

5. There must be a toolbar over the table with the following actions:

   - **Block** (red button with text) - **done**

   - **Unblock** (icon) - **done**

   - **Delete** (icon) - **done**

6. CSS framework: Tailwind CSS - **done**

7. All users should be able to block or delete themselves or any other user - **done**

8. If user account is blocked or deleted any next user’s request should redirect to the login page - **done**

9. User can use any non-empty password (even one character) - **No, the minimum password is 6 chars**

10. Blocked user should not be able to login, deleted user can re-register - **done**

## Resources

- Firebase Authentication [link](https://console.firebase.google.com/u/0/)

- Firebase Admin Manage Users [link](https://firebase.google.com/docs/auth/admin/manage-users)

- MongoDB Atlas [link](https://cloud.mongodb.com/v2/66e83ad39dd1012687617fa1#/clusters)

- MongoDB with Node.js [link](https://www.mongodb.com/resources/languages/mongodb-with-nodejs)

- MERN Stack Explained [link](https://www.mongodb.com/resources/languages/mern-stack)

### Start project

```cmd
cd 04-Auth-React-app
npm install
npm run dev
```

**_Fix:_** Missing dependencies warning React doesn't show up

```eslint.config.js
'react/react-in-jsx-scope': 'off'
```
