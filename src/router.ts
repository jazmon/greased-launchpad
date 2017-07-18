import * as express from 'express';
import { Router } from 'express-serve-static-core';

import * as users from '~/modules/users/endpoint';
import * as location from '~/modules/locations/endpoint';
import * as messages from '~/modules/messages/endpoint';
import * as posts from '~/modules/posts/endpoint';

const router = express.Router();

router.get('/locations', location.getLocations);

router.get('/messages', messages.getMessages);
router.post('/messages', messages.submitMessage);

router.get('/users', users.getUsers);
router.post('/users', users.createUser);

router.get('/posts', posts.getPosts);

export default router;
