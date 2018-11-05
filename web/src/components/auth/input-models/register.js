export default {
  name: {
    type: 'object',
    properties: {
      first: {type: 'string'},
      last: {type: 'string'}
    }
  },
  username: {type: 'string'},
  email: {
    type: 'string'
    /* pattern: "^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\$" */
  },
  password: {
    type: 'string',
    pattern: 'TODO'
  },
  password2: {
    type: 'string'
  },
  required: ['name', 'username', 'email', 'password']
}
