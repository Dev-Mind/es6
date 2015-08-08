"use strict";
var user = {
  id: 1,
  name: 'Guillaume'
};
var users = new Set();
users.set(user.id, user);
users.has(user.id);
users.delete(user.id);
